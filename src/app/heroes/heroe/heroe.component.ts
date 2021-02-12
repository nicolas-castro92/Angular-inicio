import { ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html',
})
export class HeroeComponent {
    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }


    obtenerNombre(): string {
        return `${this.nombre}  -   ${this.edad}`;
    }

    camiarNombre():void{
        this.nombre='Spiderman'

    }

    camiarEdad():void{
        this.edad=34

    }

}
