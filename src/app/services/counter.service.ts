import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  inactiveCounter = 0;
  activeCounter = 0;

  addInactive() {
    this.inactiveCounter++;
    console.log(`Inactive: ${this.inactiveCounter}`);
  }

  addActive() {
    this.activeCounter++;
    console.log(`Active ${this.activeCounter}`);
  }
}
