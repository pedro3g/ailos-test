import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcumb',
  templateUrl: './breadcumb.component.html',
  styleUrls: ['./breadcumb.component.scss'],
})
export class BreadcumbComponent {
  @Input() breadcumbs: Breadcumb[] = [];
}

export interface Breadcumb {
  label: string;
  active: boolean;
}
