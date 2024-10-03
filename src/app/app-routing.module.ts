import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLayoutComponent } from '#core/layouts/common-layout/common-layout.component';
import { AuthGuard } from '#core/guard/auth.guard';
import { authAdminGuard } from '#core/guard/auth-admin.guard';


const routes: Routes = [
  {
    path: '',
    component: CommonLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/notices/notices.module').then(
            m => m.NoticesModule
          ),
      },
      {
        path: 'gerenciamento',
        canActivateChild: [authAdminGuard],
        loadChildren: () =>
          import('./features/manager/manager.module').then(
            m => m.ManagerModule
          ),
      },
       {
    path: 'configuracoes',
    canActivateChild: [authAdminGuard],
    loadChildren: () =>
      import('./features/configuracoes/configuracoes.module').then(
        m => m.ConfiguracoesModule
      ),
  },
    ],
  },
  {
    path: 'avisos',
    loadChildren: () =>
      import('./features/avisos/aviso.module').then(m => m.AvisosModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then(m => m.LoginModule),
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
