import { Component } from '@angular/core';
import { DashboardComponent } from '@features/dashboard';

@Component({
  selector: 'cl-body',
  templateUrl: 'app-body.component.html',
  imports: [DashboardComponent],
})
export class AppBodyComponent {}
