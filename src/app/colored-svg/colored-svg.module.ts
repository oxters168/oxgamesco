import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ColoredSvgComponent } from './colored-svg.component'
import { HttpClientModule } from '@angular/common/http'
import { SvgLoaderService } from './svg-loader.service'

@NgModule({
  declarations: [ ColoredSvgComponent ],
  imports: [
    CommonModule,
		HttpClientModule
  ],
	exports: [ColoredSvgComponent],
  providers: [ SvgLoaderService ]
	// bootstrap: [ AppComponent ]
})
export class ColoredSvgModule { }
