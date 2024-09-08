import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicDirective } from './basic_directive';
import { BetterDirectiveDirective } from './better-directive';
import { OppositeDirective } from './opposite.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicDirective,
    BetterDirectiveDirective,
    OppositeDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
