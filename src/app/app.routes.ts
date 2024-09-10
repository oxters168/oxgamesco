import { Routes } from '@angular/router'
import { OxShellComponent } from './ox-shell/ox-shell.component'
import { LittleTrinketsComponent } from './little-trinkets/little-trinkets.component'
import { RochoComponent } from './rocho/rocho.component'
import { OxBoardComponent } from './ox-board/ox-board.component'
import { JigetherComponent } from './jigether/jigether.component'
import { ContactComponent } from './contact/contact.component'

export const routes: Routes = [
  {path: '', redirectTo: '/ox-shell', pathMatch: 'full'},
  {path: 'ox-shell', component: OxShellComponent},
	{path: 'little-trinkets', component: LittleTrinketsComponent},
	{path: 'rocho', component: RochoComponent},
	{path: 'ox-board', component: OxBoardComponent},
	{path: 'jigether', component: JigetherComponent},
	{path: 'contact', component: ContactComponent},
];
