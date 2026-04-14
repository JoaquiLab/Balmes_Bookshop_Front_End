import { Component } from '@angular/core';
import { AppBodyComponent } from '../app-body/app-body.component';
import { AppHeaderComponent } from '../app-header/app-header.component';

@Component({
  selector: 'cl-content',
  templateUrl: 'app-content.component.html',
  imports: [AppBodyComponent, AppHeaderComponent],
})
export class AppContentComponent {
}
