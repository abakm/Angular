import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  StatusChanged(status:string){
    console.log('A logging status changed, new status: ' + status);
  }

  
}
