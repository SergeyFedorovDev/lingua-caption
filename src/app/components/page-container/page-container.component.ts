import { Component } from '@angular/core';

@Component({
  selector: 'app-page-container',
  standalone: true,
  template: ` <ng-content></ng-content>`,
  host: { class: 'block mx-auto max-w-[calc(1320px+32px)] w-full px-4 box-border' },
})
export class PageContainerComponent {}
