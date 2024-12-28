import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { gifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent {

  @ViewChild('input')
  public tagElement!: ElementRef<HTMLInputElement>;

  constructor(private gifService: gifsService){}

  onSearch(){
    const newTag: string = this.tagElement.nativeElement.value;
    this.gifService.searchTag(newTag);
    this.tagElement.nativeElement.value = "";
    console.log(newTag, this.gifService.getHistory);
  }

}
