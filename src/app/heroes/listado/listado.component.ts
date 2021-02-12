import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor'];
  heroeBorrad:string=''
  borrarHeroe():void {

    this.heroeBorrad=this.heroes.shift()||'';
  }

  
}
