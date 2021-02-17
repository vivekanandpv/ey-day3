import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [AppComponent, SampleComponent, DemoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
