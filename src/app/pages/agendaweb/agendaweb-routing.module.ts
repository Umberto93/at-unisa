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
    },
    {
        path: 'rooms',
        loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgendawebPageRoutingModule { }
