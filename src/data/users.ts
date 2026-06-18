export type EmergencyContact = {
  name: string;
  phone: string;
  relationship: string;
};

export type UserPersona = {
  id: string;
  displayName: string;
  gender: string;
  dateOfBirth: string;
  idNumber: string;
  oldIdNumber: string;
  phone: string;
  email: string;
  idIssueDate: string;
  idExpiryDate: string;
  idIssueLocation: string;
  permanentAddress: string;
  temporaryAddress: string;
  occupation: string;
  monthlyIncome: string;
  monthlySpending: string;
  loanPurpose: string;
  bankName: string;
  bankLogoKey: "sacombank" | "techcombank";
  accountHolderName: string;
  accountNumberMasked: string;
  emergencyContact1: EmergencyContact;
  emergencyContact2: EmergencyContact;
};

export const USER_PERSONAS: UserPersona[] = [
  {
    id: "user-1",
    displayName: "Phan Lê Ngọc Mai",
    gender: "Nữ",
    dateOfBirth: "11/11/1983",
    idNumber: "9525892385985",
    oldIdNumber: "90952952352",
    phone: "84353098549",
    email: "quangvu0308@gmail.com",
    idIssueDate: "11/11/2024",
    idExpiryDate: "11/11/2049",
    idIssueLocation: "Cục quản lý hành chính",
    permanentAddress: "Eco Green, Q7 Tân Thuận Tây, HCM",
    temporaryAddress: "Eco Green HCM Quận 7 Phường Tân Phong...",
    occupation: "Nhân viên văn phòng",
    monthlyIncome: "40 triệu",
    monthlySpending: "25 triệu",
    loanPurpose: "Tiêu dùng",
    bankName: "Sacombank",
    bankLogoKey: "sacombank",
    accountHolderName: "PHAN LE NGOC MAI",
    accountNumberMasked: "SCB****4920",
    emergencyContact1: { name: "Nguyen Huy", phone: "0368 061 866", relationship: "Cha" },
    emergencyContact2: { name: "Tran Loan", phone: "0368 061 866", relationship: "Mẹ" },
  },
  {
    id: "user-2",
    displayName: "Hồ Huỳnh Minh Tuấn",
    gender: "Nam",
    dateOfBirth: "11/11/1983",
    idNumber: "9525892385985",
    oldIdNumber: "90952952352",
    phone: "84353098549",
    email: "quangvu0308@gmail.com",
    idIssueDate: "11/11/2024",
    idExpiryDate: "11/11/2049",
    idIssueLocation: "Cục quản lý hành chính",
    permanentAddress: "Eco Green, Q7 Tân Thuận Tây, HCM",
    temporaryAddress: "Eco Green HCM Quận 7 Phường Tân Phong...",
    occupation: "Nhân viên văn phòng",
    monthlyIncome: "40 triệu",
    monthlySpending: "25 triệu",
    loanPurpose: "Tiêu dùng",
    bankName: "Techcombank",
    bankLogoKey: "techcombank",
    accountHolderName: "HO HUYNH MINH TUAN",
    accountNumberMasked: "TCB****7731",
    emergencyContact1: { name: "Nguyen Huy", phone: "0368 061 866", relationship: "Cha" },
    emergencyContact2: { name: "Tran Loan", phone: "0368 061 866", relationship: "Mẹ" },
  },
  {
    id: "user-3",
    displayName: "Phạm Anh Khoa",
    gender: "Nam",
    dateOfBirth: "11/11/1983",
    idNumber: "9525892385985",
    oldIdNumber: "90952952352",
    phone: "84353098549",
    email: "quangvu0308@gmail.com",
    idIssueDate: "11/11/2024",
    idExpiryDate: "11/11/2049",
    idIssueLocation: "Cục quản lý hành chính",
    permanentAddress: "Eco Green, Q7 Tân Thuận Tây, HCM",
    temporaryAddress: "Eco Green HCM Quận 7 Phường Tân Phong...",
    occupation: "Nhân viên văn phòng",
    monthlyIncome: "40 triệu",
    monthlySpending: "25 triệu",
    loanPurpose: "Tiêu dùng",
    bankName: "Techcombank",
    bankLogoKey: "techcombank",
    accountHolderName: "PHAM ANH KHOA",
    accountNumberMasked: "TCB****2205",
    emergencyContact1: { name: "Nguyen Huy", phone: "0368 061 866", relationship: "Cha" },
    emergencyContact2: { name: "Tran Loan", phone: "0368 061 866", relationship: "Mẹ" },
  },
  {
    id: "user-4",
    displayName: "Phan Nhất Hào",
    gender: "Nam",
    dateOfBirth: "11/11/1983",
    idNumber: "9525892385985",
    oldIdNumber: "90952952352",
    phone: "84353098549",
    email: "quangvu0308@gmail.com",
    idIssueDate: "11/11/2024",
    idExpiryDate: "11/11/2049",
    idIssueLocation: "Cục quản lý hành chính",
    permanentAddress: "Eco Green, Q7 Tân Thuận Tây, HCM",
    temporaryAddress: "Eco Green HCM Quận 7 Phường Tân Phong...",
    occupation: "Nhân viên văn phòng",
    monthlyIncome: "40 triệu",
    monthlySpending: "25 triệu",
    loanPurpose: "Tiêu dùng",
    bankName: "Sacombank",
    bankLogoKey: "sacombank",
    accountHolderName: "PHAN NHAT HAO",
    accountNumberMasked: "SCB****6614",
    emergencyContact1: { name: "Nguyen Huy", phone: "0368 061 866", relationship: "Cha" },
    emergencyContact2: { name: "Tran Loan", phone: "0368 061 866", relationship: "Mẹ" },
  },
];
