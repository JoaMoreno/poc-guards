import { Injectable } from '@angular/core';
import { CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface PuedeDesactivar{
  permitirSalirDeRuta: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ChildrenGuard implements CanDeactivate<PuedeDesactivar> {
  canDeactivate( component: PuedeDesactivar ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    return component.permitirSalirDeRuta()
    
  }
  
}
