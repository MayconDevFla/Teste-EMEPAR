import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnquetesRoutingModule } from './enquetes-routing.module';
import { EnquetesFormComponent } from './enquetes-form/enquetes-form.component';


@NgModule({
  declarations: [
    EnquetesFormComponent
  ],
  imports: [
    CommonModule,
    EnquetesRoutingModule,
    FormsModule
  ],
  exports: [
    EnquetesFormComponent
  ]
})
export class EnquetesModule { }
