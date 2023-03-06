import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { TableComponent } from './component/table/table.component';
import { SubNavbarComponent } from './component/sub-navbar/sub-navbar.component';
import { ConfigureDoorComponent } from './pages/configure-door/configure-door.component';
import { FormsComponent } from './pages/forms/forms.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { TableComponent } from './component/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    TableComponent,
    SubNavbarComponent,
    ConfigureDoorComponent,
    FormsComponent,
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
