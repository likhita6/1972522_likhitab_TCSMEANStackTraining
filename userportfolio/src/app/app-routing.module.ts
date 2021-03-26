import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';

const routes: Routes = [
  {path:"",redirectTo:"loginpage",pathMatch:"full"},
  {path:"loginpage",component:LoginpageComponent},
  {path:"registrationpage",component:RegistrationpageComponent},
  {path:"portfolio",component:PortfolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }