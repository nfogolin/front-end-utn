
import IError from '../entities/IError'
import IPriceList from '../entities/IPriceList'


interface IPriceListsResponse {
    PriceLists: IPriceList[]
    Error: IError[]
}

export default IPriceListsResponse