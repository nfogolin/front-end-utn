
interface IError {
    msg: string,
    param?:string,
    location:string,
    activityId?:string,
}

export default IError;