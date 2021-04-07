import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { DataGetterService } from '../service/data-getter.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private dataGetter: DataGetterService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

      const isLoggenIn = this.dataGetter.getUser() !== '';
      if (!isLoggenIn) {
        this.router.navigateByUrl('/login');
      }
      return isLoggenIn;
  }
}
