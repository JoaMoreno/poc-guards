import { Component } from '@angular/core';
import {routes} from '../../app-routing.module'
import { Router } from '@angular/router';
@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.scss']
})
export class PagesListComponent {

  routesList = routes

  constructor(
    private router: Router
  ) { }


  redirecTo(url:string){
    this.router.navigateByUrl(`/${url}`)
    
  }

}
