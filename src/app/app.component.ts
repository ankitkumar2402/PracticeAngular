import { Component } from '@angular/core';

@Component({
  selector: 'sm-root',
  template: `
  <div> {{title}} </div>
  <div [innerText]='title2'></div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Property Binding using Intrpolation';
  title2 = 'Property Binding using []'
  
}
