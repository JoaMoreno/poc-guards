import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ErrorComponent } from './pages/error/error.component';


export const routes: Routes = [
  {path:'', redirectTo:'/welcome-page', pathMatch:'full'},
  {path:'error', component: ErrorComponent},
  {path:'welcome-page', component: HomeComponent},
  {path:'admin-page', component: AdminComponent,  canActivate: [AuthGuard, AdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
