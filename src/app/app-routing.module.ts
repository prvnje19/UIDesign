import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TableComponent } from './component/table/table.component';
import { ConfigureDoorComponent } from './pages/configure-door/configure-door.component';

const routes: Routes = [ 
  { path: 'home', component: ConfigureDoorComponent },
  { path: '', component: TableComponent },
  { path: 'order', component: PlaceOrderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
