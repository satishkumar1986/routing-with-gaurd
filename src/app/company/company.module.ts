import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [CompanyComponent, ListComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { 
  constructor(){
    console.log('Company Module Loaded!!!')
  }
 }
