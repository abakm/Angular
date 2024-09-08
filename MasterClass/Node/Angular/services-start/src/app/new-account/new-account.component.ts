import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {
  constructor(private logservice: LoggingService, private accountservice : AccountService){

    this.accountservice.updateStatus.subscribe(
      (status:string)=>alert("new status :"+status)


    );
   }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountservice.onAccountAdded(accountName,accountStatus);
    // this.logservice.StatusChanged(accountStatus)
   
  }
}
