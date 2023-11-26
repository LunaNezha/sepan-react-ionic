export interface IPrescriptions {
  id?: number;
  patientId?: number;
  type: number;
  nationalCode: string;
  phoneNumber: string;
  firstname: string;
  lastname: string;
  insuranceType: number;
  supplementType: number;
  doctorName: string;
  description: string;
  prescriptionFirstImage?: string;
  prescriptionFrontImage?: string;
  prescriptionBackImage?: string;
  prescriptionCode: string;
  prescriptionDate: string;
  prescriptionDateTimeSpan?: number;
  prescriptionState?: number;
  lastTransactionUser?: string;
  lastTransactionClosed: boolean;
  prescriptionRequestDate: string;
}

export interface IAddPrescription {
  id?: number;
  type: number;
  insuranceType: number;
  supplementType: number;
  doctorName: string;
  description: string;
  prescriptionFirstImage?: string;
  prescriptionFrontImage?: string;
  prescriptionBackImage?: string;
  prescriptionCode: string;
  prescriptionDate?: number;
}

export interface IPrescriptionDetails {
  patientId: number;
  patientNationalCode: string;
  patientFirstname: string;
  patientLastname: string;
  requestDateTime: string;
  genderType: number;
  phoneNumber: string;
  birthDate: string;
  userState: number;
  serialDocument: number;
  prescriptionRequest: IPrescriptionRequest;
  prescriptionTransactions: IPrescriptionTransaction[];
}

export interface IPrescriptionRequest {
  id: number;
  deliverOn: string;
  description: string;
  doctorName: string;
  insuranceType: number;
  organShare: number;
  payAblePrice: number;
  prescriptionBackImage: string;
  prescriptionCode: string;
  prescriptionDate: string;
  PrescriptionDateTimeSpan: number;
  prescriptionFirstImage: string;
  prescriptionFrontImage: string;
  prescriptionState?: number;
  supplementShare: number;
  supplementType: number;
  type: number;
}

export interface IPrescriptionTransaction {
  transactionId: number;
  startTransactionPersianDateTime: string;
  startTransactionTimeSpan: number;
  lastActivityTransactionPersianDateTime: string;
  lastActivityTransactionTimeSpan: number;
  status: number;
  isClosed: boolean;
  description: string;
  assignedUserId: number;
  assignedUsername: string;
}
