import type {
  IApiResponse,
  IAuthForgotPasswordReq,
  IAuthForgotPasswordRes,
  IAuthLoginReq,
  IAuthLoginRes,
  IAuthResetPasswordReq,
  IAuthResetPasswordRes,
  IAuthSendCodeReq,
  IAuthSendCodeRes,
  IAuthSignupReq,
  IAuthSignupRes,
} from '@/interface';
import { axiosRequest } from '@/services';

export const authLoginApi = async (
  data: IAuthLoginReq
): Promise<IApiResponse<IAuthLoginRes>> => {
  return axiosRequest<IAuthLoginRes>({
    method: 'POST',
    endpoint: '/auth/login',
    data,
  });
};

export const authSignupApi = async (
  data: IAuthSignupReq
): Promise<IApiResponse<IAuthSignupRes>> => {
  return axiosRequest<IAuthSignupRes>({
    method: 'POST',
    endpoint: '/auth/register',
    data,
  });
};

export const authSendCodeApi = async (
  data: IAuthSendCodeReq
): Promise<IApiResponse<IAuthSendCodeRes>> => {
  return axiosRequest<IAuthSendCodeRes>({
    method: 'POST',
    endpoint: '/auth/send-code',
    data,
  });
};

export const authForgotPasswordApi = async (
  data: IAuthForgotPasswordReq
): Promise<IApiResponse<IAuthForgotPasswordRes>> => {
  return axiosRequest<IAuthForgotPasswordRes>({
    method: 'POST',
    endpoint: '/auth/forgot-password',
    data,
  });
};

export const authResetPasswordApi = async (
  data: IAuthResetPasswordReq
): Promise<IApiResponse<IAuthResetPasswordRes>> => {
  return axiosRequest<IAuthResetPasswordRes>({
    method: 'POST',
    endpoint: '/auth/reset-password',
    data,
  });
};
