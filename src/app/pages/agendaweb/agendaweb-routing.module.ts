import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'exams'
    },
    {
        path: 'exams',
        loadChildren: () => import('./exams/exams.module').then(m => m.ExamsPageModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgendawebPageRoutingModule { }
