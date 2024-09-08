import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  updateStatus = new EventEmitter<string>();

  constructor(private logservice:LoggingService){}

  onAccountAdded(name: string, status: string) {
    this.accounts.push({name:name,status:status});
    this.logservice.StatusChanged(status);
  }

  onStatusChanged(id: number, Status: string) {
    this.accounts[id].status = Status;
    this.logservice.StatusChanged(Status);

  }
}
