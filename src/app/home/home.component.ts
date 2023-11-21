import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from '../toolbar/toolbar.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
