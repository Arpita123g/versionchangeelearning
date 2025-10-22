import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { GlobalService } from '../global.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminLevelService implements CanActivate  {
  isSuper: boolean =false;
  SuperSub:Subscription;
  constructor(private _router: Router,private _global:GlobalService) {
    this.SuperSub = this._global.isSuper.subscribe((data)=>{
      this.isSuper = data;
    });
  }
  canActivate(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.isSuper) {
      return true;
    }else{
      return false;
    }
  }

  ngOnDestroy(){
    this.SuperSub.unsubscribe();
  }
}
