import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, observable } from 'rxjs';

import {filter, map} from 'rxjs/Operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  private firstSubscription: Subscription;
  

  constructor() { }

  ngOnInit() {
    // this.firstSubscription=interval(1000).subscribe(count=>{
    //   console.log('Count %d',count);
    // })

//     const customObservable = new Observable(observer=>{
      
//       let count =0;
//       setInterval(()=>{
//         observer.next(count);
//         if(count == 10)
//           observer.complete();
//         // else if(count>3)
//         //   observer.error("Greater than 3");
        
         

//         count ++;

//       }, 1000);

//     });

//     customObservable.pipe(
      
//       filter((data:number)=>{

//         return data>0;

//       }),
      
//       map((data:number)=>{

//       return 'Round '+(data+1);

//     })).subscribe((count)=>{
//       console.log(count);

     
//     }, error=>{
//       console.log("error", error);
//       alert("Greater than 3")

//     }, ()=>{
//             alert("Completed");
//           }
//   );
//   }
// ;
  //   this.firstSubscription = customObservable.subscribe((count:number)=>{
  //     console.log(count);

     
  //   }, error=>{
  //     console.log("error", error);
  //     alert("Greater than 3")

  //   }, ()=>{
  //           alert("Completed");
  //         }
  // );
}

  // ngOnDestroy(){



  //   // this.firstSubscription.unsubscribe();
    
  // }

}
