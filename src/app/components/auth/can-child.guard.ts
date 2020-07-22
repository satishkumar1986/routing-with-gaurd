import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanChildGuard implements CanActivateChild {
  constructor(private router:Router){
  }

  isLogedIn:boolean = false;

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.isLogedIn){
      alert('you are not authorized user')
      this.router.navigate([''])
      return false
    }
    
    return true;
  }
  
}
