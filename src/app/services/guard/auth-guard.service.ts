import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: "root",
})
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private storage: Storage
    ) { }
    
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const credentials = await this.storage.get('credentials');
        return credentials !== null || this.router.navigateByUrl('/login');
    }
}​​​​​​​