import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    "type": 'blueprint',
    "name": "Test Server",
    "content": "This is just a test server!"
  }];

  onServerAdded(serverData:{serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onChangeFirst(){
    this.serverElements[0].name ="Changed";

  }
  onDeleteFirst(){
    this.serverElements.splice(0,1);

  }

 
}
