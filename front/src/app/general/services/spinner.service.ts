import { Injectable } from '@angular/core';
import {filter, map, observable, Observable, share, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
  private subject = new Subject<{ id: string, visible: boolean }>();
  private defaultId = 'default-spinner';

  public onChange(id: string = this.defaultId): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      this.subject.pipe(filter(x => x && x.id === id), map(x => x.visible), share()).subscribe({
        next: (state: boolean) => subscriber.next(state)
      });
    });
  }

  start(id: string = this.defaultId) {
    this.subject.next({
      id: id,
      visible: true
    });
  }

  stop(id: string = this.defaultId) {
    this.subject.next({
      id: id,
      visible: false
    });
  }
}
