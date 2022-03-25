import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  imports: [  //son otros modulos
    CommonModule,
    AuthRoutingModule,
    SharedModule
    
  ],
  declarations: [LoginPageComponent] //Componentes, pipes y directivas
})
export class AuthModule { }
