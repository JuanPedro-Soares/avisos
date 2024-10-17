import { IConfiguracao } from '#core/interfaces/configuracoes.interface';
import { ConfiguracoesService } from '#features/configuracoes/services/configuracoes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss']
})
export class ConfigFormComponent implements OnInit {

  constructor(private readonly configService:ConfiguracoesService){

  }
  value!: IConfiguracao
  ngOnInit(): void {
    this.configService.getConfiguracoes().subscribe({
      next:(response) =>{
        this.value=response
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
  isLoading:boolean=false
  buttonsVisible: { diasParaExcluir: boolean; quantAvisosExibicao: boolean; tempoExibicao: boolean } = { diasParaExcluir: false, quantAvisosExibicao: false, tempoExibicao: false };
  
  increment(inputNome: keyof IConfiguracao) {
    (this.value[inputNome] as number)+=1
  }

  decrement(inputNome: keyof IConfiguracao) {
    if ((this.value[inputNome] as number) > 1) {
      (this.value[inputNome] as number)-=1
    }
  }

  showButtons(type: keyof typeof this.buttonsVisible) {
    this.buttonsVisible[type] = true;
  }

  hideButtons(type:keyof typeof this.buttonsVisible) {
    this.buttonsVisible[type] = false;
  }


  
}

