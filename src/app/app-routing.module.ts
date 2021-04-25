import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostComponent } from './post/post.component';
import { ProductsComponent } from './products/products.component';
import { UserComponent } from './user/user.component';
import { CommentComponent } from './comment/comment.component';
import { ProductwithDiscountComponent } from './productwith-discount/productwith-discount.component';
import { ProductwithOutDiscountComponent } from './productwith-out-discount/productwith-out-discount.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component'
import {NotesComponent} from './notes/notes.component'

const routes: Routes = [
  {path:'',redirectTo:'/homepage',pathMatch:'full'},
  {path: 'homepage', component: HomeComponent},
  {path:'productspage',component:ProductsComponent,
  children:
  [
    {path:'productwithDiscount',component:ProductwithDiscountComponent},
    {path:'productwithOutDiscount',component:ProductwithOutDiscountComponent}
  ]
  },
  {path: 'userspage', component:UserComponent},
  {path: 'postspage', component:PostComponent},
  {path: 'postspage/:id', component:CommentComponent},
  {path: 'registerpage', component:RegisterComponent},
  {path: 'loginpage', component:LoginComponent},
  {path: 'notespage', component:NotesComponent},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
