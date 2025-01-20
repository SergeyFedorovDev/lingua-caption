import { Component } from '@angular/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiHeader } from '@taiga-ui/layout';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TuiTitle, RouterLink, TuiButton, TuiHeader, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  protected readonly routeItem = [
    {
      routeLink: '/home',
      label: 'Home',
    },
    {
      routeLink: '/library',
      label: 'Library',
    },
  ];
}
