import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { EnquetesModule } from './enquetes/enquetes.module';
import { EnquetesService } from './enquetes.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    EnquetesModule
  ],
  providers: [
    EnquetesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
