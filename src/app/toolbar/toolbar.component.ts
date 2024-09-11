import { Component, Input, ViewChild } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
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
		MatSidenavModule,
		MatListModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})

export class ToolbarComponent {
  isDarkMode = false
	@ViewChild('drawer')
	sidenavRef!: MatSidenav
	navItems: NavItem[] = [
		{ page: 'ox-shell', title: 'Ox Shell' },
		{ page: 'rocho', title: 'Rocho' },
		{ page: 'little-trinkets', title: 'Little Trinkets' },
		{ page: 'jigether', title: 'Jigether' },
		{ page: 'ox-board', title: 'Ox Board' },
		{ page: 'contact', title: 'Contact' },
	]

	@Input() title: string = ""

  constructor(private _router: Router) {
    const val = localStorage.getItem('isDarkMode')
    if (val) {
      this.setDarkMode(val === 'true')
    }
  }
  
	goto(page: Page) {
		console.log(page)
		this.sidenavRef.close()
		switch (page) {
			case 'little-trinkets':
			case 'ox-shell':
			case 'ox-board':
			case 'rocho':
			case 'jigether':
			case 'contact':
				this._router.navigateByUrl(`/${page}`)
				break
			default:
				console.warn(`Could not find page: ${page}`)
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

export type Page = 'ox-shell' | 'ox-board' | 'little-trinkets' | 'rocho' | 'jigether' | 'contact'
export type NavItem = { page: Page, title: string }