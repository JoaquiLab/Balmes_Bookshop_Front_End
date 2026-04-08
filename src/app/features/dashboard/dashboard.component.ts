import { Component, inject, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { TaskPageComponent } from './dashboard-UI/dashboard-page.component';
import { Book } from '@shared';
import { AuthFacade } from '@features/auth';
import { Router } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { DashboardFacadeService } from './state/dashboard/dashboard.facade';
import { interval, Observable, of, Subscription } from 'rxjs';
import { Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCardComponent } from '../product-card';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CategoryMenuComponent } from "../category-menu/category-menu.component";
import { CategoryNode } from '.';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  imports: [SearchBarComponent, AsyncPipe, ProductCardComponent, CategoryMenuComponent],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private authFacade = inject(AuthFacade);
  private router: Router = inject(Router);
  private fadaceService = inject(DashboardFacadeService);
  protected readonly books: Observable<Book[]> = this.fadaceService.books$;
  protected categoryTreeDataSource: CategoryNode[] = []

  constructor() {}

  ngOnDestroy(): void {
    this.subscriptions.forEach((x) => x.unsubscribe);
  }

  ngOnInit(): void {
    this.fadaceService.getBooks();
  }

  search(searchBarValue: string): void {
    this.fadaceService.getBooks(searchBarValue);
  }

  logOut(): void {
    console.log('LOG OUTING OF THE SESSION');
    this.authFacade.deleteUser();
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth-page');
  }
}


const EXAMPLE_DATA: CategoryNode[] = [
  {
    name: 'Los imprescindibles',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Religión',
    children: [
      {
        name: 'Catequesis',
      },
      {
        name: 'Historia de la iglesia',
      },
    ],
  },
  {
    name: 'Humanidades',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Ciencias Naturales',
        children: [
          {
            name: 'Bioetica',
          },
          {
            name: 'Evolucionismo',
          },
          {
            name: 'Salud',
          },
        ],
      },
    ],
  },
];
