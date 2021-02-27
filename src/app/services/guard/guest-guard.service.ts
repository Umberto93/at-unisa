import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class GuestGuardService implements CanActivate {

    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    /**
     * Verifica se l'utente è un visitatore. In tal caso può accedere solamente alla pagina di
     * login. In caso contrario viene effettuato il redirect alla home.
     * 
     * @param route La rotta a cui l'utente vuole accedere.
     * @param state Lo stato attuale del Router.
     */
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const credentials = await this.userService.getCredentials();
        return !credentials || this.router.navigateByUrl('/home');
    }

}