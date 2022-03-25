import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { LoginPageComponent } from './components/login-page/login-page.component';


const routes: Routes = [{
  path:'login', //http://localhost/auth
  component:LoginPageComponent
},{
  path:'register',
  component:LoginPageComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
