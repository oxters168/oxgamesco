import { Component, HostListener } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from '@angular/common'
import { ToolbarComponent } from '../toolbar/toolbar.component'

@Component({
  selector: 'app-rocho',
  standalone: true,
  imports: [
		CommonModule,
		MatButtonModule,
		ToolbarComponent,
	],
  templateUrl: './rocho.component.html',
  styleUrl: './rocho.component.scss'
})
export class RochoComponent {
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
