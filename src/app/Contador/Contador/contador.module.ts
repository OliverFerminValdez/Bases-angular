import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { contadorComponent } from "./contador.component";



@NgModule({
    declarations:[
        contadorComponent,
    ],
    exports:[
        contadorComponent
    ],
    imports:[
        BrowserModule,
        CommonModule,
    ]
})

export class ContadorModule{

}
