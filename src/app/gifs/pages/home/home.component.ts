import { Component, Input } from '@angular/core';
import { gifsService } from '../../services/gifs.service';
import {Gif} from '../../interfaces/gifs.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  constructor(private gifsService: gifsService){}
  get gifs(): Gif[]{
    return this.gifsService.getGifList;
  }

}
