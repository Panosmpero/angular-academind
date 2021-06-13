import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('serverElement') element: {
    type: string;
    name: string;
    content: string;
  };
  @Input() name: string;

  constructor() {
    console.log('server constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('server OnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('server OnInit called!');
  }

  ngDoCheck() {
    console.log('server DoCheck called!');
  }

  ngAfterContentInit() {
    console.log('server AfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('server AfterContentChecked called!');
  }

  ngAfterViewInit() {
    console.log('server ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('server ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('server OnDestroy called!');
  }
}
