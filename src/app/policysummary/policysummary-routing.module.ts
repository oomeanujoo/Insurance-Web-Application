import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicysummaryComponent } from './policysummary.component';

const routes: Routes = [{ path: '', component: PolicysummaryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolicysummaryRoutingModule { }
