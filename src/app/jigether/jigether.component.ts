import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from '../toolbar/toolbar.component'

@Component({
  selector: 'app-jigether',
  standalone: true,
  imports: [
		CommonModule,
		ToolbarComponent
	],
  templateUrl: './jigether.component.html',
  styleUrl: './jigether.component.scss'
})
export class JigetherComponent {

}
