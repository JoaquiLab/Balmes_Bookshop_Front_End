import { Component, inject, runInInjectionContext } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFacade } from '@features/auth';
import { DashboardComponent } from '@features/dashboard';

@Component({
  selector: 'app-body',
  templateUrl: 'app-body.component.html',
  imports:  [DashboardComponent]
})
export class AppBodyComponent {
  constructor() {

  }
}
