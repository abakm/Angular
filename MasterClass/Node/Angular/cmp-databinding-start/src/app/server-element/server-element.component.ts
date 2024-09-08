import { Component,OnInit, Input, ViewEncapsulation, SimpleChanges, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit{

  @Input() serverElement :{
    type: string,
    name: string,
    content: string
  };

@Input() name;

@ViewChild('heading', {static: true}) heading:ElementRef;
@ContentChild('paragraph',  {static: true}) paragraph: ElementRef;

  constructor(){
    console.log("SERVER COMPONENT CREATED");

  }
  ngOnInit(){
    console.log("NG SERVER COMPONENT CREATED");
    console.log("Heading:",this.heading.nativeElement.textContent);
    console.log("Paragraph:",this.paragraph.nativeElement.textContent);


  }
  ngOnChanges(changes: SimpleChanges){
    console.log("NG SERVER COMPONENT CHANGED");
    console.log(changes);

  }
  ngDoCheck(){
    console.log("NG SERVER COMPONENT DO check");
   

  }
  ngAfterContentInit(){
    console.log("NG SERVER COMPONENT AfterContentInit");
   

  }
  ngAfterContentChecked(){
    console.log("NG SERVER COMPONENT AfterContentChecked");
   

  }

  ngAfterViewInit(){
    console.log("NG SERVER COMPONENT AfterViewInit");
    console.log("Heading:",this.heading.nativeElement.textContent);
    console.log("Paragraph:",this.paragraph.nativeElement.textContent);

  }
  ngAfterViewChecked(){
    console.log("NG SERVER COMPONENT AfterViewChecked");
   

  }
  ngOnDestroy(){
    console.log("NG SERVER COMPONENT OnDestroy");
   

  }

}
