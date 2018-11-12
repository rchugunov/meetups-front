import {Injectable} from '@angular/core';
import {Event} from './event';
import {Observable, Subscriber} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() {
  }

  getEvents(): Observable<Event[]> {
    return Observable.create(function (subs: Subscriber<Event[]>) {
      try {
        subs.next([
          new Event(123, 'sdfsf'),
          new Event(423, 'jdkadsn', 'sdfsdf', 'klasdmakld', 'akldmasl'),
          new Event(4234, 'jdkadsn', 'dsfsf', 'klasdmakld', 'akldmasl')
        ]);
        subs.complete();
      } catch (e) {
        subs.error(e);
      }
    });
  }
}
