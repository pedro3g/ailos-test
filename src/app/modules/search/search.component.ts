import { Component } from '@angular/core';
import { Breadcumb } from 'src/app/shared/components/breadcumb/breadcumb.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  breadcumbs: Breadcumb[] = [
    {
      label: 'Início',
      active: true,
    },
    {
      label: 'Documentos',
      active: false,
    },
    {
      label: 'Dados cadastrais',
      active: false,
    },
    {
      label: 'Admissão',
      active: false,
    },
  ];
}
