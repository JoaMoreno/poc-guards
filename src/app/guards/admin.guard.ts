import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardControlService } from '../cpanel/guard-control.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _guardService : GuardControlService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._guardService.statusUserType === 'admin') {
        console.log('Auth true');
        
        return true;
      } else {
        console.log('Auth false');
        this.router.navigate(["/error",{access:'LA'}]);
      }
  }
}
