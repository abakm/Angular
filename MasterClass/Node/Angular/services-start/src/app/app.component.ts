import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent implements OnInit{

  accounts:{name:string, status:string}[] = [];
  onAccountAdded : Function;
  constructor(private accountservice : AccountService){};
  
  ngOnInit(){
    this.accounts = this.accountservice.accounts;
    this.onAccountAdded = this.accountservice.onAccountAdded;
  }
}
