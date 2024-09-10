import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from '../toolbar/toolbar.component'

@Component({
  selector: 'ox-shell',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarComponent,
		MatButtonModule,
  ],
  templateUrl: './ox-shell.component.html',
  styleUrl: './ox-shell.component.scss'
})
export class OxShellComponent implements OnInit, AfterViewInit {
	flexDirection: 'row' | 'column' = 'row'

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
  }

	goToLink(url: string){
    window.open(url, "_blank");
	}
}
