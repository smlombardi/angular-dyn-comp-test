import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[slot2]',
})
export class Slot2Directive {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
