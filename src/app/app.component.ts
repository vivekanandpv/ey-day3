import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('header')
  headerElement!: ElementRef<HTMLElement>;

  country = 'India';

  ngAfterViewInit() {
    this.headerElement.nativeElement.style.color = 'red';
    this.headerElement.nativeElement.style.border = '1px solid blue';
  }
}
