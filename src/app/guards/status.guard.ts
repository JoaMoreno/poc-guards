import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardControlService } from '../cpanel/guard-control.service';

@Injectable({
  providedIn: 'root'
})
export class StatusGuard implements CanActivate {
  constructor(private _guardService : GuardControlService, private router: Router) {}
  get userStatus(){
    return this._guardService.statusUserType === 'standard' || this._guardService.statusUserType === 'admin'
  }
  get roleStatus(){
    return this._guardService.statusRole === 'deudor' || this._guardService.statusRole === 'regular'
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._guardService.statusIsLogged && this.userStatus && this.roleStatus) {
        return true;
      } else {
        this.router.navigate(["/error",{access:'LS'}]);
        return false
      }
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (this._guardService.statusIsLogged && this.userStatus && this.roleStatus) {
        return true;
      } else {
        return false
      }
  }
  
}
