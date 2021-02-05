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
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
        canActivate: [AuthGuardService]
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
        canActivate: [GuestGuardService]
    },
    {
        path: 'transcript',
        loadChildren: () => import('./pages/transcript/transcript.module').then(m => m.TranscriptPageModule),
        canActivate: [AuthGuardService]
    },
    {
        path: '**', // indicates whatever not existent path 
        redirectTo: '/home' // you can substitute redirect to with a component related to PageNotFound
    },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
