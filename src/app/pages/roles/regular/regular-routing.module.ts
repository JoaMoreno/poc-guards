import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegularComponent } from './regular/regular.component';


const routes: Routes = [
  {path:'',component:RegularComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegularRoutingModule { }
