import { Component, OnInit } from '@angular/core';
import { BookService } from '../../service/book.service';
import { Book } from '../../inerface/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookList: Book[];

  constructor(private _bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBook()
  }

  getAllBook() {
    this._bookService.getAllBook().subscribe(res => {
      this.bookList = res
    })
  }

}
