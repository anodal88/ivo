import { PreventDefaultDirective } from './prevent-default.directive';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({ template: `<a class="link" href="https://google.com" ivoPreventDefault>Click</a>` })
export class WrapperComponent { }

describe('PreventDefaultDirective', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let link: HTMLAnchorElement;

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
    fixture.detectChanges();
  });

  it('should prevent Click', () => {
    const event = new Event('click', null);
    spyOn(event, 'preventDefault');
    link.dispatchEvent(event);
    expect(event.preventDefault).toHaveBeenCalled();
  });
});
