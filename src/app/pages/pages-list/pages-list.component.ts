import { Component, OnInit } from '@angular/core';
import {routes} from '../../app-routing.module'
import { Router } from '@angular/router';
@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.scss']
})
export class PagesListComponent implements OnInit {

  routesList = routes

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.routesList);
    
  }

  redirecTo(url:string){
    this.router.navigateByUrl(`/${url}`)
    
  }

}
