import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  @Output() addedIngredient = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const { value: name } = this.nameInputRef.nativeElement;
    const { value: amount } = this.amountInputRef.nativeElement;
    const newIngredient = new Ingredient(name, amount);
    this.addedIngredient.emit(newIngredient);
  }
}
