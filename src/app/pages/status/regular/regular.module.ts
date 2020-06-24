import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegularRoutingModule } from './regular-routing.module';
import { RegularComponent } from './regular/regular.component';


@NgModule({
  declarations: [RegularComponent],
  imports: [
    CommonModule,
    RegularRoutingModule
  ]
})
export class RegularModule { }
