import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { TableComponent } from './pages/table/table.component';
import { SubNavbarComponent } from './component/sub-navbar/sub-navbar.component';
import { ConfigureDoorComponent } from './pages/configure-door/configure-door.component';
import { PlaceOrderComponent } from './component/place-order/place-order.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    TableComponent,
    SubNavbarComponent,
    ConfigureDoorComponent,
    PlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
