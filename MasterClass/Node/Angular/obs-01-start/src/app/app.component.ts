import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  userActivated = false;
  constructor(private userService : UserService) {}

  ngOnInit() {
    this.userService.activatedEmitter.subscribe(activated=>{
      console.log(activated);
      this.userActivated = activated;
    })
  }
 
}
