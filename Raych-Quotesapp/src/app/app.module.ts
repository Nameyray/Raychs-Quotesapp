import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './components/quotes/quotes.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { HighlightDirective } from './highlight.directive';
import { DatePipesDirective } from './date-pipes.directive';
import { DatePipe } from './date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesFormComponent,
    HighlightDirective,
    DatePipesDirective,
    DatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
