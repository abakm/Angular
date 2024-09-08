import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[Dropdown]'
})
export class DropdownDirective {

  @HostBinding("class.open") open = false;

  constructor() { }
  @HostListener('click') clicked(){
    this.open = !this.open;

}
}
