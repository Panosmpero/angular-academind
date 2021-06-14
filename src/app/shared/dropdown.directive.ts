import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target);
    // console.log(this.elRef.nativeElement);
    // console.log(event.target);
  }

  @HostBinding('class.open') isOpen = false;

  constructor(private elRef: ElementRef) {}
}
