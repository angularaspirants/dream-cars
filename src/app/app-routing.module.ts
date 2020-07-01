import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BuyCarComponent} from './comps/buy-car/buy-car.component';
import {SellCarComponent} from './comps/sell-car/sell-car.component';
import {PageNotFoundComponent} from './comps/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: BuyCarComponent },
  { path: 'buy-car', component: BuyCarComponent },
  { path: 'sell-car', component: SellCarComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
