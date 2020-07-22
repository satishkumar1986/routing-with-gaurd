import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../../inerface/book';
import { BookService } from '../../service/book.service';

@Injectable({
  providedIn: 'root'
})
export class ResGuard implements Resolve<Book> {

  constructor(private _bookService: BookService, private router: Router) { }

  resolve(router: ActivatedRouteSnapshot): Observable<Book> {

    let id = router.params.id

    return this._bookService.getBookById(id).map(book => {

      if (book) {
        return book;
      } else {
        alert('Record not found')
        this.router.navigate(['book'])
        return null
      }
      
    })

  }

}
