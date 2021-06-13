import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  constructor() {}

  onIncrement(emittedNumber: number) {
    // console.log(emittedNumber);
    emittedNumber % 2 === 0
      ? this.evenNumbers.push(emittedNumber)
      : this.oddNumbers.push(emittedNumber);
  }
}
