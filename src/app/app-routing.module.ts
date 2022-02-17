import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'home'},
  {path: 'home', component: HomepageComponent},
  {path: 'logon', component: UserAccountComponent}
  // {path:'signup',component: UserAccountComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
