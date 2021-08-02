import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { ListComponent } from './list/list.component';
import { MessagesComponent } from './messages/messages.component';
import { MemberListComponent } from './members/member-list/member-list.component';

const routs: Routes = [
  {path: 'members', component: MemberListComponent},
  { path: '', component: HomeComponent },
  { path: 'members/:id', component: MemberDetailComponent },
  { path: 'lists', component: ListComponent },
  { path: 'messages', component: MessagesComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routs)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
