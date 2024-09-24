import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CoreModule } from '#core/core.module';
import { LoginModule } from '#features/login/login.module';
import { ManagerModule } from '#features/manager/manager.module';
import { NoticesModule } from '#features/notices/notices.module';
import { SharedModule } from '#shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from '#core/guard/auth.guard';
import { AuthInterceptor } from '#core/interceptor/auth.interceptor';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    SharedModule,
    LoginModule,
    ManagerModule,
    NoticesModule,
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
