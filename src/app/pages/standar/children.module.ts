import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRoutingModule } from './children-routing.module';
import { ChildrenComponent } from './children/children.component';


@NgModule({
  declarations: [ChildrenComponent],
  imports: [
    CommonModule,
    ChildrenRoutingModule
  ]
})
export class ChildrenModule { }
