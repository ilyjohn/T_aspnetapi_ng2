import {RouterModule,Routes} from '@angular/router';


import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {LoginComponent} from './login.component';
import {ItemDetailComponent} from './item-detail.component';
import {PageNotFoundComponent} from './page-not-found.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '' },
    { path: 'about', component: AboutComponent },
    { path: 'login', component: LoginComponent },
    { path: 'item/:id', component: ItemDetailComponent },
    { path: '**', component: PageNotFoundComponent }
];


export const AppRouting = RouterModule.forRoot(appRoutes);