import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeudorRoutingModule } from './deudor-routing.module';
import { DeudaComponent } from './deuda/deuda.component';


@NgModule({
  declarations: [DeudaComponent],
  imports: [
    CommonModule,
    DeudorRoutingModule
  ]
})
export class DeudorModule { }
