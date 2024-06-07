import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-todo-crud';

  list:any[]=[];
  addTask(item:string){
    this.list.push({id:this.list.length,name:item})
    console.log(this.list)
  }

  removeTask(id:number){
    this.list=this.list.filter(item=>item.id!==id)
  }
}
