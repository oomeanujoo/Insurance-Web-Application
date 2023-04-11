import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceinfoComponent } from './insuranceinfo.component';

const routes: Routes = [{ path: '', component: InsuranceinfoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceinfoRoutingModule { }
