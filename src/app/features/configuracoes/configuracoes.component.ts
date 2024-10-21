import { Component, OnInit } from '@angular/core';
import { CreateModalComponent } from './components/config-form/create-modal/create-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ConfiguracoesService } from './services/configuracoes.service';


@Component({
  selector: 'app-configuracoes',
 
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent{
  isLoading= false
  constructor(
    private readonly dialog:MatDialog,
    private readonly configService:ConfiguracoesService,
  ){

  }
  openModal(){
    const dialog = this.dialog.open(CreateModalComponent,
      {
        data:{
          title: 'Criar Categoria',
          icon:'add',
        }
      });   
  
  }
  }


