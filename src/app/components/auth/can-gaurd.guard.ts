import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanGaurdGuard implements CanActivate {

  constructor(private router:Router){

  }

  isLogedIn:boolean = false;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(!this.isLogedIn){
      alert('you are not authorized user')
      this.router.navigate([''])
      return false; 
    } 

    return true;
  }
  
}
