import ICompany from "../entities/ICompany";

interface ICompanyResponse {
    Company : ICompany[],
    Error: string
}

export default ICompanyResponse;