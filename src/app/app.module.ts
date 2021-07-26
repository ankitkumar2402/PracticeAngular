import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NextPageComponent } from './next-page.component';
import { FirstPageComponent } from './first-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { additionOfValueFormatter } from './additionOfValueFormatter.pipe';
import { NestedComponentComponent } from './nested-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NextPageComponent,
    FirstPageComponent,
    additionOfValueFormatter,
    NestedComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:"", component: FirstPageComponent},
     // {path: "next", component: NextPageComponent},
      {path: "next/:id", component: NextPageComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
