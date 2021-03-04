import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'lessions'
    },
    {
        path: 'lessons',
        loadChildren: () => import('./lessons/lessons.module').then(m => m.LessonsPageModule),
    },
    {
        path: 'sessions',
        loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsPageModule),
    },
    {
        path: 'rooms',
        loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsPageModule)
    },
    {
        path: 'freerooms',
        loadChildren: () => import('./free-rooms/free-rooms.module').then(m => m.FreeRoomsPageModule)
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgendawebPageRoutingModule { }
