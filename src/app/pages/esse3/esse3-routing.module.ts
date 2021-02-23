import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'profile'
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'transcript',
    loadChildren: () => import('./transcript/transcript.module').then(m => m.TranscriptPageModule)
  },
  {
    path: 'tax',
    loadChildren: () => import('./tax/tax.module').then(m => m.TaxPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Esse3PageRoutingModule { }
