import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
//import 'animate.css';

@Component({
  selector: 'app-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;
  @Input()
  public alt: string="";

  public hasLoad: boolean = false;

  ngOnInit(): void {
    if(!this.url) throw new Error('Url property is required.');
  }


  onLoad(){
    console.log(this.url)
      this.hasLoad = true;
  }
}
