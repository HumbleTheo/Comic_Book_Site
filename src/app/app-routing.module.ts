import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './comp/account/account.component';
import { BookFormComponent } from './comp/book-form/book-form.component';
import { DisplayComponent } from './comp/display/display.component';
import { HomeComponent } from './comp/home/home.component';
import { LoginComponent } from './comp/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'action',
        component: DisplayComponent,
      },
      {
        path: 'superhero',
        component: DisplayComponent,
      },
      {
        path: 'slice-of-life',
        component: DisplayComponent,
      },
      {
        path: 'humor',
        component: DisplayComponent,
      },
      {
        path: 'horror',
        component: DisplayComponent,
      },
      {
        path: '',
        redirectTo: 'action',
        pathMatch: 'full',
      },
    ],
  },

  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'book_form',
    component: BookFormComponent,
  },
  {
    path: 'book_form/:id',
    component: BookFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      window.scrollTo(0, 700);
    });
  }
}
