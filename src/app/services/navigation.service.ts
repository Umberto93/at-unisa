import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavigationService {

    private history: string[];
    
    constructor(
        private router: Router,
        private location: Location
    ) {
        this.history = [];
        this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationEnd) {
                this.history.push(event.urlAfterRedirects);
            }
        });
    }

    back(): void {
        this.history.pop();

        if (this.history.length > 0) {
            this.location.back();
        } else {
            this.router.navigateByUrl('/');
        }

    }
}