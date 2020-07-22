import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryComponent } from '../gallery/gallery.component';

export interface canComponentDeactiveate {
  canDeactivate: () => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}

@Injectable({
  providedIn: 'root'
})


// export class CanDeGuard implements CanDeactivate<unknown> {  // For Any Component

//   canDeactivate(
//     component: unknown,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//     return window.confirm('you want navigate?')
//   }

// }

// export class CanDeGuard implements CanDeactivate<GalleryComponent> { // For Specific Component

//   canDeactivate(
//     component: GalleryComponent,
//     currentRoute: ActivatedRouteSnapshot,
//     currentState: RouterStateSnapshot,
//     nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//     return component.canDeactivate?component.canDeactivate():true;
//   }

// }

// export class CanDeGuard implements CanDeactivate<canComponentDeactiveate> { // For Any Component
//   canDeactivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

//   return window.confirm('you want navigate?');

// }

// }


export class CanDeGuard implements CanDeactivate<canComponentDeactiveate> { // For perfect way
  canDeactivate(component: canComponentDeactiveate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

 return component.canDeactivate?component.canDeactivate():true;
  
}

}