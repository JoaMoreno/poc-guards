import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardControlService } from '../cpanel/guard-control.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate,CanActivateChild {
  constructor(private _guardService : GuardControlService, private router: Router) {}

  get userStatus(){
    return this._guardService.statusUserType === 'standard' || this._guardService.statusUserType === 'admin'
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._guardService.statusIsLogged) {
        console.log('[canActivate] - Logged true');
        
        return true;
      } else {
        console.log('[canActivate] - Logged false');
        this.router.navigate(["/error",{access:'L'}]);
        return false
      }
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._guardService.statusIsLogged && this.userStatus) {
        console.log('[canActivateChild] - Logged true');
        return true;

      } else {
        console.log('[canActivateChild] - Logged false');
        this.router.navigate(["/error",{access:'LS'}]);
        return false
      }
  }
  
}
