import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientComponent } from './client/client.component'; 
import { BanqueComponent } from './banque/banque.component';
import { PretComponent } from './pret/pret.component';


const routes: Routes = [
  { path: '', component: HomeComponent },              
  { path: 'client', component: ClientComponent },
  { path: 'banque', component: BanqueComponent },
  { path: 'pret', component: PretComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
