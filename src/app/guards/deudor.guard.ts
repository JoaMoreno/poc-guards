import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardControlService } from '../cpanel/guard-control.service';

@Injectable({
  providedIn: 'root'
})
export class DeudorGuard implements CanLoad {
  constructor(private _guardService : GuardControlService, private router: Router) {}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (this._guardService.statusRole==='deudor') {
        return true;
      } else {
        this.router.navigate(["/error",{access:'LD'}]);
        return false
      }
  }
}
