import { Routes } from '@angular/router'
import { PrivacyPolicyOxshellComponent } from './privacy-policy-oxshell/privacy-policy-oxshell.component'
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'privacy-policy-oxshell', component: PrivacyPolicyOxshellComponent},
];
