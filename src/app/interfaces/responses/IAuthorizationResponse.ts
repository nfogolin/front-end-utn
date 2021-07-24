import IError from "../entities/IError";
import IUser from "../entities/IUser";

interface IAuthorizationResponse {
    Data: IUser,
    Error: IError[]
}

export default IAuthorizationResponse;