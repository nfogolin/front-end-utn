import { Component, OnInit } from '@angular/core';
import IItemPriceList from 'src/app/interfaces/entities/IItemPriceList';
import { MessageService } from 'src/app/services/message.service';
import { PriceListsService } from 'src/app/services/priceLists.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IItemPriceList[];
  isWait:boolean = true;

  constructor(private priceListsService: PriceListsService
    , private messageService: MessageService
    , private sanitizer: DomSanitizer) { 
      
    }

  ngOnInit(): void {
    this.priceListsService.getPriceLists().subscribe(rsp =>{
      if(!rsp.Error){
        this.products = rsp.PriceLists[0].DetailPriceList;
        this.isWait = false;
      }else{
        this.messageService.openSnackBar(rsp.Error);
      }
    }, (e)=>{
      if (e.error && e.error.errors){
        this.messageService.openSnackBar(e.error.errors);
      }else{
        this.messageService.openSnackBarMessage('Ocurrió un error durante la operación. Intente nuevamente.');
      }
    })
  }

}
