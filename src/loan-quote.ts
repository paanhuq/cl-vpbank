export const LOAN_MIN = 2_000_000;
export const LOAN_MAX = 30_000_000;
export const LOAN_STEP = 500_000;
export const PROCESSING_FEE = 200_000;

export const TERM_OPTIONS = [3, 6, 9, 12] as const;

const TERM_RATES: Record<(typeof TERM_OPTIONS)[number], number> = {
  3: 0.018,
  6: 0.02,
  9: 0.023,
  12: 0.027,
};

export type LoanTerm = (typeof TERM_OPTIONS)[number];

export type LoanQuote = {
  amount: number;
  term: LoanTerm;
  monthlyRate: number;
  monthlyPayment: number;
  totalRepayment: number;
  estimatedInterest: number;
  processingFee: number;
  firstPaymentDate: string;
};

export function formatCurrency(value: number): string {
  return `${new Intl.NumberFormat("vi-VN").format(value)}đ`;
}

export function calculateLoanQuote(amount: number, term: LoanTerm): LoanQuote {
  const monthlyRate = TERM_RATES[term];
  const monthlyPayment = Math.round(
    amount * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -term))),
  );
  const totalRepayment = Math.round(monthlyPayment * term + PROCESSING_FEE);
  const estimatedInterest = totalRepayment - amount - PROCESSING_FEE;

  return {
    amount,
    term,
    monthlyRate,
    monthlyPayment,
    totalRepayment,
    estimatedInterest,
    processingFee: PROCESSING_FEE,
    firstPaymentDate: "04/06/2026",
  };
}

export function clampLoanAmount(value: number): number {
  const clamped = Math.min(Math.max(value, LOAN_MIN), LOAN_MAX);
  const steps = Math.round((clamped - LOAN_MIN) / LOAN_STEP);
  return LOAN_MIN + steps * LOAN_STEP;
}
