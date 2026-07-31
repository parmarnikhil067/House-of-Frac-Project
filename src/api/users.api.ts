import type { IApiResponse, IUser } from '@/interface';
import { axiosRequest } from '@/services';

export async function fetchUsersApi(): Promise<IApiResponse<IUser[]>> {
  return await axiosRequest<
    IUser[],
    undefined,
    { page: number; limit: number }
  >({
    endpoint: '/users',
  });
}
