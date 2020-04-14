import { RemoveTagDirective } from './remove-tag.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PreventDefaultDirective} from './prevent-default.directive';
import {By} from '@angular/platform-browser';

@Component({
  template: `<div class="row" ivoRemoveTag ><p>Test</p></div>` })
export class WrapperComponent {}

describe('PreventDefaultDirective', () => {
  let component: WrapperComponent;
  let fixture: ComponentFixture<WrapperComponent>;
  let p: HTMLParagraphElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        WrapperComponent,
        RemoveTagDirective
      ]
    });

    fixture = TestBed.createComponent(WrapperComponent);
    component = fixture.componentInstance;
    p = fixture.debugElement.query(By.css('p')).nativeElement;
    fixture.detectChanges();
  });

  it('should remove the directive host and keep the children', () => {
    expect(fixture.debugElement.nativeElement.innerHTML).toBe(p.outerHTML);
  });
});

