import IError from '../entities/IError';
import ICustomer from '../entities/ICustomer';

interface IRegisterUserResponse {
    UserId?: number,
    Customer?: ICustomer,
    Error?: IError[]
}

export default IRegisterUserResponse;