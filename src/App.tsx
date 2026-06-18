import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

// ── Screen transition ────────────────────────────────────────

const STEP_ORDER: LoanStep[] = [
  "userSelect", "offer", "review", "supplement", "faceVerify", "faceCapture", "approval", "otp", "result", "loanDashboard", "payment", "cashier", "paymentDone",
];

function stepDir(from: LoanStep, to: LoanStep): "forward" | "back" {
  return STEP_ORDER.indexOf(to) >= STEP_ORDER.indexOf(from) ? "forward" : "back";
}

const TRANSITION_MS = 360;

function ScreenContent({ step }: { step: LoanStep }) {
  return (
    <>
      {step === "userSelect" && <UserSelectStep />}
      {step === "offer" && <LoanOfferStep />}
      {step === "review" && <LoanReviewStep />}
      {step === "supplement" && <LoanSupplementStep />}
      {step === "faceVerify" && <FaceVerifyStep />}
      {step === "faceCapture" && <FaceCaptureStep />}
      {step === "approval" && <ApprovalStep />}
      {step === "otp" && <OtpStep />}
      {step === "result" && <ResultStep />}
      {step === "loanDashboard" && <LoanDashboardStep />}
      {step === "payment" && <PaymentStep />}
      {step === "cashier" && <CashierStep />}
      {step === "paymentDone" && <PaymentDoneStep />}
    </>
  );
}

function ScreenRouter({ step }: { step: LoanStep }) {
  const prevRef = useRef<LoanStep>(step);
  const [tx, setTx] = useState<{ from: LoanStep; dir: "forward" | "back" } | null>(null);

  useEffect(() => {
    if (step === prevRef.current) return;
    const dir = stepDir(prevRef.current, step);
    const from = prevRef.current;
    prevRef.current = step;
    setTx({ from, dir });
    const t = setTimeout(() => setTx(null), TRANSITION_MS);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div className="screen-router">
      {tx && (
        <div key={tx.from} className={`screen-slot screen-slot--exit-${tx.dir}`}>
          <ScreenContent step={tx.from} />
        </div>
      )}
      <div key={step} className={`screen-slot${tx ? ` screen-slot--enter-${tx.dir}` : ""}`}>
        <ScreenContent step={step} />
      </div>
    </div>
  );
}
import { useRive } from "@rive-app/react-canvas";
import { Agentation } from "agentation";
import dividerDots from "../material/Divider container_dot.svg";
import heroBackground from "../material/New Primary BG.png";
import calculatorArt from "../material/calc.svg";
import controllerArt from "../material/controller.svg";
import controllerDotIcon from "../material/controller icon dot.svg";
import controllerXIcon from "../material/controller icon X.svg";
import tNexLogo from "../material/Bank Full/VPBank.svg";
import tNexFullLogo from "../material/Bank Full/VPBank.svg";
import sacombankLogo from "../material/scb.png";
import techcombankLogo from "../material/techcombank.svg";
import tickIcon from "../material/tick.svg";
import loadingStateIcon from "../material/loading state.svg";
import faceGuide from "../material/face guide.svg";
import securityLogo from "../material/Security_logo.svg";
import cashierDoneBg from "../material/cashier svg.svg";
import checkBigIcon from "../material/Check big svg.svg";
import shieldIcon from "../icons/Second/general_security.svg";
import closecircleIcon from "../icons/Second/general_closecircle_solid.svg";
import checkSquareSolidIcon from "../icons/Second/general_check-square_solid.svg";
import checkBadge from "../material/check icon mask.svg";
import loadingProfileRiv from "../material/loading_profile.riv?url";
import rejectedSvg from "../material/rejected.svg";
import successSvg from "../material/success.svg";
import shbLogo from "../material/Bank Full/VPBank.svg";
import shbLogoFull from "../material/Bank Full/VPBank.svg";
import illustrationSvg from "../material/Illustration success.svg";
import loadingModalSvg from "../material/loading modal.svg";
import confettiRiv from "../material/fx-confetti.riv?url";
import cakeLogo from "../material/Cake logo.svg";
import backArrowIcon from "../icons/Second/general_arrow_back4.svg";
import infoIcon from "../icons/Second/general_info_line.svg";
import expandIcon from "../icons/Second/general_arrow_up4.svg";
import arrowDownIcon from "../icons/Second/general_arrow_down4.svg";
import contactIcon from "../icons/Second/general_contact.svg";
import editIcon from "../icons/Second/general_edit.svg";
import bankIcon from "../icons/Second/general_bank.svg";
import calendarIcon from "../icons/Second/general_calendar.svg";
import nhanThemTienImg from "../material/nhận thêm tiền.png";
import arrowNextIcon from "../icons/Second/general_arrow_next4.svg";
import dacTinh01Icon from "../material/Icon đặc tính 01.svg";
import dacTinh02Icon from "../material/Icon đặc tính 02.svg";
import dacTinh03Icon from "../material/Icon đặc tính 03.svg";
import moredotsIcon from "../icons/Second/general_moredots.svg";
import closeIcon from "../icons/Second/general_close.svg";
import copyIcon from "../icons/Second/general_copy.svg";
import historyNavIcon from "../icons/Second/general_navbar_history_line.svg";
import homeNavIcon from "../icons/Second/general_navbar_home_line.svg";
import cashierBg from "../material/Cashier BG.svg";
import clIcon from "../material/CL icon.svg";
import shieldSvg from "../material/shield.svg.svg";
import sofImage from "../material/SOF.svg";
import toggleSvg from "../material/toggle.svg";
import receiptIcon from "../icons/Second/general_bill.svg";
import coinIcon from "../icons/Second/service_coin.svg";
import voucherIcon from "../icons/Second/general_voucher.svg";
import { LoanFlowProvider, useLoanFlow, type LoanStep } from "./loan-flow";
import { USER_PERSONAS, type UserPersona } from "./data/users";

function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).catch(() => execCommandCopy(text));
  } else {
    execCommandCopy(text);
  }
}

function execCommandCopy(text: string) {
  const el = document.createElement("textarea");
  el.value = text;
  el.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0";
  document.body.appendChild(el);
  el.focus();
  el.select();
  try {
    document.execCommand("copy");
  } finally {
    document.body.removeChild(el);
  }
}
import {
  formatCurrency,
  LOAN_MAX,
  LOAN_MIN,
  LOAN_STEP,
  TERM_OPTIONS,
  type LoanTerm,
} from "./loan-quote";

function App() {
  return (
    <LoanFlowProvider>
      <LoanPrototype />
    </LoanFlowProvider>
  );
}

function LoanPrototype() {
  const { step, quote, term, showSchedule, closeSchedule } = useLoanFlow();
  const handleCopy = useCallback((markdown: string) => copyToClipboard(markdown), []);

  return (
    <main className="app-shell">
      <section className="phone-frame" aria-label="Cashloan loan information screen">
        <div className="screen-root loan-screen">
          {(step === "offer" || step === "review") ? (
            <img className="loan-screen__background" src={heroBackground} alt="" aria-hidden="true" />
          ) : null}
          {step === "userSelect" ? (
            <div className="loan-screen__background loan-screen__background--userselect" aria-hidden="true" />
          ) : null}

          <div className="loan-screen__content">
            <ScreenRouter step={step} />
          </div>

          {showSchedule && (
            <RepaymentScheduleSheet
              monthlyPayment={quote.monthlyPayment}
              term={term}
              firstPaymentDate={quote.firstPaymentDate}
              onClose={closeSchedule}
            />
          )}
        </div>
      </section>

      <div className="agentation-wrapper">
        <Agentation copyToClipboard={false} onCopy={handleCopy} />
      </div>
    </main>
  );
}

// ── User selector screen ─────────────────────────────────────

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(-2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function UserCard({ user, onSelect }: { user: UserPersona; onSelect: () => void }) {
  return (
    <button type="button" className="user-card" onClick={onSelect}>
      <div className="user-card__avatar">{getInitials(user.displayName)}</div>
      <div className="user-card__info">
        <span className="user-card__name">{user.displayName}</span>
        <span className="user-card__meta">
          {user.gender} · {user.occupation} · {user.monthlyIncome}/tháng
        </span>
      </div>
    </button>
  );
}

function UserSelectStep() {
  const { setSelectedUser, goToOffer } = useLoanFlow();

  const handleSelect = (user: UserPersona) => {
    setSelectedUser(user);
    goToOffer();
  };

  return (
    <div className="user-select-screen">
      <div className="user-select__header">
        <img src={tNexFullLogo} alt="VPBank" className="user-select__logo" />
        <h1 className="user-select__title">Chọn người dùng</h1>
        <p className="user-select__subtitle">Chọn đúng profile trước khi bắt đầu phỏng vấn</p>
      </div>
      <div className="user-select__list">
        {USER_PERSONAS.map((user) => (
          <UserCard key={user.id} user={user} onSelect={() => handleSelect(user)} />
        ))}
      </div>
    </div>
  );
}

function LoanOfferStep() {
  const { amount, term, quote, setAmount, setAmountDirect, setTerm, goToSupplement, goToApproval, isReturnUser, totalDisbursed } = useLoanFlow();
  const effectiveMin = isReturnUser ? WITHDRAW_MIN : LOAN_MIN;
  const effectiveMax = isReturnUser ? (CREDIT_LIMIT - totalDisbursed) : LOAN_MAX;
  const progress = ((amount - effectiveMin) / (effectiveMax - effectiveMin)) * 100;

  return (
    <>
      <ScreenNav title="Thông tin khoản vay" />

      <div className="loan-scroll-area">
        <div className="loan-main loan-main--enter">
          <section className="loan-card loan-selector-card" aria-label="Loan selector">
            <div className="loan-selector-card__header">
              <h2 className="loan-selector-card__title">Chọn khoản vay</h2>
              <img className="loan-selector-card__art" src={calculatorArt} alt="" aria-hidden="true" />
            </div>

            <div className="loan-selector-card__body">
              <div className="loan-amount-row">
                <span className="loan-amount-row__label">Bạn muốn vay</span>
                <strong className="loan-amount-row__value">{formatCurrency(amount)}</strong>
              </div>

              <div className="loan-slider">
                <div className="loan-slider__track">
                  <div className="loan-slider__progress" style={{ width: `${progress}%` }} />
                  <div className="loan-slider__thumb" style={{ left: `calc(${progress}% - 11px)` }} />
                  <input
                    className="loan-slider__input"
                    aria-label="Số tiền vay"
                    type="range"
                    min={effectiveMin}
                    max={effectiveMax}
                    step={LOAN_STEP}
                    value={amount}
                    onChange={(event) => (isReturnUser ? setAmountDirect : setAmount)(Number(event.target.value))}
                  />
                </div>
                <div className="loan-slider__labels">
                  <span>{formatCurrency(effectiveMin)}</span>
                  <span>{formatCurrency(effectiveMax)}</span>
                </div>
              </div>

              <div className="installment-chips" aria-label="Installment duration options">
                {TERM_OPTIONS.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={`installment-chip${option === term ? " installment-chip--active" : ""}`}
                    onClick={() => setTerm(option)}
                  >
                    {option} tháng
                  </button>
                ))}
              </div>

              <div className="loan-metrics">
                <div className="loan-metric">
                  <div className="loan-metric__label-row">
                    <span className="loan-metric__label">Trả hàng tháng</span>
                    <span
                      className="loan-metric__info-icon icon-mask icon-mask--blue"
                      style={{ "--icon-url": `url(${infoIcon})` } as CSSProperties}
                      aria-hidden="true"
                    />
                  </div>
                  <strong className="loan-metric__value">{formatCurrency(quote.monthlyPayment)}</strong>
                </div>

                <div className="loan-metrics__divider" aria-hidden="true" />

                <div className="loan-metric loan-metric--right">
                  <div className="loan-metric__label-row">
                    <span className="loan-metric__label">Ngày bắt đầu trả</span>
                    <span
                      className="loan-metric__info-icon icon-mask icon-mask--blue"
                      style={{ "--icon-url": `url(${infoIcon})` } as CSSProperties}
                      aria-hidden="true"
                    />
                  </div>
                  <strong className="loan-metric__value">{quote.firstPaymentDate}</strong>
                </div>
              </div>
            </div>
          </section>

          <LoanSummaryCard
            amount={quote.amount}
            totalRepayment={quote.totalRepayment}
            estimatedInterest={quote.estimatedInterest}
            processingFee={quote.processingFee}
            monthlyPayment={quote.monthlyPayment}
            term={term}
            firstPaymentDate={quote.firstPaymentDate}
          />

          <section className="product-features" aria-label="Đặc tính sản phẩm">
            <h3 className="product-features__title">Đặc tính sản phẩm</h3>
            <div className="product-features__item">
              <img src={dacTinh01Icon} alt="" aria-hidden="true" className="product-features__icon" />
              <span className="product-features__label">Nhận tiền về Zalopay</span>
            </div>
            <div className="product-features__item">
              <img src={dacTinh02Icon} alt="" aria-hidden="true" className="product-features__icon" />
              <span className="product-features__label">Tái cấp hạn mức trên số tiền thanh toán</span>
            </div>
            <div className="product-features__item">
              <img src={dacTinh03Icon} alt="" aria-hidden="true" className="product-features__icon" />
              <span className="product-features__label">Không cần cung cấp bảng lương</span>
            </div>
          </section>

        </div>

        <section className="provider-card provider-card--inline" aria-label="Provider details">
          <span className="provider-card__label">Cung cấp bởi</span>
          <img className="provider-card__logo" src={tNexLogo} alt="VPBank" />
          <span className="provider-card__link">Chi tiết</span>
        </section>

        <div className="loan-footer loan-footer--inline">
          <p className="loan-terms">
            Bằng cách nhấn "Đăng ký vay", tôi đồng ý và chấp nhận chia sẻ theo{" "}
            <span className="loan-terms__link">Điều khoản &amp; Điều kiện đăng ký sản phẩm</span>
          </p>
        </div>

      </div>

      <div className="loan-cta-bar">
        <button type="button" className="loan-footer__button" onClick={isReturnUser ? goToApproval : goToSupplement}>
          Đăng ký ngay
        </button>
      </div>
    </>
  );
}

function LoanReviewStep() {
  const { quote, goToOffer } = useLoanFlow();

  return (
    <>
      <ScreenNav title="Xác nhận khoản vay" onBack={goToOffer} />

      <div className="loan-scroll-area">
        <div className="loan-main">
          <section className="loan-card review-card" aria-label="Loan review summary">
            <div className="review-card__top">
              <span className="review-card__eyebrow">Khoản vay đã chọn</span>
              <strong className="review-card__amount">{formatCurrency(quote.amount)}</strong>
            </div>

            <div className="review-card__grid">
              <div className="review-card__item">
                <span className="review-card__label">Kỳ hạn</span>
                <strong className="review-card__value">{quote.term} tháng</strong>
              </div>
              <div className="review-card__item">
                <span className="review-card__label">Trả hàng tháng</span>
                <strong className="review-card__value">
                  {formatCurrency(quote.monthlyPayment)} / tháng
                </strong>
              </div>
              <div className="review-card__item">
                <span className="review-card__label">Ngày bắt đầu trả</span>
                <strong className="review-card__value">{quote.firstPaymentDate}</strong>
              </div>
              <div className="review-card__item">
                <span className="review-card__label">Phí thanh toán</span>
                <strong className="review-card__value">{formatCurrency(quote.processingFee)}</strong>
              </div>
              <div className="review-card__item">
                <span className="review-card__label">Tổng dự kiến phải trả</span>
                <strong className="review-card__value">{formatCurrency(quote.totalRepayment)}</strong>
              </div>
            </div>
          </section>

          <LoanSummaryCard
            amount={quote.amount}
            totalRepayment={quote.totalRepayment}
            estimatedInterest={quote.estimatedInterest}
            processingFee={quote.processingFee}
            monthlyPayment={quote.monthlyPayment}
            term={quote.term}
            firstPaymentDate={quote.firstPaymentDate}
          />

          <section className="loan-card review-note">
            <h2 className="review-note__title">Mô phỏng nội bộ</h2>
            <p className="review-note__copy">
              Dữ liệu khoản vay đang được giữ trong local state để tiếp tục sang bước sau của
              prototype mà không cần backend.
            </p>
          </section>
        </div>
      </div>

      <LoanFooter buttonLabel="Quay lại chỉnh sửa" onClick={goToOffer} />
    </>
  );
}

function RepaymentScheduleSheet({
  monthlyPayment,
  term,
  firstPaymentDate,
  onClose,
}: {
  monthlyPayment: number;
  term: number;
  firstPaymentDate: string;
  onClose: () => void;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(t);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 340);
  };

  const rows = Array.from({ length: term }, (_, i) => {
    const [d, m, y] = firstPaymentDate.split("/").map(Number);
    const date = new Date(y, m - 1 + i, d);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return { period: i + 1, dueDate: `${dd}/${mm}/${yyyy}` };
  });

  return (
    <div className={`schedule-overlay${visible ? " schedule-overlay--visible" : ""}`} onClick={handleClose}>
      <div className={`schedule-sheet${visible ? " schedule-sheet--visible" : ""}`} onClick={(e) => e.stopPropagation()}>
        <h2 className="schedule-sheet__title">Lịch trả nợ dự kiến</h2>
        <div className="schedule-sheet__scrollable">
          <div className="schedule-table">
            <div className="schedule-table__header">
              <span>Kỳ hạn</span>
              <span>Tổng phải trả</span>
              <span>Hạn thanh toán</span>
            </div>
            <div className="schedule-table__body">
              {rows.map((row) => (
                <div key={row.period} className="schedule-table__row">
                  <span>{row.period}</span>
                  <span>{formatCurrency(monthlyPayment)}</span>
                  <span>{row.dueDate}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="schedule-sheet__footer">
          <button type="button" className="schedule-sheet__close-btn" onClick={handleClose}>
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}

function LoanSummaryCard({
  amount,
  totalRepayment,
  estimatedInterest,
  processingFee,
  monthlyRate = 0.027,
  monthlyPayment,
  term,
  firstPaymentDate,
}: {
  amount: number;
  totalRepayment: number;
  estimatedInterest: number;
  processingFee: number;
  monthlyRate?: number;
  monthlyPayment: number;
  term: number;
  firstPaymentDate: string;
}) {
  const { openSchedule } = useLoanFlow();
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const toggle = () => {
    setHasInteracted(true);
    setIsExpanded((current) => !current);
  };

  const rowsClass = [
    "summary-card__rows",
    isExpanded ? "summary-card__rows--expanded" : "",
    hasInteracted ? "summary-card__rows--animated" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className="loan-card summary-card" aria-label="Payment summary">
      <button
        type="button"
        className="summary-card__header"
        onClick={toggle}
        aria-expanded={isExpanded}
      >
        <span className="summary-card__title">Tổng dự kiến phải trả</span>
        <div className="summary-card__header-right">
          <strong className="summary-card__total">{formatCurrency(totalRepayment)}</strong>
          <span
            className={`summary-card__expand-icon icon-mask icon-mask--blue${isExpanded ? " summary-card__expand-icon--expanded" : ""}`}
            style={{ "--icon-url": `url(${expandIcon})`, width: "24px", height: "24px" } as CSSProperties}
            aria-hidden="true"
          />
        </div>
      </button>

      <div className={rowsClass}>
        <div className="summary-card__divider-line" aria-hidden="true" />
        <div className="summary-row">
          <span className="summary-row__label">Số tiền vay</span>
          <span className="summary-row__value">{formatCurrency(amount)}</span>
        </div>
        <div className="summary-row">
          <span className="summary-row__label">Lãi tạm tính ({(monthlyRate * 100).toLocaleString("vi-VN")}%/tháng)</span>
          <span className="summary-row__value">{formatCurrency(estimatedInterest)}</span>
        </div>

        <button type="button" className="summary-card__schedule-btn" onClick={openSchedule}>
          <img src={calendarIcon} alt="" aria-hidden="true" className="summary-card__schedule-icon" />
          Xem lịch trả nợ dự kiến
        </button>
      </div>
    </section>
  );
}

function ScreenNav({
  title,
  onBack,
  onClose,
  right,
}: {
  title: string;
  onBack?: () => void;
  onClose?: () => void;
  right?: ReactNode;
}) {
  const { goToOffer } = useLoanFlow();
  const handleClose = onClose ?? goToOffer;

  return (
    <header className="loan-nav">
      <div className="loan-nav__title-group">
        <button
          type="button"
          className="loan-nav__back-button"
          onClick={() => onBack ? onBack() : window.history.length > 1 ? window.history.back() : undefined}
          aria-label="Quay lại"
        >
          <img className="loan-nav__back-icon" src={backArrowIcon} alt="" aria-hidden="true" />
        </button>
        <h1 className="loan-nav__title">{title}</h1>
      </div>
      {right !== undefined ? (
        right
      ) : (
        <div className="mini-controls">
          <button className="mini-controls__btn" aria-label="Thêm">
            <img src={controllerDotIcon} alt="" aria-hidden="true" style={{ width: 24, height: 24 }} />
          </button>
          <div className="mini-controls__divider" />
          <button className="mini-controls__btn" aria-label="Đóng" onClick={handleClose}>
            <img src={controllerXIcon} alt="" aria-hidden="true" style={{ width: 24, height: 24 }} />
          </button>
        </div>
      )}
    </header>
  );
}

function LoanFooter({
  buttonLabel,
  onClick,
  children,
  buttonClassName,
}: {
  buttonLabel: string;
  onClick: () => void;
  children?: ReactNode;
  buttonClassName?: string;
}) {
  return (
    <footer className="loan-footer">
      {children}
      <button
        type="button"
        className={`loan-footer__button${buttonClassName ? ` ${buttonClassName}` : ""}`}
        onClick={onClick}
      >
        {buttonLabel}
      </button>
    </footer>
  );
}

// ── Supplement screen ────────────────────────────────────────

function InfoCard({
  title,
  titleSuffix,
  summary,
  children,
  activeHeader = false,
}: {
  title: string;
  titleSuffix?: string;
  summary?: string;
  children: ReactNode;
  activeHeader?: boolean;
}) {
  return (
    <div className="info-card">
      <div className={`info-card__trigger${activeHeader ? " info-card__trigger--active" : ""}`}>
        <div className="info-card__header-row">
          <p className="info-card__title">
            {title}
            {titleSuffix && <span> {titleSuffix}</span>}
          </p>
        </div>
        {summary && <p className="info-card__summary">{summary}</p>}
      </div>
      <div className="info-card__body">{children}</div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  bold = false,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="info-row">
      <span className="info-row__label">{label}</span>
      <span className={`info-row__value${bold ? " info-row__value--bold" : ""}`}>{value}</span>
    </div>
  );
}

function FormField({
  label,
  value,
  icon,
  half = false,
}: {
  label: string;
  value: string;
  icon?: string;
  half?: boolean;
}) {
  return (
    <div className={`form-field${half ? " form-field--half" : ""}`}>
      <div className="form-field__content">
        <span className="form-field__label">{label}</span>
        <span className="form-field__value">{value}</span>
      </div>
      {icon && (
        <span
          className="form-field__icon icon-mask"
          style={{ "--icon-url": `url(${icon})` } as CSSProperties}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

function StepBar({ activeStep = 2 }: { activeStep?: 2 | 3 | 4 | 5 }) {
  const done = (n: number) => n < activeStep;
  const active = (n: number) => n === activeStep;

  const nodeClass = (n: number) =>
    done(n) ? "" : active(n) && activeStep === 3 ? "step-bar__node step-bar__node--loading" : "step-bar__node step-bar__node--active";

  const lineClass = (from: number) =>
    from < activeStep ? "step-bar__line step-bar__line--done" : "step-bar__line step-bar__line--future";

  const labelClass = (n: number) =>
    done(n) ? "step-bar__label step-bar__label--done"
    : active(n) ? "step-bar__label step-bar__label--active"
    : "step-bar__label step-bar__label--future";

  return (
    <div className="step-bar">
      {/* Step 1 */}
      <div className="step-bar__item">
        <div className="step-bar__connector">
          <div className="step-bar__line step-bar__line--hidden" />
          <img className="step-bar__node-icon" src={tickIcon} alt="" />
          <div className={lineClass(1)} />
        </div>
        <div className={labelClass(1)}>Chọn<br />khoản vay</div>
      </div>

      {/* Step 2 */}
      <div className="step-bar__item">
        <div className="step-bar__connector">
          <div className={lineClass(1)} />
          {done(2)
            ? <img className="step-bar__node-icon" src={tickIcon} alt="" />
            : <div className={nodeClass(2)}>2</div>}
          <div className={lineClass(2)} />
        </div>
        <div className={labelClass(2)}>Gửi hồ sơ</div>
      </div>

      {/* Step 3 */}
      <div className="step-bar__item">
        <div className="step-bar__connector">
          <div className={lineClass(2)} />
          {done(3)
            ? <img className="step-bar__node-icon" src={tickIcon} alt="" />
            : active(3)
            ? <img className="step-bar__node-icon" src={loadingStateIcon} alt="" />
            : <div className="step-bar__node step-bar__node--future">3</div>}
          <div className={lineClass(3)} />
        </div>
        <div className={labelClass(3)}>Nhận kết quả</div>
      </div>

      {/* Step 4 */}
      <div className="step-bar__item">
        <div className="step-bar__connector">
          <div className={lineClass(3)} />
          <div className={active(4) ? "step-bar__node step-bar__node--active" : "step-bar__node step-bar__node--future"}>4</div>
          <div className="step-bar__line step-bar__line--hidden" />
        </div>
        <div className={labelClass(4)}>Ký hợp đồng &amp; Nhận tiền</div>
      </div>
    </div>
  );
}

const checkboxCheckedIcon = "https://www.figma.com/api/mcp/asset/9b39d81e-e1e5-4b9e-97fe-60ba94c5415a";

function SuppInfoRow({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="supp-row">
      <span className="supp-row__label">{label}</span>
      <span className={`supp-row__value${bold ? " supp-row__value--bold" : ""}`}>{value}</span>
    </div>
  );
}

function SuppFormField({ label, value, icon }: { label: string; value: string; icon?: string }) {
  return (
    <div className="supp-field">
      <div className="supp-field__content">
        <span className="supp-field__label">{label}</span>
        <span className="supp-field__value">{value}</span>
      </div>
      {icon && (
        <span
          className="icon-mask icon-mask--blue supp-field__icon"
          style={{ "--icon-url": `url(${icon})` } as CSSProperties}
        />
      )}
    </div>
  );
}

function SuppCard({
  title,
  summary,
  collapsible = true,
  children,
}: {
  title: string;
  summary?: string[];
  collapsible?: boolean;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  if (!collapsible) {
    return (
      <div className="supp-card">
        <div className="supp-card__header">
          <div className="supp-card__header-row">
            <span className="supp-card__title">{title}</span>
          </div>
        </div>
        <div className="supp-card__body supp-card__body--always-open">{children}</div>
      </div>
    );
  }

  return (
    <div className="supp-card">
      <button
        type="button"
        className="supp-card__header supp-card__header--button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <div className="supp-card__header-row">
          <span className="supp-card__title">{title}</span>
          <span
            className={`icon-mask supp-card__chevron${open ? " supp-card__chevron--open" : ""}`}
            style={{ "--icon-url": `url(${arrowDownIcon})` } as CSSProperties}
            aria-hidden="true"
          />
        </div>
        {!open && summary && summary.length > 0 && (
          <div className="supp-card__summary">
            {summary.map((line, i) => (
              <span key={i} className="supp-card__summary-line">{line}</span>
            ))}
          </div>
        )}
      </button>
      <div className={`supp-card__body${open ? " supp-card__body--open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

const BANK_LOGOS: Record<"sacombank" | "techcombank", string> = {
  sacombank: sacombankLogo,
  techcombank: techcombankLogo,
};

function LoanSupplementStep() {
  const { goToOffer, goToFaceVerify, quote, amount, term, selectedUser } = useLoanFlow();

  const u = selectedUser;

  return (
    <>
      <div className="supp-head">
        <ScreenNav title="Bổ sung thông tin" onBack={goToOffer} />
        <StepBar />
      </div>
      <div className="supp-scroll">

        <SuppCard
          title="Thông tin khoản vay"
          summary={[
            `${formatCurrency(amount)} - ${term} tháng`,
          ]}
        >
          <SuppInfoRow label="Số tiền vay" value={formatCurrency(amount)} bold />
          <SuppInfoRow label="Kỳ hạn" value={`${term} tháng`} />
          <SuppInfoRow label="Phải trả hàng tháng" value={formatCurrency(quote.monthlyPayment)} />
          <SuppInfoRow label="Ngày đến hạn đầu tiên" value={quote.firstPaymentDate} />
          <button className="reselect-link" onClick={goToOffer}>
            <span
              className="icon-mask icon-mask--blue reselect-link__icon"
              style={{ "--icon-url": `url(${editIcon})` } as CSSProperties}
            />
            <span className="reselect-link__text">Chọn lại khoản vay</span>
          </button>
        </SuppCard>

        <SuppCard title="Thông tin cá nhân" summary={u ? [`${u.displayName} - ${u.phone}`] : []}>
          <SuppInfoRow label="Giới tính" value={u?.gender ?? ""} />
          <SuppInfoRow label="Ngày sinh" value={u?.dateOfBirth ?? ""} />
          <SuppInfoRow label="Số CCCD" value={u?.idNumber ?? ""} />
          <SuppInfoRow label="Số điện thoại" value={u?.phone ?? ""} />
          <SuppInfoRow label="Ngày cấp" value={u?.idIssueDate ?? ""} />
          <SuppInfoRow label="Ngày hết hạn" value={u?.idExpiryDate ?? ""} />
          <SuppInfoRow label="Nơi cấp" value={u?.idIssueLocation ?? ""} />
          <SuppInfoRow label="Địa chỉ thường trú" value={u?.permanentAddress ?? ""} />
          <SuppInfoRow label="CMND cũ" value={u?.oldIdNumber ?? ""} />
        </SuppCard>

        <SuppCard
          title="Thông tin bổ sung"
          summary={u ? [`${u.occupation} - Thu nhập ${u.monthlyIncome} - Chi ${u.monthlySpending}`] : []}
        >
          <div className="supp-fields">
            <SuppFormField label="Mục đích" value={u?.loanPurpose ?? ""} icon={arrowDownIcon} />
            <SuppFormField label="Nghề nghiệp" value={u?.occupation ?? ""} icon={arrowDownIcon} />
            <div className="supp-field-row">
              <SuppFormField label="Thu nhập" value={u?.monthlyIncome ?? ""} />
              <SuppFormField label="Tổng chi tiêu" value={u?.monthlySpending ?? ""} />
            </div>
            <SuppFormField label="Email" value={u?.email ?? ""} />
            <div>
              <SuppFormField label="Địa chỉ tạm trú" value={u?.temporaryAddress ?? ""} />
              <div className="toggle-row" style={{ marginTop: 8 }}>
                <span className="toggle-row__label">Địa chỉ tạm trú trùng với thường trú</span>
                <span className="toggle-switch" />
              </div>
            </div>
          </div>
        </SuppCard>

        <SuppCard
          title="Người liên hệ khẩn cấp 1"
          summary={u ? [`${u.emergencyContact1.name} - ${u.emergencyContact1.phone} - ${u.emergencyContact1.relationship}`] : []}
        >
          <div className="supp-fields">
            <SuppFormField label="Họ và tên" value={u?.emergencyContact1.name ?? ""} />
            <SuppFormField label="Số điện thoại" value={u?.emergencyContact1.phone ?? ""} icon={contactIcon} />
            <SuppFormField label="Mối quan hệ" value={u?.emergencyContact1.relationship ?? ""} icon={arrowDownIcon} />
          </div>
        </SuppCard>

        <SuppCard
          title="Người liên hệ khẩn cấp 2"
          summary={u ? [`${u.emergencyContact2.name} - ${u.emergencyContact2.phone} - ${u.emergencyContact2.relationship}`] : []}
        >
          <div className="supp-fields">
            <SuppFormField label="Họ và tên" value={u?.emergencyContact2.name ?? ""} />
            <SuppFormField label="Số điện thoại" value={u?.emergencyContact2.phone ?? ""} icon={contactIcon} />
            <SuppFormField label="Mối quan hệ" value={u?.emergencyContact2.relationship ?? ""} icon={arrowDownIcon} />
          </div>
        </SuppCard>


        <div className="consent-card">
          <div className="consent-card__check-row">
            <span
              className="icon-mask icon-mask--blue consent-card__check-icon"
              style={{ "--icon-url": `url(${checkSquareSolidIcon})` } as CSSProperties}
            />
            <span className="consent-card__intro">Tôi đã đọc và đồng ý với:</span>
          </div>
          <div className="consent-card__terms">
            <ul>
              <li>
                <span className="consent-card__link">Chính sách sản phẩm </span>và{" "}
                <span className="consent-card__link">bảo vệ dữ liệu cá nhân</span> của đối tác VPBank
              </li>
              <li>
                Đảm bảo các cá nhân có trong thông tin tham chiếu đã đọc, đồng ý với{" "}
                <span className="consent-card__link">Chính sách bảo vệ quyền riêng tư của Zalopay </span>
                và cho phép Zalopay thu thập, sử dụng và chia sẻ thông tin cho VPBank để thực hiện sản phẩm, dịch vụ yêu cầu.
              </li>
            </ul>
          </div>
        </div>

      </div>

      <LoanFooter buttonLabel="Tiếp tục" onClick={goToFaceVerify} />
    </>
  );
}

// ── Face verification screen ─────────────────────────────────

function FaceVerifyStep() {
  const { goToSupplement, goToFaceCapture } = useLoanFlow();

  return (
    <>
      <ScreenNav title="Xác thực khuôn mặt" onBack={goToSupplement} />

      <div className="face-verify">
        <div className="face-verify__intro">
          <h2 className="face-verify__title">Quét gương mặt</h2>
          <p className="face-verify__subtitle">Đảm bảo camera rõ nét trước khi chụp bạn nhé</p>
        </div>
        <img className="face-verify__guide" src={faceGuide} alt="" />
      </div>

      <LoanFooter buttonLabel="Bắt đầu ngay" onClick={goToFaceCapture}>
        <div className="face-verify__security">
          <p className="face-verify__security-text">
            Bảo vệ toàn diện tài khoản và tuân thủ quy định Ngân hàng Nhà nước Việt Nam
          </p>
          <img className="face-verify__security-logo" src={securityLogo} alt="PCI DSS" />
        </div>
      </LoanFooter>
    </>
  );
}

// ── Face capture (camera) screen ─────────────────────────────

type FaceCapturePhase = "scanning" | "ringDrawing" | "done";

const RING_DRAW_MS = 1800;

function FaceCaptureStep() {
  const { goToFaceVerify, goToApproval } = useLoanFlow();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [phase, setPhase] = useState<FaceCapturePhase>("scanning");

  useEffect(() => {
    let stream: MediaStream | null = null;
    let cancelled = false;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "user" },
          audio: false,
        });
        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch {
        // Camera unavailable or permission denied — leave the dark overlay in place.
      }
    }

    startCamera();

    return () => {
      cancelled = true;
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  // Simulated success sequence: ring draws at 3.5s, check pops once the ring completes.
  useEffect(() => {
    const startRing = setTimeout(() => setPhase("ringDrawing"), 3500);
    const finish = setTimeout(() => setPhase("done"), 3500 + RING_DRAW_MS);
    return () => {
      clearTimeout(startRing);
      clearTimeout(finish);
    };
  }, []);

  // Navigate to approval 1s after success animation completes.
  useEffect(() => {
    if (phase !== "done") return;
    const t = setTimeout(goToApproval, 1000);
    return () => clearTimeout(t);
  }, [phase]);

  const ringActive = phase !== "scanning";

  return (
    <div className="face-capture">
      <video ref={videoRef} className="face-capture__video" autoPlay playsInline muted />

      <div className="face-capture__mask" />

      <svg
        className="face-capture__ring"
        viewBox="0 0 300 360"
        fill="none"
        aria-hidden="true"
      >
        <path
          className={`face-capture__ring-path${ringActive ? " face-capture__ring-path--draw" : ""}`}
          d="M150,1 A149,179 0 0 1 150,359 A149,179 0 0 1 150,1"
          pathLength={100}
        />
      </svg>

      <div className="face-capture__nav">
        <button
          type="button"
          className="face-capture__back"
          onClick={goToFaceVerify}
          aria-label="Quay lại"
        >
          <span
            className="icon-mask face-capture__back-icon"
            style={{ "--icon-url": `url(${backArrowIcon})` } as CSSProperties}
          />
        </button>
      </div>

      <div className="face-capture__badge">
        {phase === "done" ? (
          <img className="face-capture__check" src={checkBadge} alt="" />
        ) : (
          <span
            className="icon-mask face-capture__shield"
            style={{ "--icon-url": `url(${shieldIcon})` } as CSSProperties}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}

// ── Approval (Phê duyệt hồ sơ) screen ───────────────────────

function ApprovalStep() {
  const { goToOffer, goToOtp, amount, quote, addDisbursement } = useLoanFlow();
  const { RiveComponent } = useRive({ src: loadingProfileRiv, autoplay: true });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setSuccess(true), 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div className="supp-head">
        <ScreenNav title="Phê duyệt hồ sơ" onBack={goToOffer} />
        <StepBar activeStep={success ? 4 : 3} />
      </div>

      <div className="approval-body">
        <div className="approval-card">
          <div key={success ? "success" : "loading"} className="approval-card__content">
            {success ? (
              <>
                <img src={successSvg} alt="" className="approval-rive" />
                <div className="approval-text">
                  <h2 className="approval-title">
                    Số tiền giải ngân lần đầu là <span className="approval-title--green">{formatCurrency(amount)}</span>
                  </h2>
                  <p className="approval-subtitle">Ký hợp đồng để nhận giải ngân về Ví Zalopay</p>
                </div>
                <div className="approval-summary-wrap">
                  <LoanSummaryCard
                    amount={amount}
                    totalRepayment={quote.totalRepayment}
                    estimatedInterest={quote.estimatedInterest}
                    processingFee={quote.processingFee}
                    monthlyRate={quote.monthlyRate}
                    monthlyPayment={quote.monthlyPayment}
                    term={quote.term}
                    firstPaymentDate={quote.firstPaymentDate}
                  />
                  <button className="partner-banner__btn" onClick={() => {
                    addDisbursement({
                      id: `loan-${Date.now()}`,
                      amount,
                      term: quote.term,
                      monthlyPayment: quote.monthlyPayment,
                      firstPaymentDate: quote.firstPaymentDate,
                      paidAmount: 0,
                      nextDueDate: quote.firstPaymentDate,
                    });
                    goToOtp();
                  }}>Ký hợp đồng</button>
                </div>
              </>
            ) : (
              <>
                <div className="approval-rive">
                  <RiveComponent />
                </div>
                <div className="approval-text">
                  <h2 className="approval-title">Hồ sơ đang được xử lí</h2>
                  <p className="approval-subtitle">
                    Vui lòng chờ kết quả phê duyệt trong vài phút để ký hợp đồng và nhận giải ngân khoản vay
                  </p>
                </div>
                <button className="approval-btn approval-btn--disabled" disabled>
                  Ký hợp đồng
                </button>
                <button className="approval-btn approval-btn--link">
                  Chi tiết hồ sơ
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="approval-footer">
        <span className="approval-footer__label">Cung cấp bởi</span>
        <img
          src={tNexFullLogo}
          alt="VPBank"
          className="approval-footer__logo approval-footer__logo--tnex"
        />
      </div>
    </>
  );
}

// ── OTP screen ───────────────────────────────────────────────

function OtpStep() {
  const { goToApproval, goToResult } = useLoanFlow();
  const [otp, setOtp] = useState("");
  const [seconds, setSeconds] = useState(29);
  const [canResend, setCanResend] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const [verifying, setVerifying] = useState(false);

  useEffect(() => {
    if (otp.length !== 6) return;
    setVerifying(true);
    const t = setTimeout(goToResult, 1000);
    return () => clearTimeout(t);
  }, [otp]);

  useEffect(() => {
    if (seconds <= 0) { setCanResend(true); return; }
    const t = setInterval(() => setSeconds(s => s - 1), 1000);
    return () => clearInterval(t);
  }, [seconds]);

  const formatted = `00:${String(seconds).padStart(2, "0")}s`;

  return (
    <>
      {verifying && (
        <div className="otp-modal-overlay">
          <img src={loadingModalSvg} alt="Đang xác thực" className="otp-modal" />
        </div>
      )}

      <div className="supp-head">
        <ScreenNav title="Phê duyệt hồ sơ" onBack={goToApproval} />
        <StepBar activeStep={4} />
      </div>

      <div className="otp-body" onClick={() => inputRef.current?.focus()}>
        <p className="otp-desc">
          Xác thực OTP để ký hợp đồng và nhận giải ngân. Mã xác thực vừa được VPBank gửi đến số điện thoại của bạn
        </p>

        <div className="otp-field" onClick={e => e.stopPropagation()}>
          <input
            ref={inputRef}
            className="otp-field__input"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={6}
            value={otp}
            onChange={e => setOtp(e.target.value.replace(/\D/g, ""))}
            autoComplete="one-time-code"
          />
          {otp.length > 0 && (
            <button className="otp-field__clear" type="button" onClick={() => setOtp("")}>
              <span
                className="icon-mask otp-field__clear-icon"
                style={{ "--icon-url": `url(${closecircleIcon})` } as CSSProperties}
              />
            </button>
          )}
        </div>

        <div className="otp-resend">
          {canResend ? (
            <button className="otp-resend__link" onClick={() => { setSeconds(29); setCanResend(false); }}>
              Gửi lại mã xác thực
            </button>
          ) : (
            <span className="otp-resend__label">
              Gửi lại mã sau <span className="otp-resend__timer">{formatted}</span>
            </span>
          )}
        </div>
      </div>
    </>
  );
}

// ── Result (Kết quả giải ngân) screen ────────────────────────

const CREDIT_LIMIT = 40_000_000;

function ResultStep() {
  const { goToOffer, goToLoanDashboard, amount, totalDisbursed, setAmountDirect, setTerm, markReturnUser } = useLoanFlow();
  const { RiveComponent: Confetti } = useRive({ src: confettiRiv, autoplay: true });
  const remainAmount = CREDIT_LIMIT - totalDisbursed;
  const hasRemain = remainAmount >= 1_500_000;
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (!hasRemain) return;
    const t = setTimeout(() => setShowBanner(true), 1000);
    return () => clearTimeout(t);
  }, [hasRemain]);

  return (
    <div className="result-screen">
      <div className="result-confetti" aria-hidden="true"><Confetti /></div>

      <div className="supp-head">
        <ScreenNav title="Kết quả giải ngân" onBack={goToOffer} onClose={goToOffer} />
      </div>

      <div className="result-illustration">
        <img src={illustrationSvg} alt="" className="result-illustration__img" />
      </div>

      <div className="result-text">
        <h2 className="result-text__title">Bạn đã được giải ngân</h2>
        <p className="result-text__sub">Số tiền được cấp cho bạn là</p>
      </div>

      <div className="result-amount">
        <span className="result-amount__value">+{formatCurrency(amount)}</span>
      </div>

      <div className="result-bottom">
        <div className="result-footer">
          <span className="result-footer__label">Cung cấp bởi</span>
          <img src={shbLogoFull} alt="VPBank" className="result-footer__logo" />
        </div>
      </div>

      {hasRemain && (
        <div className={`result-encourage-banner${showBanner ? " result-encourage-banner--visible" : ""}`}>
          <img src={nhanThemTienImg} alt="" aria-hidden="true" className="result-encourage-banner__img" />
          <div className="result-encourage-banner__content">
            <p className="result-encourage-banner__text">
              Bạn đã được duyệt sẵn thêm <span className="result-encourage-banner__amount">{formatCurrency(remainAmount)}</span>
            </p>
            <p className="result-encourage-banner__sub">Vay thêm nhanh mà không cần xét duyệt lại.</p>
            <button type="button" className="result-encourage-banner__cta" onClick={() => {
              const defaultAmount = Math.round((remainAmount / 2) / LOAN_STEP) * LOAN_STEP;
              setAmountDirect(defaultAmount);
              setTerm(6);
              markReturnUser();
              goToOffer();
            }}>
              Nhận thêm tiền
              <span
                className="icon-mask icon-mask--blue result-encourage-banner__cta-icon"
                style={{ "--icon-url": `url(${arrowNextIcon})` } as CSSProperties}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      )}

      <div className="result-buttons">
        <button className="result-btn result-btn--primary" onClick={goToLoanDashboard}>Quản lý khoản vay</button>
      </div>
    </div>
  );
}

// ── Loan Dashboard screen ────────────────────────────────────

const WITHDRAW_MIN = 1_000_000;

function LoanDashboardStep() {
  const { quote, selectedUser, goToOffer, totalDisbursed, loanHistory, setAmountDirect, setTerm, markReturnUser, goToPayment } = useLoanFlow();
  const remainAmount = CREDIT_LIMIT - totalDisbursed;
  const hasRemain = remainAmount >= 1_500_000;
  const [withdrawAmount, setWithdrawAmount] = useState(
    Math.round((remainAmount / 2) / LOAN_STEP) * LOAN_STEP
  );
  const [withdrawTerm, setWithdrawTerm] = useState<LoanTerm>(6);
  const withdrawProgress = hasRemain
    ? ((withdrawAmount - WITHDRAW_MIN) / (remainAmount - WITHDRAW_MIN)) * 100
    : 0;
  const username = selectedUser ? selectedUser.displayName.split(" ").slice(-1)[0] : "bạn";

  return (
    <div className="dashboard-screen">
      <div className="supp-head">
        <ScreenNav
          title="Quản lý gói vay"
          onBack={hasRemain ? goToOffer : () => {}}
          onClose={hasRemain ? goToOffer : undefined}
          right={hasRemain ? undefined : null}
        />
      </div>

      {/* Tabs */}
      <div className="dashboard-tabs">
        {(["Gói hiện tại", "Đã tất toán", "Đã hủy"] as const).map((label, i) => (
          <div key={label} className={`dashboard-tab${i === 0 ? " dashboard-tab--active" : " dashboard-tab--inactive"}`}>
            <span className="dashboard-tab__label">{label}</span>
            <div className="dashboard-tab__indicator" />
          </div>
        ))}
      </div>

      {/* Scrollable content */}
      <div className="loan-scroll-area">
        <div className="dashboard-content">

          {/* Section 1: Rút thêm — chỉ hiện khi còn hạn mức */}
          {hasRemain && <section className="dashboard-section">
            <h2 className="dashboard-section__title">Phê duyệt tốt hơn cho {username}</h2>
            <div className="dashboard-withdraw-wrapper">
              <div className="dashboard-withdraw-card">
                <div className="dashboard-withdraw-card__inner">
                  <div className="dashboard-withdraw-card__amount-row">
                    <span>Bạn muốn vay</span>
                    <strong>{formatCurrency(withdrawAmount)}</strong>
                  </div>

                  {/* Slider */}
                  <div className="dashboard-withdraw-card__slider">
                    <div className="loan-slider__track">
                      <div className="loan-slider__progress" style={{ width: `${withdrawProgress}%` }} />
                      <div className="loan-slider__thumb" style={{ left: `calc(${withdrawProgress}% - 11px)` }} />
                      <input
                        className="loan-slider__input"
                        aria-label="Số tiền muốn rút thêm"
                        type="range"
                        min={WITHDRAW_MIN}
                        max={remainAmount}
                        step={LOAN_STEP}
                        value={withdrawAmount}
                        onChange={(e) => setWithdrawAmount(Number(e.target.value))}
                      />
                    </div>
                    <div className="dashboard-withdraw-card__slider-labels">
                      <span>{formatCurrency(WITHDRAW_MIN)}</span>
                      <span>{formatCurrency(remainAmount)}</span>
                    </div>
                  </div>

                  {/* Term chips */}
                  <div className="dashboard-withdraw-card__terms">
                    {TERM_OPTIONS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        className={`dashboard-term-chip${withdrawTerm === t ? " dashboard-term-chip--active" : ""}`}
                        onClick={() => setWithdrawTerm(t as LoanTerm)}
                      >
                        {t} tháng
                      </button>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    type="button"
                    className="dashboard-withdraw-card__cta"
                    onClick={() => {
                      setAmountDirect(withdrawAmount);
                      setTerm(withdrawTerm);
                      markReturnUser();
                      goToOffer();
                    }}
                  >
                    01 bước nhận giải ngân
                  </button>
                </div>
              </div>
              <div className="dashboard-badge">Tăng thêm hạn mức</div>
            </div>
          </section>}

          {/* Section 2: Khoản vay hiện tại */}
          {loanHistory.length > 0 && (
            <section className="dashboard-section">
              <h2 className="dashboard-section__title">Khoản vay hiện tại</h2>
              {[...loanHistory].reverse().map((loan) => (
                <div key={loan.id} className="dashboard-loan-card">
                  <div className="dashboard-loan-card__header">
                    <img src={shbLogoFull} alt="VPBank" className="dashboard-loan-card__logo" />
                    <div className="dashboard-loan-card__meta">
                      <div className="dashboard-loan-card__contract-row">
                        <span className="dashboard-loan-card__contract">Mã HĐ: VP BANK{loan.id.slice(-6).toUpperCase()}</span>
                        <img src={copyIcon} alt="" aria-hidden="true" className="dashboard-loan-card__copy-icon" style={{ filter: "invert(16%) sepia(96%) saturate(3000%) hue-rotate(218deg) brightness(95%) contrast(105%)" }} />
                      </div>
                      <p className="dashboard-loan-card__amount-label">
                        Khoản vay <strong>{formatCurrency(loan.amount)}</strong>
                      </p>
                    </div>
                    <span className="dashboard-loan-card__detail">Chi tiết</span>
                  </div>

                  <div className="dashboard-divider-dots" />

                  <div className="dashboard-loan-card__rows">
                    <div className="dashboard-loan-card__row">
                      <span className="dashboard-loan-card__row-label">Hạn thanh toán</span>
                      <span className="dashboard-loan-card__row-value">{loan.nextDueDate}</span>
                    </div>
                    <div className="dashboard-loan-card__row">
                      <span className="dashboard-loan-card__row-label">Dư nợ trong kỳ</span>
                      <span className="dashboard-loan-card__row-value">{formatCurrency(loan.monthlyPayment)}</span>
                    </div>
                  </div>

                  <div className="dashboard-loan-card__actions">
                    <button type="button" className="dashboard-loan-card__pay-btn" onClick={() => goToPayment(loan.id)}>Thanh toán ngay</button>
                    <button type="button" className="dashboard-loan-card__settle-link">Bạn muốn tất toán?</button>
                  </div>
                </div>
              ))}
            </section>
          )}

        </div>
      </div>

      {/* Bottom tab bar */}
      <div className="dashboard-tabbar">
        <div className="dashboard-tabbar__content">
          <div className="dashboard-tabbar__item">
            <div className="dashboard-tabbar__indicator--active" />
            <div className="dashboard-tabbar__icon-wrap">
              <img src={homeNavIcon} alt="" aria-hidden="true" className="dashboard-tabbar__icon" />
            </div>
            <span className="dashboard-tabbar__label dashboard-tabbar__label--active">Hồ sơ vay</span>
          </div>
          <div className="dashboard-tabbar__item">
            <div className="dashboard-tabbar__indicator--inactive" />
            <div className="dashboard-tabbar__icon-wrap">
              <img src={historyNavIcon} alt="" aria-hidden="true" className="dashboard-tabbar__icon" />
            </div>
            <span className="dashboard-tabbar__label dashboard-tabbar__label--inactive">Lịch sử</span>
          </div>
        </div>
        <div className="dashboard-home-indicator">
          <div className="dashboard-home-indicator__bar" />
        </div>
      </div>
    </div>
  );
}

function PaymentStep() {
  const { loanHistory, paymentLoanId, selectedUser, goToLoanDashboard, goToCashier } = useLoanFlow();
  const loan = loanHistory.find((l) => l.id === paymentLoanId) ?? loanHistory[loanHistory.length - 1];
  const fullAmount = loan ? loan.monthlyPayment : 0;
  const minAmount = Math.round(fullAmount * 0.20);
  const [selected, setSelected] = useState<"full" | "min" | "custom">("full");
  const [customInput, setCustomInput] = useState("");
  const contractId = loan ? `VP BANK${loan.id.slice(-6).toUpperCase()}` : "";

  const totalPayment =
    selected === "full" ? fullAmount :
    selected === "min" ? minAmount :
    (parseInt(customInput.replace(/\D/g, ""), 10) || 0);

  return (
    <div className="payment-screen">
      <div className="supp-head">
        <ScreenNav title="Thanh toán khoản vay" onBack={goToLoanDashboard} onClose={goToLoanDashboard} />
      </div>
      <div className="loan-scroll-area">
        <div className="payment-content">
          {/* Card 1: Thông tin thanh toán */}
          <div className="payment-card">
            <h2 className="payment-card__title">Thông tin thanh toán</h2>
            <div className="payment-options">
              <label className="payment-option">
                <input type="radio" name="payment" checked={selected === "full"} onChange={() => setSelected("full")} />
                <span className="payment-option__radio" />
                <span className="payment-option__label">Thanh toán dư nợ cuối kỳ</span>
                <span className="payment-option__amount">{formatCurrency(fullAmount)}</span>
              </label>
              <label className="payment-option">
                <input type="radio" name="payment" checked={selected === "min"} onChange={() => setSelected("min")} />
                <span className="payment-option__radio" />
                <span className="payment-option__label">Thanh toán mức tối thiểu</span>
                <span className="payment-option__amount">{formatCurrency(minAmount)}</span>
              </label>
              <div className="payment-option payment-option--input">
                <input type="radio" name="payment" checked={selected === "custom"} onChange={() => setSelected("custom")} />
                <span className="payment-option__radio" onClick={() => setSelected("custom")} />
                <input
                  className="payment-option__input"
                  placeholder="Nhập số khác"
                  value={customInput}
                  onFocus={() => setSelected("custom")}
                  onChange={(e) => setCustomInput(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Thông tin khách hàng */}
          <div className="payment-card">
            <h2 className="payment-card__title">Thông tin khách hàng</h2>
            <div className="payment-info-rows">
              <div className="payment-info-row">
                <span className="payment-info-row__label">Số hợp đồng</span>
                <span className="payment-info-row__value">{contractId}</span>
              </div>
              <div className="payment-info-row__divider" />
              <div className="payment-info-row">
                <span className="payment-info-row__label">Tên khách hàng</span>
                <span className="payment-info-row__value">{selectedUser?.displayName}</span>
              </div>
              <div className="payment-info-row__divider" />
              <div className="payment-info-row">
                <span className="payment-info-row__label">Số CMND/CCCD</span>
                <span className="payment-info-row__value">{selectedUser?.oldIdNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed bottom bar */}
      <div className="payment-bottom-bar">
        <div className="payment-bottom-bar__total">
          <span>Tổng tiền thanh toán</span>
          <strong>{formatCurrency(totalPayment)}</strong>
        </div>
        <button type="button" className="payment-bottom-bar__btn" onClick={() => goToCashier(totalPayment)}>
          Tiếp tục
        </button>
      </div>
    </div>
  );
}

function CashierStep() {
  const { paymentAmount, paymentLoanId, loanHistory, selectedUser, goToLoanDashboard, goToPaymentDone, recordPayment } = useLoanFlow();
  const loan = loanHistory.find((l) => l.id === paymentLoanId) ?? loanHistory[loanHistory.length - 1];
  const [showDetail, setShowDetail] = useState(false);
  const [detailClosing, setDetailClosing] = useState(false);
  const closeDetail = () => {
    setDetailClosing(true);
    setTimeout(() => { setShowDetail(false); setDetailClosing(false); }, 340);
  };

  const dateParts = loan?.firstPaymentDate?.split("/") ?? [];
  const monthYear = dateParts.length === 3 ? `${parseInt(dateParts[1], 10)}/${dateParts[2]}` : "";

  const displayAmount = paymentAmount ?? 0;
  const amountFormatted = new Intl.NumberFormat("vi-VN").format(displayAmount);
  const contractId = loan ? `VP BANK${loan.id.slice(-6).toUpperCase()}` : "";

  return (
    <div className="cashier-screen">
      <div className="cashier-bg-header">
        <img src={cashierBg} alt="" className="cashier-bg-header__img" />
      </div>

      <div className="cashier-nav">
        <div className="cashier-nav__title-row">
          <div className="cashier-nav__service">
            <img src={clIcon} alt="" className="cashier-service-icon" />
            <div className="cashier-service-info">
              <span className="cashier-service-name">Thanh toán khoản vay {monthYear}</span>
              <span className="cashier-service-sub">Vay tiền nhanh</span>
            </div>
          </div>
          <div className="mini-controls">
            <button className="mini-controls__btn" aria-label="Thêm">
              <img src={controllerDotIcon} alt="" aria-hidden="true" style={{ width: 24, height: 24 }} />
            </button>
            <div className="mini-controls__divider" />
            <button className="mini-controls__btn" aria-label="Đóng" onClick={goToLoanDashboard}>
              <img src={controllerXIcon} alt="" aria-hidden="true" style={{ width: 24, height: 24 }} />
            </button>
          </div>
        </div>
      </div>

      <div className="cashier-content">
        <div className="cashier-amount-section">
          <div className="cashier-amount">
            <span className="cashier-amount__number">{amountFormatted}</span>
            <span className="cashier-amount__unit">đ</span>
          </div>
          <button type="button" className="cashier-detail-pill" onClick={() => setShowDetail(true)}>
            <img src={receiptIcon} alt="" className="cashier-detail-pill__icon cashier-detail-pill__icon--blue" />
            Chi tiết giao dịch
          </button>
        </div>

        <div className="cashier-options-card">
          <div className="cashier-options-row">
            <div className="cashier-options-row__left">
              <img src={coinIcon} alt="" className="cashier-options-row__icon" />
              <span>Dùng 10.000 xu</span>
            </div>
            <img src={toggleSvg} alt="" aria-hidden="true" className="cashier-toggle" />
          </div>
          <div className="cashier-options-divider" />
          <div className="cashier-options-row">
            <div className="cashier-options-row__left">
              <img src={voucherIcon} alt="" className="cashier-options-row__icon" />
              <span>Thêm hoặc nhập mã ưu đãi</span>
            </div>
            <img src={arrowNextIcon} alt="" aria-hidden="true" style={{ width: 24, height: 24 }} />
          </div>
        </div>

        <div className="cashier-account-section">
          <div className="cashier-account-section__header">
            <span className="cashier-account-section__title">Tài khoản/ Thẻ</span>
            <span className="cashier-account-section__link">Xem tất cả</span>
          </div>
          <img src={sofImage} alt="Tài khoản" className="cashier-sof-image" />
        </div>
      </div>

      <div className="cashier-cta">
        <button type="button" className="cashier-cta__btn" onClick={() => {
          if (paymentLoanId && paymentAmount) recordPayment(paymentLoanId, paymentAmount);
          goToPaymentDone();
        }}>
          <img src={shieldSvg} alt="" aria-hidden="true" className="cashier-cta__shield" />
          Xác nhận
        </button>
        <div className="cashier-security-row">
          <span className="cashier-security-row__text">Bảo mật và An toàn là ưu tiên hàng đầu</span>
          <img src={securityLogo} alt="" aria-hidden="true" className="cashier-security-row__badge" />
          <img src={securityLogo} alt="" aria-hidden="true" className="cashier-security-row__badge" />
        </div>
      </div>

      {/* Chi tiết giao dịch bottomsheet */}
      {showDetail && (
        <>
          <div className={`cashier-scrim${detailClosing ? " cashier-scrim--closing" : ""}`} onClick={closeDetail} />
          <div className={`cashier-detail-sheet${detailClosing ? " cashier-detail-sheet--closing" : ""}`}>
            <div className="cashier-detail-sheet__header">
              <span className="cashier-detail-sheet__title">Chi tiết giao dịch</span>
            </div>
            <div className="cashier-detail-sheet__info-card">
              <div className="cashier-detail-row">
                <span>Mã hợp đồng</span>
                <span>{contractId}</span>
              </div>
              <div className="cashier-detail-row">
                <span>Tên khách hàng</span>
                <span>{selectedUser?.displayName}</span>
              </div>
              <div className="cashier-detail-row">
                <span>Nhà cung cấp</span>
                <span>VP Bank</span>
              </div>
              <div className="cashier-detail-row">
                <span>Số CCCD</span>
                <span>{selectedUser?.oldIdNumber}</span>
              </div>
              <div className="cashier-detail-row">
                <span>Phí giao dịch</span>
                <span>Miễn phí</span>
              </div>
            </div>
            <div className="cashier-detail-sheet__summary">
              <div className="cashier-detail-row">
                <span>Tổng tiền</span>
                <span>{formatCurrency(displayAmount)}</span>
              </div>
              <div className="cashier-detail-row">
                <span>Tổng phí</span>
                <span>0đ</span>
              </div>
              <div className="cashier-detail-row cashier-detail-row--bold">
                <span>Số tiền cần thanh toán</span>
                <span>{formatCurrency(displayAmount)}</span>
              </div>
              <button type="button" className="cashier-detail-sheet__back-btn" onClick={closeDetail}>
                Quay lại
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function PaymentDoneStep() {
  const { paymentAmount, paymentLoanId, loanHistory, selectedUser, goToLoanDashboard } = useLoanFlow();
  const loan = loanHistory.find((l) => l.id === paymentLoanId) ?? loanHistory[loanHistory.length - 1];
  const [showDetail, setShowDetail] = useState(false);
  const [detailClosing, setDetailClosing] = useState(false);
  const closeDetail = () => {
    setDetailClosing(true);
    setTimeout(() => { setShowDetail(false); setDetailClosing(false); }, 340);
  };

  const displayAmount = paymentAmount ?? 0;
  const amountFormatted = new Intl.NumberFormat("vi-VN").format(displayAmount);
  const contractId = loan ? `VP BANK${loan.id.slice(-6).toUpperCase()}` : "";

  const dateParts = loan?.firstPaymentDate?.split("/") ?? [];
  const monthYear = dateParts.length === 3 ? `${parseInt(dateParts[1], 10)}/${dateParts[2]}` : "";

  return (
    <div className="payment-done-screen">
      {/* Background header */}
      <div className="payment-done-bg">
        <img src={cashierDoneBg} alt="" className="payment-done-bg__img" />
      </div>

      {/* Nav — only X button */}
      <div className="payment-done-nav">
        <button type="button" className="mini-controls__btn" aria-label="Đóng" onClick={goToLoanDashboard}>
          <img src={controllerXIcon} alt="" aria-hidden="true" style={{ width: 24, height: 24 }} />
        </button>
      </div>

      {/* Content */}
      <div className="payment-done-content">
        {/* Check icon */}
        <img src={checkBigIcon} alt="" className="payment-done__check" />

        {/* Title + meta */}
        <div className="payment-done__info">
          <div className="payment-done__title-block">
            <span className="payment-done__title">Thanh toán thành công</span>
            <div className="payment-done__txid-row">
              <span className="payment-done__txid-label">Mã giao dịch: </span>
              <span className="payment-done__txid-value">#250820000017761</span>
            </div>
            <span className="payment-done__meta">Thời gian giao dịch: 09:02 18/06/2026</span>
            <span className="payment-done__meta">Thanh toán khoản vay {monthYear}</span>
          </div>

          {/* Amount */}
          <div className="payment-done__amount">
            <span className="payment-done__amount-number">{amountFormatted}</span>
            <span className="payment-done__amount-unit">đ</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="payment-done__actions">
          <button type="button" className="payment-done__btn" onClick={goToLoanDashboard}>
            Đóng
          </button>
          <button type="button" className="payment-done__btn" onClick={() => setShowDetail(true)}>
            Chi tiết giao dịch
          </button>
        </div>

        {/* Security badges */}
        <div className="payment-done__security">
          <span className="cashier-security-row__text">Bảo mật và An toàn là ưu tiên hàng đầu chúng tôi!</span>
          <div style={{ display: "flex", gap: 2 }}>
            <img src={securityLogo} alt="" className="cashier-security-row__badge" />
            <img src={securityLogo} alt="" className="cashier-security-row__badge" />
          </div>
        </div>
      </div>

      {/* Chi tiết giao dịch bottomsheet (reuse same sheet) */}
      {showDetail && (
        <>
          <div className={`cashier-scrim${detailClosing ? " cashier-scrim--closing" : ""}`} onClick={closeDetail} />
          <div className={`cashier-detail-sheet${detailClosing ? " cashier-detail-sheet--closing" : ""}`}>
            <div className="cashier-detail-sheet__header">
              <span className="cashier-detail-sheet__title">Chi tiết giao dịch</span>
            </div>
            <div className="cashier-detail-sheet__info-card">
              <div className="cashier-detail-row"><span>Mã hợp đồng</span><span>{contractId}</span></div>
              <div className="cashier-detail-row"><span>Tên khách hàng</span><span>{selectedUser?.displayName}</span></div>
              <div className="cashier-detail-row"><span>Nhà cung cấp</span><span>VP Bank</span></div>
              <div className="cashier-detail-row"><span>Số CCCD</span><span>{selectedUser?.oldIdNumber}</span></div>
              <div className="cashier-detail-row"><span>Phí giao dịch</span><span>Miễn phí</span></div>
            </div>
            <div className="cashier-detail-sheet__summary">
              <div className="cashier-detail-row"><span>Tổng tiền</span><span>{formatCurrency(displayAmount)}</span></div>
              <div className="cashier-detail-row"><span>Tổng phí</span><span>0đ</span></div>
              <div className="cashier-detail-row cashier-detail-row--bold"><span>Số tiền cần thanh toán</span><span>{formatCurrency(displayAmount)}</span></div>
              <button type="button" className="cashier-detail-sheet__back-btn" onClick={closeDetail}>Quay lại</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
