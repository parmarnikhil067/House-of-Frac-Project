export interface IAuthLoginReq {
  email?: string;
  phone?: string;
  password: string;
  userType?: string;
}

export interface IAuthLoginRes {
  accessToken: string;
  type: string;
}

export interface IAuthSignupReq {
  username: string;
  email: string;
  password: string;
  dialCode: string;
  mobile: string;
  country: string;
  emailVerificationCode: string;
  mobileVerificationCode: string;
}

export type IAuthSignupRes = IAuthLoginRes;

export interface IAuthSendCodeReq {
  mobile?: string;
  email?: string;
  country?: string;
  type: 'register';
}

export interface IAuthSendCodeRes {
  mobile?: string;
  email?: string;
  country?: string;
  type: 'register';
}

export interface IAuthForgotPasswordReq {
  email?: string;
  mobile?: string;
}

export interface IAuthForgotPasswordRes {
  email: {
    sentAt: string;
    timeout: number;
    attempt: number;
    maxAttempt: number;
  };
}

export interface IAuthResetPasswordReq {
  code?: string;
  mobile?: string;
  email?: string;
  newPassword?: string;
}

export interface IAuthResetPasswordRes {
  email: {
    sentAt: string;
    timeout: number;
    attempt: number;
    maxAttempt: number;
  };
}
