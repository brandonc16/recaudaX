import { LayoutComponent } from '../layout/layout.component';

export const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      /*  { path: '', redirectTo: '', pathMatch: 'full' }, */
      {
        path: 'home',
        loadChildren: () =>
          import('./people/people.module').then((m) => m.PeopleModule),
      },
    ],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/singin/singin.module').then((m) => m.SinginModule),
  } /*  */,
  { path: '**', redirectTo: '/login' },
];
