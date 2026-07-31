import type { IApiRequestOptions, IApiResponse } from '@/interface';
import axiosClient from '@/lib/axios';
import { AxiosError } from 'axios';

function handleSuccess<T>(data: T): IApiResponse<T> {
  return {
    success: true as const,
    data,
  };
}

function handleError<T>(error: unknown): IApiResponse<T> {
  let message = 'Something went wrong';

  if (error instanceof AxiosError) {
    message =
      (error.response?.data as { message?: string })?.message ||
      error.message ||
      message;
  } else if (error instanceof Error) {
    message = error.message;
  }

  return {
    success: false as const,
    error: message,
  };
}

export async function axiosRequest<
  T, // Response Type
  TData = unknown, // payload type
  TParams = Record<string, unknown>, // params type
>({
  method = 'GET',
  endpoint,
  data,
  params,
  headers = {},
}: IApiRequestOptions<TData, TParams>): Promise<IApiResponse<T>> {
  try {
    const response = await axiosClient({
      method,
      url: endpoint,
      data,
      params,
      headers,
    });

    return handleSuccess<T>(response.data);
  } catch (error: unknown) {
    return handleError<T>(error);
  }
}
