import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(fotos: FotoComponent[], digitado: string): FotoComponent[] {
        // captura o que foi digitado
        digitado = digitado.toLowerCase();
        // se tem filtro, retorna a lista filtrada

        return fotos.filter( foto => foto.titulo.toLowerCase().includes(digitado));
    }
}