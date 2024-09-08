import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

featureSelected = new EventEmitter<string>();

  @Output() onSelect(feature:string){

    this.featureSelected.emit(feature)
  }

}
