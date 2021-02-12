import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ title }}</h1>

    <h3>
      La bases es: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumular(base)">+{{ base }}</button>

    <span>{{ numero }}</span>

    <button (click)="acumular(-base)">-{{ base }}</button>
  `
})
export class contadorComponent {
  title: string = 'contador app';
  numero: number = 10;
  base: number = 5;

  acumular(valor: number) {
    this.numero += valor;
  }
}
