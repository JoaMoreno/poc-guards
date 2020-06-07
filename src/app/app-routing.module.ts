import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ErrorComponent } from './pages/error/error.component';
import { StandarComponent } from './pages/standar/standar.component';
import { RolesGuard } from './guards/roles.guard';
import { RegularGuard } from './guards/regular.guard';
import { DeudorGuard } from './guards/deudor.guard';

export const routes: Routes = [
  {path:'', redirectTo:'/welcome-page', pathMatch:'full'},
  {path:'error', component: ErrorComponent},
  {path:'welcome-page', component: HomeComponent},
  {path:'admin-page', component: AdminComponent,  canActivate: [AuthGuard, AdminGuard]},
  {path:'standar-page', component: StandarComponent, canActivate:[AuthGuard], canActivateChild: [AuthGuard], children:[
    {path: 'children', component:HomeComponent}
  ]},
  {
    path: 'roles',canActivate:[RolesGuard],children:[
      {path:'regular',canLoad:[RolesGuard,RegularGuard],loadChildren: () => import('./pages/roles/regular/regular.module').then(m => m.RegularModule)},
      {path:'deudor',canLoad:[RolesGuard,DeudorGuard],loadChildren: () => import('./pages/roles/deudor/deudor.module').then(m => m.DeudorModule)}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
