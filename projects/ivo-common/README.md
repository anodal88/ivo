# IvoBaseDirectives

This is a lib that contain some common needs i have found during my time developing angular applications, the library contains the following directives:
1. PreventDefaultDirective
2. RemoveTagDirective

## Description & Usage

* PreventDefaultDirective: Can be used in scenarios when you want to prevent the default behavior of the component to be able to handle by yourself 
   
    - `Ex: <a (click)="doSomething()" ivoPreventDefault href="#"></a>` 
   
    - `Another valid example is to stop event propagation Ex: <a (click)="doSomething()" [stopPropagation]="booleanValue" ivoPreventDefault href="#"></a>`

* RemoveTagDirective: Will be helpful for scenario when your UI/UX team do not remember you are working with Angular and the use child selectors to
 style your app, but as a good angular developer you know the component Tag will be in the DOM, this is the perfect scenario where this directive comes handy.
   
    - `Ex: <my-component ivoRemoveTag></my-component> the final result will be the content of the component without the TAG on the DOM so the 
    style provided will by you team will work` 
