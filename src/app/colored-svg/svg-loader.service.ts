// written by Claude 3.5 Sonnet
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SvgLoaderService {
  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) {}

  loadSvg(url: string): Observable<SVGElement> {
    return this.http.get(url, { responseType: 'text' }).pipe(
      map(svgContent => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgContent, 'image/svg+xml');
        const svgElement = svgDoc.querySelector('svg');
        
        if (!svgElement) {
          throw new Error('Loading SVG failed: No SVG element found');
        }

        this.removeColorAttributes(svgElement);
        this.removeStyleTag(svgElement);

        return svgElement;
      }),
      catchError(error => {
        console.error('Error loading SVG:', error);
        return of(this.createPlaceholderSVG());
      })
    );
  }

  private removeColorAttributes(element: Element) {
    const colorAttributes = ['fill', 'stroke', 'color', 'stop-color', 'flood-color', 'lighting-color'];
    colorAttributes.forEach(attr => {
      element.removeAttribute(attr);
    });

    // Remove any style attribute
    const style = element.getAttribute('style');
    if (style) {
      const newStyle = style.split(';')
        .filter(s => !colorAttributes.some(attr => s.trim().startsWith(attr)))
        .join(';');
      if (newStyle) {
        element.setAttribute('style', newStyle);
      } else {
        element.removeAttribute('style');
      }
    }

    // Recursively process child elements
    element.childNodes.forEach(child => {
      if (child instanceof Element) {
        this.removeColorAttributes(child);
      }
    });
  }

  private removeStyleTag(svg: SVGElement) {
    const styleTags = svg.getElementsByTagName('style');
    for (let i = styleTags.length - 1; i >= 0; i--) {
      styleTags[i].parentNode?.removeChild(styleTags[i]);
    }
  }

  private createPlaceholderSVG(): SVGElement {
    const svg = this.document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '50');
    svg.setAttribute('height', '50');
    svg.setAttribute('viewBox', '0 0 50 50');
    
    const rect = this.document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '50');
    rect.setAttribute('height', '50');
    rect.setAttribute('fill', '#cccccc');
    
    svg.appendChild(rect);
    return svg;
  }
}