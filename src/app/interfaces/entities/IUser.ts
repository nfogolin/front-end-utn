interface IUser {
    nIdUser: number,
    sUserNameReal: string,
    sUserLastName?: string,
    nUserType: number //Usuario - Vendedor
    Token?: string
}

export default IUser;