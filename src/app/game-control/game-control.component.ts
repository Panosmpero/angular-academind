import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() increment = new EventEmitter<number>();
  incrementInterval: ReturnType<typeof setInterval>;
  count: number = 1;

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.incrementInterval = setInterval(() => {
      this.increment.emit(this.count++);
    }, 1000);
  }

  onPause() {
    clearInterval(this.incrementInterval);
  }
}
