import IItemPriceList from '../entities/IItemPriceList'

interface IPriceList {
    Id : number,
    Code : number,
    Descript : string,
    DetailPriceList : IItemPriceList[]
}

export default IPriceList