import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  calculateLoanQuote,
  clampLoanAmount,
  type LoanQuote,
  type LoanTerm,
} from "./loan-quote";
import { type UserPersona } from "./data/users";

export type LoanRecord = {
  id: string;
  amount: number;
  term: LoanTerm;
  monthlyPayment: number;
  firstPaymentDate: string;
  paidAmount: number;
  nextDueDate: string;
};

export type LoanStep = "userSelect" | "offer" | "review" | "supplement" | "faceVerify" | "faceCapture" | "approval" | "otp" | "result" | "loanDashboard" | "payment" | "cashier" | "paymentDone";

const VALID_STEPS = new Set<LoanStep>([
  "userSelect", "offer", "review", "supplement", "faceVerify", "faceCapture", "approval", "otp", "result", "loanDashboard", "payment", "cashier", "paymentDone",
]);

function hashToStep(): LoanStep {
  const hash = window.location.hash.slice(1) as LoanStep;
  return VALID_STEPS.has(hash) ? hash : "userSelect";
}

type LoanFlowValue = {
  amount: number;
  term: LoanTerm;
  quote: LoanQuote;
  step: LoanStep;
  selectedUser: UserPersona | null;
  showSchedule: boolean;
  totalDisbursed: number;
  isReturnUser: boolean;
  loanHistory: LoanRecord[];
  paymentLoanId: string | null;
  paymentAmount: number | null;
  setAmount: (amount: number) => void;
  setAmountDirect: (amount: number) => void;
  setTerm: (term: LoanTerm) => void;
  setSelectedUser: (user: UserPersona) => void;
  openSchedule: () => void;
  closeSchedule: () => void;
  addDisbursement: (record: LoanRecord) => void;
  markReturnUser: () => void;
  goToUserSelect: () => void;
  goToReview: () => void;
  goToOffer: () => void;
  goToSupplement: () => void;
  goToFaceVerify: () => void;
  goToFaceCapture: () => void;
  goToApproval: () => void;
  goToOtp: () => void;
  goToResult: () => void;
  goToLoanDashboard: () => void;
  goToPayment: (loanId: string) => void;
  goToCashier: (amount: number) => void;
  goToPaymentDone: () => void;
  recordPayment: (loanId: string, amount: number) => void;
};

const LoanFlowContext = createContext<LoanFlowValue | null>(null);

export function LoanFlowProvider({ children }: PropsWithChildren) {
  const [amount, setAmountState] = useState(15_000_000);
  const [term, setTerm] = useState<LoanTerm>(6);
  const [step, setStepState] = useState<LoanStep>(hashToStep);
  const [selectedUser, setSelectedUser] = useState<UserPersona | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);
  const [totalDisbursed, setTotalDisbursed] = useState(0);
  const [isReturnUser, setIsReturnUser] = useState(false);
  const [loanHistory, setLoanHistory] = useState<LoanRecord[]>([]);
  const [paymentLoanId, setPaymentLoanId] = useState<string | null>(null);
  const [paymentAmount, setPaymentAmount] = useState<number | null>(null);

  // Keep hash in sync when step changes programmatically.
  const setStep = (next: LoanStep) => {
    window.location.hash = next;
    setStepState(next);
  };

  // Handle browser back/forward and direct URL edits.
  useEffect(() => {
    const onHashChange = () => setStepState(hashToStep());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const quote = useMemo(() => calculateLoanQuote(amount, term), [amount, term]);

  const value = useMemo<LoanFlowValue>(
    () => ({
      amount,
      term,
      quote,
      step,
      selectedUser,
      showSchedule,
      setAmount: (nextAmount) => setAmountState(clampLoanAmount(nextAmount)),
      setAmountDirect: (nextAmount) => setAmountState(nextAmount),
      setTerm,
      setSelectedUser,
      openSchedule: () => setShowSchedule(true),
      closeSchedule: () => setShowSchedule(false),
      totalDisbursed,
      isReturnUser,
      loanHistory,
      addDisbursement: (record) => {
        setTotalDisbursed((prev) => prev + record.amount);
        setLoanHistory((prev) => [...prev, record]);
      },
      markReturnUser: () => setIsReturnUser(true),
      goToUserSelect: () => {
        setIsReturnUser(false);
        setTotalDisbursed(0);
        setLoanHistory([]);
        setStep("userSelect");
      },
      goToReview: () => setStep("review"),
      goToOffer: () => setStep("offer"),
      goToSupplement: () => setStep("supplement"),
      goToFaceVerify: () => setStep("faceVerify"),
      goToFaceCapture: () => setStep("faceCapture"),
      goToApproval: () => setStep("approval"),
      goToOtp: () => setStep("otp"),
      goToResult: () => setStep("result"),
      goToLoanDashboard: () => setStep("loanDashboard"),
      paymentLoanId,
      paymentAmount,
      goToPayment: (loanId: string) => {
        setPaymentLoanId(loanId);
        setStep("payment");
      },
      goToCashier: (amount: number) => {
        setPaymentAmount(amount);
        setStep("cashier");
      },
      goToPaymentDone: () => setStep("paymentDone"),
      recordPayment: (loanId: string, paid: number) => {
        setLoanHistory((prev) => prev.map((l) => {
          if (l.id !== loanId) return l;
          // Advance due date by 1 month (mm is 1-indexed, new Date uses 0-indexed month)
          const [dd, mm, yyyy] = l.nextDueDate.split("/").map(Number);
          const next = new Date(yyyy, mm, dd); // mm already acts as mm-1+1
          const nextDue = `${String(next.getDate()).padStart(2, "0")}/${String(next.getMonth() + 1).padStart(2, "0")}/${next.getFullYear()}`;
          // monthlyPayment stays fixed (revolving installment) — only date advances
          return { ...l, paidAmount: l.paidAmount + paid, nextDueDate: nextDue };
        }));
        // Restore available credit, floored to nearest 500k
        const restored = Math.floor(paid / 500_000) * 500_000;
        setTotalDisbursed((prev) => Math.max(0, prev - restored));
      },
    }),
    [amount, isReturnUser, loanHistory, paymentAmount, paymentLoanId, quote, selectedUser, showSchedule, step, term, totalDisbursed],
  );

  return <LoanFlowContext.Provider value={value}>{children}</LoanFlowContext.Provider>;
}

export function useLoanFlow() {
  const context = useContext(LoanFlowContext);

  if (!context) {
    throw new Error("useLoanFlow must be used within LoanFlowProvider");
  }

  return context;
}
