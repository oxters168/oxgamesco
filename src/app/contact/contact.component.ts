import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from '../toolbar/toolbar.component'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
		CommonModule,
		ToolbarComponent
	],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
