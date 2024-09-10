import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from '../toolbar/toolbar.component'

@Component({
  selector: 'app-ox-board',
  standalone: true,
  imports: [
		CommonModule,
		ToolbarComponent
	],
  templateUrl: './ox-board.component.html',
  styleUrl: './ox-board.component.scss'
})
export class OxBoardComponent {

}
