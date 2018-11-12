import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MeetupsListComponent} from './meetups-list/meetups-list.component';
import {MeetupDetailsComponent} from './meetup-details/meetup-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetupsListComponent,
    MeetupDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
