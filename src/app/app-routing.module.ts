import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoDetailsComponent } from './component/todo-details/todo-details.component';

const routes: Routes = [
  { path:'tl',component:TodoListComponent },
  { path:'td',component:TodoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
