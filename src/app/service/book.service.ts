import { Injectable } from '@angular/core';
import { Book } from '../inerface/book';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  BOOK: Book[] = [
    { id: 1, name: 'Angular 9', detail: 'This is Angular 9 Book', price: 199 },
    { id: 2, name: 'React', detail: 'This is React Book', price: 299 },
    { id: 3, name: 'TypeScript', detail: 'This is TypeScript Book', price: 399 }
  ]


  BOOKLIST = Observable.of(this.BOOK)
  BookToDisplay = this.BOOK.concat({ id: 4, name: 'JavaScript', detail: 'This is JavaScript Book', price: 499 })

  //BOOKLIST:Book[] = this.BOOK.concat({ id: 4, name: 'JavaScript', detail: 'This is JavaScript Book', price: 499 })

  constructor() { }

  getAllBook(): Observable<Book[]> {
    //return Observable.of(this.BOOK)
    return Observable.of(this.BookToDisplay)
  }

  getBookById(id:number): Observable<Book>{
    //return this.getAllBook().map(books=>books.find(book=>book.id==id))
    return this.BOOKLIST.map(books=>books.find(book=>book.id==id))
  }
  
}
