import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagesListComponent } from './pages-list/pages-list.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { StandarComponent } from './standar/standar.component';
import { StatusComponent } from './status/status.component';


const COMPONENTS =[
  HomeComponent,
  PagesListComponent,
  AdminComponent,
  ErrorComponent,
  StandarComponent
]
@NgModule({
  declarations: [COMPONENTS, StatusComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[COMPONENTS]
})
export class PagesModule { }
