import { Component } from '@angular/core';
import { gifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {


  constructor(private gifsService: gifsService){}
 // public history: string[] = this._gifsService.getHistory;

 get tags(){
  return this.gifsService.getHistory;
 }

 onSearch(oldTag:string): void{
  this.gifsService.searchTag(oldTag);
 }
}
