import { NgModule } from '@angular/core';
import { PreventDefaultDirective } from './directives/prevent-default.directive';
import {RemoveTagDirective} from './directives/remove-tag.directive';

@NgModule({
  declarations: [
    PreventDefaultDirective,
    RemoveTagDirective
  ],
  exports: [
    PreventDefaultDirective,
    RemoveTagDirective
  ]
})
export class BaseDirectivesModule { }
