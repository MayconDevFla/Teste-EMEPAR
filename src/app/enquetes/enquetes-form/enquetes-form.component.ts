import { Component, OnInit } from '@angular/core';
import jQuery from 'jquery';
import { EnquetesService } from 'src/app/enquetes.service';
import { Enquete } from '../servicos/enquetes';

@Component({
  selector: 'app-enquetes-form',
  templateUrl: './enquetes-form.component.html',
  styleUrls: ['./enquetes-form.component.css']
})
export class EnquetesFormComponent implements OnInit {

  enquete: Enquete;

  errors: String[];

  votoSelecionado: string;

  mensagemSucesso: string;
  voto: number;

  constructor(
    private service: EnquetesService
  ) { 
    this.enquete = new Enquete();
  }

  ngOnInit(): void {
  }

  votar(){
    if (this.enquete.voto == 'fla'){
      this.voto = 1;
    }else if(this.enquete.voto == 'pal'){
      this.voto = 2;
    }else{
      this.voto = 3;
    }
      this.service.consultId(this.voto).subscribe( response => {
        if (this.enquete.id){
          this.enquete = response;
        this.enquete.quant_votos = this.enquete.quant_votos += 1;
        this.service.update(this.enquete).subscribe(response => {
          this.mensagemSucesso = 'Agradecemos pela sua votação.'
          this.resultado();
        }, errorResponse => {
          this.errors = errorResponse.error.errors;
        })
        }else{
          this.enquete.quant_votos = 1;
          this.service.insert(this.enquete).subscribe(response => {
            this.mensagemSucesso = 'Agradecemos pela sua votação.'
            this.resultado();
          }, errorReponse => {
            this.errors = errorReponse.error.errors;
          })
        }
      }, errorResponse => {
        this.errors = errorResponse.error.errors;
      })

    }

    resultado(){
      (function($){
      $("#edge_bar").css("width", "22%");
    })(jQuery);
    }

}
