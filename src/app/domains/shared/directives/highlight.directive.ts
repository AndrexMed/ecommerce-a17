import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  element = inject(ElementRef);

  constructor() { }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red'
  }
}
