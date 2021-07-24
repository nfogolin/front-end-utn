import ICompany from "../entities/ICompany";
import IError from "../entities/IError";

interface ICompanyResponse {
    Company : ICompany[],
    Error: IError[]
}

export default ICompanyResponse;