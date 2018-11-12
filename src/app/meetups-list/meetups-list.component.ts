import {Component, OnInit} from '@angular/core';
import {Event} from '../event';
import {EventsService} from '../events.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-meetups-list',
  templateUrl: './meetups-list.component.html',
  styleUrls: ['./meetups-list.component.css']
})
export class MeetupsListComponent implements OnInit {

  events: Event[];

  constructor(private route: ActivatedRoute,
              private location: Location,
              private eventsService: EventsService) {
  }

  ngOnInit() {
    this.loadEvents();
  }

  selected(event: Event) {
    this.location.go('meetup-details/' + event.id);
  }

  loadEvents(): void {
    this.eventsService.getEvents().subscribe(value => {
      this.events = value;
    }, error1 => {
      console.error(error1.toString());
    });
  }
}
