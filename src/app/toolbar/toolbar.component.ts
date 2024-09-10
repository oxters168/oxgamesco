import { Component, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav'
import { Router } from '@angular/router'

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatTooltipModule,
		MatSidenavModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})

export class ToolbarComponent {
  isDarkMode = false
	@ViewChild('drawer')
	drawerRef!: MatDrawer

	@Input() title: string = ""

  constructor(private _router: Router) {
    const val = localStorage.getItem('isDarkMode')
    if (val) {
      this.setDarkMode(val === 'true')
    }
  }
  
	goto(page: Page) {
		console.log(page)
		this.drawerRef.close()
		switch (page) {
			case 'little-trinkets':
				this._router.navigateByUrl('/little-trinkets')
				break
			case 'ox-shell':
				this._router.navigateByUrl('/ox-shell')
				break
			case 'ox-board':
				this._router.navigateByUrl('/ox-board')
				break
			case 'rocho':
				this._router.navigateByUrl('/rocho')
				break
			case 'contact':
				this._router.navigateByUrl('/contact')
				break
		}
	}
  toggleDarkMode() {
    this.setDarkMode(!this.isDarkMode)
  }
  setDarkMode(onOff: boolean) {
    this.isDarkMode = onOff
    localStorage.setItem('isDarkMode', this.isDarkMode.toString())
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }
}

export type Page = 'ox-shell' | 'ox-board' | 'little-trinkets' | 'rocho' | 'contact'