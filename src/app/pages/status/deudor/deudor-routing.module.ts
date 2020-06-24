import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeudaComponent } from './deuda/deuda.component';


const routes: Routes = [
  {path:'', component:DeudaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeudorRoutingModule { }
