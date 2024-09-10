import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from '../toolbar/toolbar.component'
import { MatButtonModule } from '@angular/material/button'
import { MatTooltipModule } from '@angular/material/tooltip'

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
		CommonModule,
		ToolbarComponent,
		MatButtonModule,
		MatTooltipModule
	],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit, AfterViewInit {
	flexDirection: 'row' | 'column' = 'row'
	svgWidth = '0'
	svgHeight = '0'
	percentSize = '20%'

	ngOnInit() {
    this.updateFlexDirection()
  }

  ngAfterViewInit() {
    this.updateFlexDirection()
  }

  @HostListener('window:resize')
  onResize() {
    this.updateFlexDirection()
  }

  private updateFlexDirection() {
		const width = window.innerWidth
		const height = window.innerHeight
    const ratio = width / height
		console.log(`${width} / ${height} = ${ratio}`)

    this.flexDirection = ratio > 1 ? 'row' : 'column'
		this.svgWidth = ratio > 1 ? this.percentSize : `${height * 0.2}px`
		this.svgHeight = ratio > 1 ? `${width * 0.2}px` : this.percentSize
  }

	goToLink(url: string, inNewTab: boolean = true) {
		if (inNewTab)
			window.open(url, "_blank")
		else
			window.location.href = url
	}
}
