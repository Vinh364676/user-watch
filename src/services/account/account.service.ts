
import { AxiosResponse } from "axios";
import { deleteAsync, getAsync, postAsync, putAsync } from "../http-client";

class AccountService {
    login = async (loginData: { email: string, password: string }): Promise<AxiosResponse> => {
        return await postAsync('/Account/Login', loginData);
      }
}

export default new AccountService();
