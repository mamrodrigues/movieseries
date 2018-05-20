import { Component, Input, OnInit, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'] 
})
export class PainelComponent implements OnInit {

    @Input() titulo: string;
    elemento: ElementRef;

    constructor(elemento: ElementRef){
        this.elemento = elemento;
    }

    ngOnInit() {
    }

    fadeOut(cb){
        $(this.elemento.nativeElement).fadeOut(cb);
    }
}