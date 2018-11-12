import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MeetupDetailsComponent} from './meetup-details/meetup-details.component';
import {MeetupsListComponent} from './meetups-list/meetups-list.component';

const routes: Routes = [
  {path: 'meetup-details/:id', component: MeetupDetailsComponent},
  {path: '', component: MeetupDetailsComponent},
  {path: 'meetups', component: MeetupsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
