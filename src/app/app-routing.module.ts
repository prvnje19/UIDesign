import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOrderComponent } from './component/place-order/place-order.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TableComponent } from './pages/table/table.component';

const routes: Routes = [ 
  { path: 'home', component: HomePageComponent },
  { path: 'table', component: TableComponent },
  { path: 'order', component: PlaceOrderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
