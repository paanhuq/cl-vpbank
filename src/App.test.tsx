import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

vi.mock("agentation", () => ({
  Agentation: () => null,
}));

describe("Cashloan loan flow", () => {
  it("recalculates the quote and carries the selected loan to the next screen", async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(screen.getByRole("heading", { name: "Thông tin khoản vay" })).toBeInTheDocument();
    expect(screen.getByText("Chọn khoản vay")).toBeInTheDocument();
    expect(screen.getAllByText("15.000.000đ")).toHaveLength(2);
    expect(screen.getByText("2.677.887đ")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Đăng ký ngay" })).toBeInTheDocument();
    expect(screen.queryByText("Nhập mã khách hàng")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "12 tháng" }));
    fireEvent.change(screen.getByLabelText("Số tiền vay"), { target: { value: "20000000" } });

    expect(screen.getAllByText("20.000.000đ")).toHaveLength(2);
    expect(screen.getByText("1.973.429đ")).toBeInTheDocument();
    expect(screen.getByText("23.881.148đ")).toBeInTheDocument();
    expect(screen.getByText("3.681.148đ")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Đăng ký ngay" }));

    expect(screen.getByRole("heading", { name: "Xác nhận khoản vay" })).toBeInTheDocument();

    const review = screen.getByLabelText("Loan review summary");
    expect(within(review).getByText("20.000.000đ")).toBeInTheDocument();
    expect(within(review).getByText("12 tháng")).toBeInTheDocument();
    expect(within(review).getByText("1.973.429đ / tháng")).toBeInTheDocument();
    expect(within(review).getByText("23.881.148đ")).toBeInTheDocument();
  });
});
