import { Component, ElementRef, ViewChild } from '@angular/core';
import { SampleComponent } from './sample/sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title1 = 'This is title 1';
  title2 = 'This is title 2';

  cssClassListWarning = ['alert', 'alert-warning'];
  cssClassListInfo = ['alert', 'alert-info'];
}
