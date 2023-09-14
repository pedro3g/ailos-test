import { Injectable } from '@angular/core';
import { Situation } from 'src/app/modules/search/components/register-status/register-status.component';

const mockedCooperated = {
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

export type Cooperated = typeof mockedCooperated;

@Injectable()
export default class CooperatedService {
  async getCooperatedByCpf(cpf: string): Promise<Cooperated> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockedCooperated);
      }, 3000);
    });
  }
}
