import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () =>
      import('./welcome/welcome.module').then((m) => m.WelcomeModule),
  },
  {
    path: 'about-me',
    loadChildren: () =>
      import('./about-me/about-me.module').then((m) => m.AboutMEModule),
  },
  {
    path: 'contact-me',
    loadChildren: () =>
      import('./contact-me/contact-me.module').then((m) => m.ContactMeModule),
  },
  {
    path: 'my-work',
    loadChildren: () =>
      import('./my-work/my-work.module').then((m) => m.MyWorkModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
