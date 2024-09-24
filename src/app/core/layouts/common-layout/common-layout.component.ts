import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserPayload } from '#core/interfaces/login.interface';
import { AuthTokenService } from '#shared/services/auth/auth-token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.scss'],
})
export class CommonLayoutComponent implements OnInit {
  isMobileMenuOpen = false;
  protected isAdminAccount = false;
  protected usuario: UserPayload | null = null;

  constructor(
    private authTokenService: AuthTokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAdminAccount = this.isAdmin();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  logout() {
    Swal.fire({
      title: 'Deseja sair?',
      icon: 'question',
      iconHtml: '؟',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sair',
      showCancelButton: true,
      showCloseButton: true,
      confirmButtonColor: '#2F9E41',
      cancelButtonColor: '#CD191E',
      customClass: {
        icon: 'custom-swal-icon',
      },
      reverseButtons: true,
    }).then(result => {
      if (result.isConfirmed) {
        this.authTokenService.setToken(null);
        this.router.navigate(['/login']);
      }
    });
  }

  isAdmin() {
    this.usuario = this.authTokenService.decodePayloadJWT();
    if (this.usuario?.TipoUsuario === 'Administrador') return true;
    return false;
  }
}
