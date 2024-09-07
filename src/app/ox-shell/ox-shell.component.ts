import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from '../toolbar/toolbar.component'

@Component({
  selector: 'ox-shell',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent
  ],
  templateUrl: './ox-shell.component.html',
  styleUrl: './ox-shell.component.scss'
})
export class OxShellComponent {

}
