import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IConfiguracao } from '#core/interfaces/configuracoes.interface';
import { ConfiguracoesService } from '#features/configuracoes/services/configuracoes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-config-form',
  templateUrl: './config-form.component.html',
  styleUrls: ['./config-form.component.scss']
})
export class ConfigFormComponent implements OnInit{

  configForm:FormGroup = this.formBuilder.group({
    eOrdemExibicaoId:[null,Validators.required],
    quantAvisosExibicao:[null,Validators.required],
    diasParaExcluir:[null,Validators.required],
    tempoExibicao:[null,Validators.required],
    texto1:[''],
    texto2:[''],
    texto3:[''],
    texto4:[''],
  })



  constructor(private readonly configService:ConfiguracoesService,
    private readonly formBuilder:FormBuilder){
    
  }
  ngOnInit(): void {
   this.carregarForm()
  }
  carregarForm(){
this.configService.getConfiguracoes().subscribe({
      next:(response) =>{
        this.configForm.patchValue({
          eOrdemExibicaoId:response.eOrdemExibicaoId,
          quantAvisosExibicao:response.quantAvisosExibicao,
          diasParaExcluir:response.diasParaExcluir,
          tempoExibicao:response.tempoExibicao,
          texto1: response.texto1 !== 'null' ? response.texto1 : '',
          texto2: response.texto2 !== 'null' ? response.texto2 : '',
          texto3: response.texto3 !== 'null' ? response.texto3 : '',
          texto4: response.texto4 !== 'null' ? response.texto4 : '',
        })
       
        this.value=response
      },
    
    })
  }
  value!: IConfiguracao

  isLoading:boolean=false
  buttonsVisible: { diasParaExcluir: boolean; quantAvisosExibicao: boolean; tempoExibicao: boolean } = { diasParaExcluir: false, quantAvisosExibicao: false, tempoExibicao: false };
  
  increment(inputNome: keyof IConfiguracao,nome:string) {
    
    (this.value[inputNome] as number )+=1
    this.configForm.get(nome)?.setValue(this.value[inputNome])
    console.log(this.value[inputNome])
  }

  decrement(inputNome: keyof IConfiguracao,nome:string) {
    if ((this.value[inputNome] as number) > 1) {
      (this.value[inputNome] as number)-=1
      console.log(this.value[inputNome],nome)
      this.configForm.get(nome)?.setValue(this.value[inputNome])
    }
  }

  showButtons(type: keyof typeof this.buttonsVisible) {
    this.buttonsVisible[type] = true;
  }

  hideButtons(type:keyof typeof this.buttonsVisible) {
    this.buttonsVisible[type] = false;
  }

  Salvar(){
    const formData = new FormData();
  Object.keys(this.configForm.controls).forEach(key => {
    const value = this.configForm.get(key)?.value;
      formData.append(key, value);
      console.log(key, value);
    
    
  });
  
  formData.append('ordemExibicao','2')
   this.configService.putConfiguracoes(formData).subscribe({
next:()=>{
  Swal.fire({
    title: "Concluído!",
    text: "Atualizações concluídas com sucesso!",
    icon: "success"
  });

},
error: response => {
  if (response.status === 401) {
    return;
  }

  const message = response.error['erros'];
  Swal.fire({
    title: 'Oops...',
    text: message,
    icon: 'error',
    confirmButtonColor: '#2F9E41',
  }).then();
},
   })
  }
  
}

