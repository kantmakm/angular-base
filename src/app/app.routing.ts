import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './views/notfound/notfound.component';
import { HomeComponent } from './views/home/home.component';
import { HelloWorldComponent } from './views/helloworld/helloworld.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home - Spire Digital'
    }
  },
  {
    path: 'hello-world',
    component: HelloWorldComponent,
    data: {
      title: 'Hello World - Spire Digital'
    }
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

export const routing = RouterModule.forRoot(routes);
