import {NgModule}from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import 'rxjs/rx';

import {AppComponent} from './app.component';
import {ItemListComponent} from './item-list.component';
import {ItemDetailEditComponent} from './item-detail-edit.component';
import {ItemDetailViewComponent} from './item-detail-view.component';
import {ItemService} from './item.service';
import {HomeComponent} from './home.component';

import {RouterModule} from '@angular/router';
import {AppRouting} from './app.routing';

import {LoginComponent} from './login.component';
import {AboutComponent} from './about.component';
import {PageNotFoundComponent} from './page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        ItemListComponent,
        ItemDetailViewComponent,
        ItemDetailEditComponent,
        HomeComponent,
        PageNotFoundComponent,
        LoginComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule,
        AppRouting
    ],
    providers: [ItemService],
    bootstrap: [AppComponent]
})

export class AppModule { }