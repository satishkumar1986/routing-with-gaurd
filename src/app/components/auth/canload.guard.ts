import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanloadGuard implements CanLoad {

  constructor(private router:Router){}

  isLogedIn:boolean = false;
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      if(!this.isLogedIn){
        alert('you are not authorized user')
        this.router.navigate([''])
        return null
      } else {
        return true;
      }
    
  }
}
