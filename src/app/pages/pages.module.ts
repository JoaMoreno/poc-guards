import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { PagesListComponent } from './pages-list/pages-list.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { RegularComponent } from './regular/regular.component';

const COMPONENTS =[
  HomeComponent,
  PagesListComponent
]
@NgModule({
  declarations: [COMPONENTS, AdminComponent, ErrorComponent, RegularComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[COMPONENTS]
})
export class PagesModule { }
