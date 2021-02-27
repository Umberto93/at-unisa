import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../user/user.service";

@Injectable({
    providedIn: "root",
})
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router,
        private userService: UserService
    ) { }
    
    /**
     * Verifica se l'utente è autenticato. In tal caso può navigare liberamente tra le varie pagine
     * dell'applicazione. In caso contrario viene fatto automaticamente il redirect alla pagina di
     * login.
     * 
     * @param route La rotta a cui l'utente vuole accedere.
     * @param state Lo stato attuale del Router.
     */
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const credentials = await this.userService.getCredentials();
        return credentials !== null || this.router.navigateByUrl('/login');
    }
}​​​​​​​