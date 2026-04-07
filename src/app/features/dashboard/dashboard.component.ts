import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { TaskPageComponent } from './dashboard-UI/dashboard-page.component';
import { Book } from '@shared/interfaces';
import { AuthFacade } from '@features/auth';
import { Router } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { DashboardFacadeService } from './state/dashboard.facade';
import { interval, Observable, of, Subscription } from 'rxjs';
import { Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  imports: [TaskPageComponent, JsonPipe, AsyncPipe],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private authFacade = inject(AuthFacade);
  private router: Router = inject(Router);
  private fadaceService = inject(DashboardFacadeService);
  protected readonly booksSignal: Signal<Book[] | undefined> = toSignal(this.fadaceService.books$);
  //InterviewPractice
  protected interval$: Observable<number> = of(0);

  constructor() {}
  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe);
    this.interval$ = interval(1000);
  }

  ngOnInit(): void {
    this.fadaceService.getBooks();

    this.interval$.subscribe((number: number) => {
      console.log('time: ', number);
    });
  }

  logOut() {
    console.log('LOG OUTING OF THE SESSION');
    this.authFacade.deleteUser();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth-page');
  }
}
