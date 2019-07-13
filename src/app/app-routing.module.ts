import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BelieveComponent } from './believe/believe.component';
import { ConnectComponent } from './connect/connect.component';
import { CertifiedComponent } from './certified/certified.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'believe', component: BelieveComponent},
  { path: 'connect', component: ConnectComponent},
  { path: 'certified', component: CertifiedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
