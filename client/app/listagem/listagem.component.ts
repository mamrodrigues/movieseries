import { Component } from '@angular/core';
import { FotoService } from '../foto/foto.service';
import { FotoComponent } from '../foto/foto.component';
import { PainelComponent } from '../painel/painel.component';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent {
    fotos: FotoComponent[] = [];
    mensagem: string = '';
    service: FotoService;



    //Pode Injetar assim, utilizando o @Inject do Angular
    //constructor(@Inject(Http) http){
    //}

    //OU ASSIM
    //utilizando a sintaxe de tipagem do próprio TypeScript
    //Esssa injeção por tipo, faz com que o import do Inject do Angular, seja desnecessário
    constructor(service: FotoService) {

        //RXJS React Xtension Java Script
        //Trabalhando de uma forma diferente das Promises que são usadas no Sencha e no Angular 1
        //stream.subscribe(function(res){
        //});

        //let stream = http.get('v1/fotos');
        //Além disso, pode-se usar a sintaxe da Arrow-Function, o que torna o código mais clean
        //stream.subscribe(res => {
        //   this.fotos = res.json();
        //});

        //Simplificando ainda mais a chamada, podemos:
        //1- Usar o MAP que foi importado no app.module
        //2- Utiliza ArrowFunctions
        //3- ArrowFunctions de uma única linha não precisam ter bloco de função e declarar o "return"

        /** http
        .get('v1/fotos')
        .map(res => res.json())
        .subscribe(fotos => {
            this.fotos = fotos;
        }); **/

        this.service = service;
        service.lista()
            .subscribe(
                fotos => { this.fotos = fotos },
                erro => { console.log(erro) }
            );
    }

    remove(foto: FotoComponent, painel: PainelComponent) {

        this.service
            .remove(foto)
            .subscribe(
                () => {
                    painel.fadeOut(() => {

                        let novasFotos = this.fotos.slice(0);
                        let indice = novasFotos.indexOf(foto);
                        novasFotos.splice(indice, 1);
                        this.fotos = novasFotos;
                        this.mensagem = 'Foto removida com sucesso';
                    }); 
                }, 
                erro => {
                    console.log(erro);
                    this.mensagem = 'Não foi possível remover a foto';
                }
            );

    }
}