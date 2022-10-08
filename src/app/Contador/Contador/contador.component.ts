import {Component } from "@angular/core";

@Component({
   selector: 'app-contador',
   template: `
   
   <h1>Hola Mundo {{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

<button type="button" (click)="acumular(-base)">-</button>
<span>{{contador}}</span>
<button type="button" (click)="acumular(base)">+</button>
`
    
})

export class contadorComponent{
    title: string = 'Contador App';
    contador: number = 0;
    base: number = 5;
  
    acumular(base: number):void{
      this.contador += base;
    }
}