import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'sessions'
    },
    {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsPageModule),
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgendawebPageRoutingModule { }
