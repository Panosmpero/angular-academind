import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private intervalSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.intervalSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    // ===== Same as above ======
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
      }, 1000);
    });

    this.intervalSubscription = customIntervalObservable.subscribe((count) =>
      console.log(count)
    );
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }
}
