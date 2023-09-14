import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';
import { cpf as cpfValidator } from 'cpf-cnpj-validator';
import { Breadcumb } from 'src/app/shared/components/breadcumb/breadcumb.component';
import { Situation } from './components/register-status/register-status.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
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

  client = {
    register: {
      cpf: '',
      name: 'Mariane de Souza Oliveira',
      situation: 'regular' as Situation,
    },
    accounts: [
      {
        type: 'Conta aplicação',
        bank: 'Cooperativa Viacredi',
        number: '557932',
        digit: '4',
      },
      {
        type: 'Conta corrente',
        bank: 'Cooperativa Viacredi',
        number: '778461',
        digit: '8',
      },
    ],
  };

  mask = createMask('999.999.999-99');
  cpfControll = new FormControl('');

  errorMessage: string | null = null;

  ngOnInit(): void {
    this.cpfControll.setErrors({
      invalid: false,
    });
    this.listenToFormControl();
  }

  private listenToFormControl() {
    this.cpfControll.valueChanges.subscribe((value) => {
      const cpf = String(value).replace(/\D/g, '');

      if (!cpfValidator.isValid(String(cpf))) {
        if (cpf.length === 11) {
          this.errorMessage = 'O CPF informado é inválido';
        } else {
          this.errorMessage = null;
        }

        this.cpfControll.setErrors({
          invalid: true,
        });
        return void 0;
      } else {
        this.errorMessage = null;
        this.cpfControll.setErrors(null);
        this.client.register.cpf = cpf;
      }
    });
  }

  onSubmit() {
    if (this.cpfControll.invalid) {
      this.cpfControll.markAsTouched();
      return void 0;
    }
  }
}
