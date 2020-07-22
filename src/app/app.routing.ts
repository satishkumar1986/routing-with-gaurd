import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { PostComponent } from './components/post/post.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { CanGaurdGuard } from './components/auth/can-gaurd.guard';
import { CanChildGuard } from './components/auth/can-child.guard';
import { ContactComponent } from './components/contact/contact.component';
import { CanDeGuard } from './components/auth/can-de.guard';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BookComponent } from './components/book/book.component';
import { DetailComponent } from './components/book/detail/detail.component';
import { ResGuard } from './components/admin/res.guard';
import { CanloadGuard } from './components/auth/canload.guard';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin', component: AdminComponent, canActivate: [CanGaurdGuard] },
    {
        path: 'post', children: [
            { path: '', component: PostComponent },
            {
                path: '', canActivateChild: [CanChildGuard], children: [
                    { path: 'add', component: AddComponent },
                    { path: 'edit', component: EditComponent }
                ]
            }
        ]
    },
    { path: 'contact', component: ContactComponent, canDeactivate: [CanDeGuard] },
    { path: 'gallery', component: GalleryComponent, canDeactivate: [CanDeGuard] },
    {
        path: 'book', children: [
            { path: '', component: BookComponent },
            { path: 'detail/:id', component: DetailComponent, resolve: { bookObj: ResGuard } },
        ]
    },
    { path: 'company', loadChildren: () => import('../app/company/company.module').then(m => m.CompanyModule), canLoad:[CanloadGuard] },
    //{ path: '**', component: PagenotfoundComponent }
]

export const appRoutingModule = RouterModule.forRoot(routes);