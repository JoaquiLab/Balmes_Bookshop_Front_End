import { Component, EventEmitter, Output } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  imports: [MatFormField, MatInput, MatIcon, ReactiveFormsModule],
})
export class SearchBarComponent {
  barInput: FormControl<string | null> = new FormControl('');
  @Output() searchBarValueEmitter: EventEmitter<string> = new EventEmitter();

  stopFormPropagation(event: Event): void {
    event.preventDefault();
  }

  search(event: Event): void {
    event.stopPropagation();
    console.log('SEARCH BY:', this.barInput.value);
    this.searchBarValueEmitter.emit(this.barInput.value ? this.barInput.value : '');
  }
}
