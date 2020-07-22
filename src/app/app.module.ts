import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { PostComponent } from './components/post/post.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BookComponent } from './components/book/book.component';
import { DetailComponent } from './components/book/detail/detail.component';
//import { CompanyModule } from './company/company.module';

@NgModule({
    imports: [
        BrowserModule,        
        appRoutingModule, 
        //CompanyModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        AdminComponent,
        PostComponent,
        EditComponent,
        AddComponent,
        PagenotfoundComponent,
        ContactComponent,
        GalleryComponent,
        BookComponent,
        DetailComponent,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { };