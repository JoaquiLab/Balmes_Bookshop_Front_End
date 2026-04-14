import { Component } from '@angular/core';
import { IMAGE } from '@core/constants';
import { NavMenuComponent } from '@features/nav-menu';

@Component({
  selector: 'cl-header',
  templateUrl: 'app-header.component.html',
  imports: [NavMenuComponent],
})
export class AppHeaderComponent {
  appImagePath: string = IMAGE.APP.LOGO;
}
