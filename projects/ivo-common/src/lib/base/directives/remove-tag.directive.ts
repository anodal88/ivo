import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ivoRemoveTag]'
})
export class RemoveTagDirective implements OnInit {


  constructor(private el: ElementRef<HTMLElement>, private renderer: Renderer2) {}

  ngOnInit(): void {
    const nativeElement = this.el.nativeElement;
    const parent = this.renderer.parentNode(this.el.nativeElement);
    this.el.nativeElement.childNodes.forEach(node => this.renderer.insertBefore(parent, node, nativeElement));
    this.renderer.removeChild(parent, nativeElement, true);

  }

}
