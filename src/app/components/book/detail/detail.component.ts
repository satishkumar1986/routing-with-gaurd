import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../service/book.service';
import { Book } from '../../../inerface/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  selectedBook:Book;

  bookList: Book[];

  constructor(private _bookService:BookService, private activatedRoute:ActivatedRoute) { 

    // Data Binding by Resove
    this.selectedBook =  this.activatedRoute.snapshot.data['bookObj']
   }

  ngOnInit(): void {    
    // Data Binding by snapshot way
    //this.getBookById(this.activatedRoute.snapshot.params.id);

     // Data Binding by observble way
    // this.activatedRoute.params.subscribe(params=>{
    //   this._bookService.getBookById(params.id).subscribe(res=>{
    //     this.selectedBook=res
    //   })
    // })
    this.getAllBook()
  }

  // getBookById(id:number){
  //   return this._bookService.getBookById(id).subscribe(res=>{
  //     this.selectedBook=res;
  //   })
  // }

  getAllBook() {
    this._bookService.getAllBook().subscribe(res => {
      this.bookList = res
    })
  }

}
