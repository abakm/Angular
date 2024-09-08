import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[BetterDirective]'
})
export class BetterDirectiveDirective  implements OnInit{
  @Input() defaultColor: string= 'transparent';
  // @Input() changeColor: string= 'blue'
  @Input('BetterDirective') changeColor: string;
  @HostBinding('style.backgroundColor') backgroundColor:string= this.defaultColor;
 
  constructor(private elementRef:ElementRef ,private renderer: Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    
  }
  @HostListener('mouseenter') mouseover(eventData:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.changeColor;

  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;

  }




}
