# Revolving Loan Prototype — Mô tả sản phẩm & Logic

## Tổng quan

Đây là prototype UI mobile cho luồng đăng ký **vay tín dụng tuần hoàn (revolving loan)** dành cho user testing interview. Người dùng đăng ký một hạn mức tín dụng, được hệ thống cấp hạn mức (cao hơn mức đăng ký), rút tiền theo nhu cầu, rồi quản lý khoản vay qua dashboard.

Prototype chạy hoàn toàn client-side — không có backend, toàn bộ state là local.

---

## Luồng màn hình

```
userSelect → offer → supplement → faceVerify → faceCapture → approval → otp → result → loanDashboard
```

| # | Step | Tên màn hình | Mô tả |
|---|------|-------------|-------|
| 0 | `userSelect` | Chọn người dùng | Interviewer chọn 1 trong 4 persona trước khi demo |
| 1 | `offer` | Đăng ký hạn mức | User chọn số tiền muốn rút + kỳ hạn trả |
| 2 | `supplement` | Bổ sung thông tin | Xác nhận hồ sơ cá nhân, thu nhập, người liên hệ, ngân hàng |
| 3 | `faceVerify` | Xác thực khuôn mặt | Hướng dẫn trước khi quét mặt |
| 4 | `faceCapture` | Quét khuôn mặt | Camera live + animation ring, tự chuyển sau ~5 giây |
| 5 | `approval` | Phê duyệt hồ sơ | Giả lập duyệt: loading → từ chối → đề xuất đối tác → duyệt |
| 6 | `otp` | Xác thực OTP | Nhập 6 số, tự verify khi đủ |
| 7 | `result` | Kết quả giải ngân | Thông báo giải ngân thành công + số tiền |
| 8 | `loanDashboard` | Quản lý hạn mức | Widget rút thêm + card khoản vay đang hoạt động |

---

## Logic nghiệp vụ

### Hạn mức tín dụng

| Khái niệm | Giá trị | Ghi chú |
|-----------|---------|---------|
| Hạn mức được cấp | **40.000.000đ** (cố định) | Hệ thống luôn cấp 40tr, bất kể user đăng ký bao nhiêu |
| Số tiền rút lần đầu | **Do user chọn** trên slider | Từ 10tr đến 30tr, bước 500K |
| Hạn mức khả dụng | 40tr − số tiền đã rút | Hiển thị trên Dashboard để rút thêm |

### Màn Offer — Chọn số tiền & kỳ hạn

- Slider: 10.000.000đ – 30.000.000đ, bước 500.000đ
- Kỳ hạn: **3 / 6 / 9 / 12 tháng**
- Kết quả hiển thị ngay: dự kiến trả hàng tháng + ngày bắt đầu trả

### Công thức tính toán

Dùng **amortising payment** chuẩn:

```
Trả hàng tháng = P × r / (1 − (1 + r)^−n)
```

| Ký hiệu | Ý nghĩa |
|---------|---------|
| `P` | Số tiền rút |
| `r` | Lãi suất tháng (theo kỳ hạn) |
| `n` | Số tháng |

**Lãi suất theo kỳ hạn:**

| Kỳ hạn | Lãi suất/tháng |
|--------|---------------|
| 3 tháng | 1,8% |
| 6 tháng | 2,0% |
| 9 tháng | 2,3% |
| 12 tháng | 2,7% |

**Phí xử lý:** 200.000đ (cố định, cộng vào tổng phải trả)

**Tổng phải trả** = (Trả hàng tháng × n) + 200.000đ

---

## Kịch bản Approval (giả lập)

Màn hình `approval` mô phỏng luồng duyệt hồ sơ thực tế:

```
1. Loading 5 giây (Rive animation)
   ↓
2. TNEX từ chối — hiển thị thông báo
   ↓ (1 giây sau)
3. Banner xuất hiện: "Thử với 2 đối tác khác?"
   — SHB Finance
   — Cake by VPBank
   ↓ (user nhấn "Gửi lại")
4. Loading lại 5 giây
   ↓
5. Duyệt thành công — hiển thị:
   • Hạn mức được cấp: 40.000.000đ (cố định)
   • Giải ngân: [số tiền user đã chọn trên slider]
   ↓
6. Nút "Ký hợp đồng" → màn OTP
```

---

## Màn Dashboard (loanDashboard)

Sau khi giải ngân xong, user được chuyển vào màn quản lý hạn mức gồm 2 phần:

### Phần 1 — Widget rút thêm
- Slider giống màn Offer, nhưng giới hạn tối đa = hạn mức khả dụng còn lại
- Label: "Rút thêm" / "Số tiền muốn rút"
- Hiển thị dự kiến trả hàng tháng nếu rút thêm

### Phần 2 — Khoản vay đang hoạt động
- Card hiển thị: dư nợ hiện tại, kỳ hạn, ngày trả tiếp theo, số trả hàng tháng
- Chi tiết expand/collapse

---

## User Personas (dành cho interview)

Interviewer chọn persona phù hợp với người được phỏng vấn ở màn đầu tiên. Toàn bộ dữ liệu cá nhân trong màn Supplement tự động thay theo persona đã chọn.

| # | Tên | Giới tính | Nghề nghiệp | Thu nhập | Ngân hàng |
|---|-----|-----------|-------------|----------|-----------|
| 1 | Huỳnh Quang Vũ | Nam | Nhân viên văn phòng | 20 triệu | Sacombank |
| 2 | Nguyễn Thị Mai | Nữ | Giáo viên | 12 triệu | Techcombank |
| 3 | Trần Văn Đức | Nam | Kỹ sư phần mềm | 25 triệu | Techcombank |
| 4 | Lê Thị Hồng | Nữ | Kinh doanh tự do | 30 triệu | Sacombank |

Để thay data thật, chỉnh file `src/data/users.ts`.

---

## Trạng thái chưa implement

- Màn `loanDashboard` chưa được build (sẽ implement ở phase tiếp theo)
- Các label trên màn `offer` chưa đổi sang "hạn mức" (còn là "khoản vay")
- Màn `approval` chưa hiển thị hạn mức 40tr khi duyệt thành công

---

## Tech stack

| Công cụ | Vai trò |
|---------|---------|
| React 18 + TypeScript 5 | UI |
| Vite 5 | Dev server & build |
| Plain CSS (BEM-like) | Styling — không dùng Tailwind, không CSS Modules |
| Rive | Animation (face capture, loading, confetti) |

## Commands

```bash
npm run dev      # Chạy dev server → http://localhost:5173
npm run build    # TypeScript check + Vite build
npm test         # Chạy Vitest
```
