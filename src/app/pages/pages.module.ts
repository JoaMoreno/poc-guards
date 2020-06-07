import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';

const COMPONENTS =[
  HomeComponent
]
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[COMPONENTS]
})
export class PagesModule { }
