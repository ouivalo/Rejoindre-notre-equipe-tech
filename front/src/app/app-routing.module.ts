import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteLayoutViewComponent } from './general/views/compte-layout-view/compte-layout-view.component';
import { AddCertificationComponent } from './general/components/add-certification/add-certification.component';
import { DashboardComponent } from './general/components/dashboard/dashboard.component';
import { RecapCertifComponent } from './general/components/recap-certif/recap-certif.component';

const routes: Routes = [

  {path:'compte',
    children:[

      {path:'', component:CompteLayoutViewComponent,
        children:[
          {path:'', component : DashboardComponent},
          {path:'recapitulatif', component : RecapCertifComponent},
          
        ]},
        
    ]},
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
