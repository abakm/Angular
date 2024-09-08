import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-clocktail',
  templateUrl: './clocktail.component.html',
  styleUrl: './clocktail.component.css'
})
export class ClocktailComponent {

  newServerName="";
  newServerContent=""

  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string, serverContent: string}>();

  @ViewChild('serverContentInput') serverContentInput:ElementRef;
 

  

  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName:nameInput.value, 
      serverContent:this.serverContentInput.nativeElement.value
    
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:nameInput.value, 
      serverContent:this.serverContentInput.nativeElement.value
    
    }) 
  }

}
