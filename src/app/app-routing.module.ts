import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { ErrorComponent } from './pages/error/error.component';
import { StandarComponent } from './pages/standar/standar.component';
import { StatusGuard } from './guards/status.guard';
import { RegularGuard } from './guards/regular.guard';
import { DeudorGuard } from './guards/deudor.guard';
import { ChildrenComponent } from './pages/standar/children/children.component';
import { ChildrenGuard } from './guards/children.guard';
import { StatusComponent } from './pages/status/status.component';

export const routes: Routes = [
  {path:'', redirectTo:'/welcome-page', pathMatch:'full'},
  {path:'error', component: ErrorComponent},
  {path:'welcome-page', component: HomeComponent},
  {path:'admin-page', component: AdminComponent,  canActivate: [AuthGuard, AdminGuard]},
  {path:'standard-page', component:StandarComponent, canActivate:[AuthGuard], canActivateChild: [AuthGuard], children:[
    { path: 'children', loadChildren: () => import('./pages/standar/children.module').then(m => m.ChildrenModule) }
    // {path: 'children', component:ChildrenComponent, canDeactivate: [ChildrenGuard]}
  ]},
  {
    path: 'status', component: StatusComponent ,canActivate:[StatusGuard],children:[
      {path:'regular',canLoad:[StatusGuard,RegularGuard],loadChildren: () => import('./pages/status/regular/regular.module').then(m => m.RegularModule)},
      {path:'deudor',canLoad:[StatusGuard,DeudorGuard],loadChildren: () => import('./pages/status/deudor/deudor.module').then(m => m.DeudorModule)}
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
