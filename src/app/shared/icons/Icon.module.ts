import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvisosMaracanauIconComponent } from './avisos-maracanau-icon/avisos-maracanau-icon.component';
import { CloseIconComponent } from './close-icon/close.component';
import { ExitIconComponent } from './exit-icon/exit-icon';
import { LogoIfceLoginIconComponent } from './logoIfce-icon/close.component';
import { LogoIFceIconComponent } from './logo-ifce-icon/logo-ifce';
import { PencilIconComponent } from './pencil-icon/vector-icon.component';
import { VectorIconComponent } from './vector-icon/vector-icon.component';

@NgModule({
  declarations: [
    AvisosMaracanauIconComponent,
    CloseIconComponent,
    ExitIconComponent,
    LogoIfceLoginIconComponent,
    LogoIFceIconComponent,
    PencilIconComponent,
    VectorIconComponent,
  ],
  imports: [CommonModule],
  exports: [
    AvisosMaracanauIconComponent,
    CloseIconComponent,
    ExitIconComponent,
    LogoIfceLoginIconComponent,
    LogoIFceIconComponent,
    VectorIconComponent,
    PencilIconComponent,
  ],
})
export class IconModule {}
