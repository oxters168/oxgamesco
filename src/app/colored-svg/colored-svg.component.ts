// written by Claude 3.5 Sonnet
import { Component, Input, OnInit, ElementRef, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';
import { SvgLoaderService } from './svg-loader.service';

@Component({
  selector: 'colored-svg',
  template: '<div #svgContainer></div>',
  styles: [':host { display: inline-block; }']
})
export class ColoredSvgComponent implements OnInit, OnChanges {
  @Input() svgUrl!: string;
  @Input() color: string = 'currentColor';
  @Input() width: string = 'auto';
  @Input() height: string = 'auto';

  private svgElement: SVGElement | null = null;

  constructor(
    private svgLoader: SvgLoaderService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.loadSvg();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.svgElement && (changes['color'] || changes['width'] || changes['height'])) {
      this.updateSvg();
    }
  }

  private loadSvg() {
    this.svgLoader.loadSvg(this.svgUrl).subscribe(svg => {
      const container = this.el.nativeElement.querySelector('div');
      container.innerHTML = '';
      
      this.svgElement = svg;
      this.updateSvg();
      this.renderer.appendChild(container, svg);
    });
  }

  private updateSvg() {
    if (this.svgElement) {
      this.updateSvgColor(this.svgElement);
      this.updateSvgSize(this.svgElement);
    }
  }

  private updateSvgColor(element: Element) {
    if (element instanceof SVGElement) {
      if (element.tagName.toLowerCase() !== 'svg') {
        this.renderer.setAttribute(element, 'fill', this.color);
        
        if (element instanceof SVGPathElement || element instanceof SVGLineElement || 
            element instanceof SVGPolylineElement || element instanceof SVGPolygonElement ||
            element instanceof SVGRectElement || element instanceof SVGCircleElement ||
            element instanceof SVGEllipseElement) {
          this.renderer.setAttribute(element, 'stroke', this.color);
        }

        if (element instanceof SVGTextElement || element instanceof SVGTSpanElement) {
          this.renderer.setStyle(element, 'fill', this.color);
        }
      }
    }

    element.childNodes.forEach(child => {
      if (child instanceof Element) {
        this.updateSvgColor(child);
      }
    });
  }

  private updateSvgSize(svg: SVGElement) {
    this.renderer.setAttribute(svg, 'width', this.width);
    this.renderer.setAttribute(svg, 'height', this.height);
  }
}