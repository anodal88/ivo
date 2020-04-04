import { NgModule } from '@angular/core';
import { PreventDefaultDirective } from './directives/prevent-default.directive';

@NgModule({
  declarations: [PreventDefaultDirective],
  exports: [PreventDefaultDirective]
})
export class BaseDirectivesModule { }
