import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
 quotes: Quotes[]= [
  new Quotes (1, 'Rachel','if you conquer the fear you will fly','Ophrah Winfrey',new Date(2022,4,10), 0, 0),
  new Quotes (2, 'Gibelli','The mountain is you','Brianna',new Date(2022,4,15), 0, 0),
  new Quotes (3, 'Grace','Do not let a waiting season become a wasted season','Jordan Lee',new Date(2022,4,9), 0, 0),
  new Quotes (4, 'Sophy','He who began His work in you will be faithful enough to finish it','Chandler Moore',new Date(2022,4,9), 0, 0),
  new Quotes (5, 'Sharleen','You learn to do it after several atempts','Ashley Shirer',new Date(2022,4,9), 0, 0),
  new Quotes (6, 'Grace','Do not waste your waiting season by doing nothing','Priscilla Raine',new Date(2022,4,8), 0, 0)
 ]

 array = Number() = this.quotes.map(quote=>quote.upvotes)
  highest = Math.max(...this.array)
  constructor() { }

  ngOnInit(): void {
  }

}
