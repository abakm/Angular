import { Component, Input} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  constructor(private logservice: LoggingService, private accountservice: AccountService){}


  onSetTo(status: string) {
    this.accountservice.onStatusChanged(this.id, status)
    // this.logservice.StatusChanged(status);
    this.accountservice.updateStatus.emit(status);
  }
}
