import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Opposite]'
})
export class OppositeDirective {

  @Input() set Opposite(condition:Boolean){

    if(!condition){

      this.vcRef.createEmbeddedView(this.templateRef)

    }
    else{
      this.vcRef.clear();

    }

  }

  constructor(private templateRef: TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
