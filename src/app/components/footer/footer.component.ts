import { Component, OnInit } from '@angular/core';
import ICompanyResponse from 'src/app/interfaces/responses/ICompanyResponse';
import { CompanyDataService } from 'src/app/services/companyData.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  informacionAdic: string = "";
  contacto: string = "";
  mail: string = "";
  cel: string = "";
  facebook: string = "";
  instagram: string = "";

  constructor(private companyDataService:CompanyDataService) { }

  ngOnInit(): void {
    this.companyDataService.getDataCompany().subscribe((rs: ICompanyResponse) =>{
      if (!rs.Error){
        this.informacionAdic = rs.Company[0].ActivityDescription?.toString();
        this.contacto = rs.Company[0].ContactInformation?.toString();
        this.mail = rs.Company[0].Email?.toString();
        this.cel = rs.Company[0].CelPhone?.toString();
        this.facebook = rs.Company[0].Facebook?.toString();
        this.instagram = rs.Company[0].Instagram?.toString();
      }
    });
  }
}
