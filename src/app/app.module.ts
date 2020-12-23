import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http'
import {MatTabsModule} from '@angular/material/tabs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CardShowComponent } from './components/card-show/card-show.component';
import {MatInputModule} from '@angular/material/input';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { APP_ROUTES } from './app.routes';
import { HomeComponent } from './home/home.component'
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardShowComponent,
    HomeComponent,
     
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTabsModule,
    NoopAnimationsModule,
    MatInputModule,
    APP_ROUTES
  ],
  providers: [ {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
