import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { countriesComponent } from './component/countries.component';
import { countriesService } from './service/countries.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,countriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [countriesService],
  bootstrap: [countriesComponent]
})
export class AppModule { }
