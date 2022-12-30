import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserActivatorService implements CanActivate{

  constructor() { }

  canActivate(): boolean {
    return confirm('Are you sure?');
  }
}
