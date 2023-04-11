import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{ path: '', loadChildren: () => import('./selectproduct/selectproduct.module').then(m => m.SelectproductModule) },
    { path: 'insuranceinfo', loadChildren: () => import('./insuranceinfo/insuranceinfo.module').then(m => m.InsuranceinfoModule) },
    { path: 'policysummary', loadChildren: () => import('./policysummary/policysummary.module').then(m => m.PolicysummaryModule) },
  ]
 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
