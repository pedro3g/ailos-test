import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-status',
  templateUrl: './register-status.component.html',
  styleUrls: ['./register-status.component.scss'],
})
export class RegisterStatusComponent {
  @Input() name: string = '';
  @Input() situation: Situation | null = null;

  getSituation(): string {
    switch (this.situation) {
      case 'regular':
        return 'Regular';
      case 'irregular':
        return 'Irregular';
      case 'not-found':
        return 'Não encontrado';
      default:
        return '';
    }
  }
}

export type Situation = 'regular' | 'irregular' | 'not-found';
