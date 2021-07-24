import IError from '../entities/IError';
import IUser from '../entities/IUser';

interface IValidateTokenResponse {
    User: IUser,
    Error?: IError[]
}

export default IValidateTokenResponse;