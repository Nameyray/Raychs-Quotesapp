export class Quotes {
  id: number;
  name: string;
  quote: string;
  author: string;
  datePosted: Date;
  upvotes!: number;
  downvotes!: number;

  constructor(id:number,  name:string, quote:string,  author:string,  datePosted: Date,  upvotes:number,  downvotes:number){
  this.id = id;
  this.name = name;
  this.quote = quote;
  this.author = author;
  this.datePosted = datePosted;
  upvotes= upvotes;
  downvotes= downvotes;
  }
}
