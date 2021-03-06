import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidateSessionGuard } from '@core/guards/validate-session.guard';
import { HomeChildOneComponent } from './home-child-one/home-child-one.component';
import { HomeChildTwoComponent } from './home-child-two/home-child-two.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  // {
  //   path:'auth',
  //   loadChildren: ()=>import('@modules/auth/auth.module').then((m)=>m.AuthModule)
  // },
  // {
  //   path:'task',
  //   loadChildren:()=>import('@modules/task/task.module').then((m)=>m.TaskModule)
  // }
  // {
  //   path:'',
  //   component:HomeComponent,
  //   children:[
  //     {
  //       path:'one',
  //       component:HomeChildOneComponent
  //     },{
  //       path:'two',
  //       component:HomeChildTwoComponent
  //     }
  //   ]
  // }
  {
   path:'auth',  //que se publica
   loadChildren:()=>import('@modules/auth/auth.module').then((m)=>m.AuthModule) 
  },
  {
    path:'task', //que sea privada
    loadChildren:()=>import('@modules/task/task.module').then((m)=>m.TaskModule),
    canActivate:[ValidateSessionGuard]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
