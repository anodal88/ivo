import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[ivoPreventDefault]'
})
export class PreventDefaultDirective {
  @Input() stopPropagation: boolean;

  @HostListener('click', ['$event'])
  onClick(event: any): void {
    event.preventDefault();
    if (this.stopPropagation) {
      event.stopPropagation();
    }
  }
}
