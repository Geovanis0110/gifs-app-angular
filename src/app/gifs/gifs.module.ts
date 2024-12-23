import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './components/search/search.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomeComponent } from './pages/home/home.component';
import { GifsCardComponent } from './components/gifs-card/gifs-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SearchComponent,
    CardListComponent,
    HomeComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class GifsModule { }
