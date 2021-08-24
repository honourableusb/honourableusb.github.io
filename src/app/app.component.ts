import { Component } from '@angular/core';
// import {RouterLink} from '';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'website';



  public gotoHome(): void {
    console.log("abcdef");
  }


}
