import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { GuestGuardService } from './services/guard/guest-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
        canActivate: [GuestGuardService]
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
        canActivate: [AuthGuardService],
        data: {
            name: 'Home',
            icon: 'icon-name'
        }
    },
    {
        path: 'transcript',
        loadChildren: () => import('./pages/transcript/transcript.module').then(m => m.TranscriptPageModule),
        canActivate: [AuthGuardService],
        data: {
            name: 'Libretto',
            icon: 'icon-name'
        }
    },
    {
        path: 'tax',
        loadChildren: () => import('./pages/tax/tax.module').then(m => m.TaxPageModule),
        canActivate: [AuthGuardService],
        data: {
            name: 'Tasse',
            icon: 'icon-name'
        }
    },
    {
        path: '**', // indicates whatever not existent path 
        redirectTo: '/home' // you can substitute redirectTo with a custom component to render on Page Not Found
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
