import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { OxShellComponent } from './ox-shell/ox-shell.component'
// import { PrivacyPolicyOxshellComponent } from './privacy-policy-oxshell/privacy-policy-oxshell.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    OxShellComponent,
    // PrivacyPolicyOxshellComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
