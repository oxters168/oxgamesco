import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from '../toolbar/toolbar.component'

@Component({
  selector: 'app-little-trinkets',
  standalone: true,
  imports: [
		CommonModule,
		ToolbarComponent
	],
  templateUrl: './little-trinkets.component.html',
  styleUrl: './little-trinkets.component.scss'
})
export class LittleTrinketsComponent {

}
