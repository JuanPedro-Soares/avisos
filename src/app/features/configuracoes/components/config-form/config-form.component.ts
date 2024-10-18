import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IConfiguracao } from '#core/interfaces/configuracoes.interface';
import { ConfiguracoesService } from '#features/configuracoes/services/configuracoes.service';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss']
})
export class ConfigFormComponent {

  configForm:FormGroup = this.formBuilder.group({
    ordemExibicao:[null,Validators.required],
    quantidadeAvisos:[null,Validators.required],
    diaExcluir:[null,Validators.required],
    tempoExibicao:[null,Validators.required],
    texto1:[],
    texto2:[],
    texto3:[],
    texto4:[],
  })



  constructor(private readonly configService:ConfiguracoesService,
    private readonly formBuilder:FormBuilder){
    this.configService.getConfiguracoes().subscribe({
      next:(response) =>{
        this.configForm.patchValue({
          ordemExibicao:response.eOrdemExibicaoId,
          quantidadeAvisos:response.quantAvisosExibicao,
          diaExcluir:response.diasParaExcluir,
          tempoExibicao:response.tempoExibicao,
          texto1:response.texto1,
          texto2:response.texto2,
          texto3:response.texto3,
          texto4:response.texto4,
        })
        
        this.value=response
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
Form:any
  value!: IConfiguracao

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

