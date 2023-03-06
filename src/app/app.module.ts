import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
// import { TableComponent } from './component/table/table.component';
import { SubNavbarComponent } from './component/sub-navbar/sub-navbar.component';
import { ConfigureDoorComponent } from './pages/configure-door/configure-door.component';
import { FormsComponent } from './pages/forms/forms.component';
import { PlaceOrderComponent } from './pages/place-order/place-order.component';
import { TableComponent } from './component/table/table.component';
import { CreateneworderComponent } from './pages/createneworder/createneworder.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    TableComponent,
    SubNavbarComponent,
    ConfigureDoorComponent,
    FormsComponent,
    PlaceOrderComponent,
    CreateneworderComponent,
   
  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
