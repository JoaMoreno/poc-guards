import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ErrorComponent } from './pages/error/error.component';
import { StandarComponent } from './pages/standar/standar.component';
import { StatusComponent } from './pages/status/status.component';
import { StatusGuard } from './guards/status.guard';
import { RegularGuard } from './guards/regular.guard';
import { DeudorGuard } from './guards/deudor.guard';
import { ChildrenGuard } from './guards/children.guard';
import { ChildrenComponent } from './pages/standar/children/children.component';

export const routes: Routes = [
  {path:'', redirectTo:'/welcome-page', pathMatch:'full'},
  {path:'error', component: ErrorComponent},
  {path:'welcome-page', component: HomeComponent},
  {path:'admin-page', component: AdminComponent,  canActivate: [AuthGuard, AdminGuard]},
  {path:'standard-page', component:StandarComponent, canActivateChild: [AuthGuard], children:[
    { path: 'children', component:ChildrenComponent, canDeactivate: [ChildrenGuard] }
  ]},
  {
    path: 'status', component: StatusComponent ,canActivate:[StatusGuard],children:[
      {path:'regular',canLoad:[StatusGuard,RegularGuard],canActivate:[RegularGuard], loadChildren: () => import('./pages/status/regular/regular.module').then(m => m.RegularModule)},
      {path:'deudor',canLoad:[StatusGuard,DeudorGuard],canActivate:[DeudorGuard], loadChildren: () => import('./pages/status/deudor/deudor.module').then(m => m.DeudorModule)}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
