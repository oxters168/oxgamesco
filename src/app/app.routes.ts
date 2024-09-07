import { Routes } from '@angular/router'
// import { PrivacyPolicyOxshellComponent } from './privacy-policy-oxshell/privacy-policy-oxshell.component'
import { OxShellComponent } from './ox-shell/ox-shell.component'
import { LittleTrinketsComponent } from './little-trinkets/little-trinkets.component'

export const routes: Routes = [
  {path: '', redirectTo: '/ox-shell', pathMatch: 'full'},
  {path: 'ox-shell', component: OxShellComponent},
	{path: 'little-trinkets', component: LittleTrinketsComponent},
  // {path: 'privacy-policy-oxshell', component: PrivacyPolicyOxshellComponent},
];
