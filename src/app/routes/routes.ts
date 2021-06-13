import { LayoutComponent } from '../layout/layout.component';

export const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      /*  { path: '', redirectTo: '', pathMatch: 'full' }, */
      {
        path: 'people',
        loadChildren: () =>
          import('./people/people.module').then((m) => m.PeopleModule),
      },
      {
        path: 'people/:id',
        loadChildren: () =>
          import('./people-form/people-form.module').then(
            (m) => m.PeopleFormModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./pages/singin/singin.module').then((m) => m.SinginModule),
  } /*  */,
  /*   { path: '**', redirectTo: '/login' }, */
];
