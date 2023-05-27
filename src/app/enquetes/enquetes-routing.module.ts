import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnquetesFormComponent } from './enquetes-form/enquetes-form.component';


const routes: Routes = [
  { path: 'enquetes-form', component: EnquetesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquetesRoutingModule { }
