import { PreventDefaultDirective } from './prevent-default.directive';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<a class="link"
href="https://google.com"
ivoPreventDefault
[stopPropagation]="stopPropagation">Click</a>` })
export class WrapperComponent {
  stopPropagation: boolean;
}

describe('PreventDefaultDirective', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let link: HTMLAnchorElement;
  let event: Event;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        PreventDefaultDirective
      ]
    });

    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    link = fixture.debugElement.query(By.css('a.link')).nativeElement;
    event = new Event('click', null);
    fixture.detectChanges();
  });

  it('should prevent Click, but not propagation', () => {
    spyOn(event, 'preventDefault');
    spyOn(event, 'stopPropagation');
    link.dispatchEvent(event);
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).not.toHaveBeenCalled();
  });

  it('should stop propagation when @Input() is given', () => {
    component.stopPropagation = true;
    spyOn(event, 'stopPropagation');
    fixture.detectChanges();
    link.dispatchEvent(event);
    expect(event.stopPropagation).toHaveBeenCalled();
  });
});
