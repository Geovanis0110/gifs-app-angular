import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interfaces/gifs.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class gifsService {
  private apiGiphyKey = 'kBLLZK3Bfkul6N0gSfzrLKTakAAZLI9E';
  private serverUrl = 'https://api.giphy.com/v1/gifs/';
  private _tagsHistory: string[] = [];
  private gifsList: Gif[] = [];

  constructor(private http: HttpClient) {
    this.loadGif();
  }


  get getHistory() {
    return [...this._tagsHistory];
  }

  get getGifList() {
    return [...this.gifsList];
  }

  loadGif(): void {
    if (localStorage.getItem("gifsHistory")) {
      this._tagsHistory = JSON.parse(localStorage.getItem("gifsHistory")!)
      if (this._tagsHistory.length !== 0) {
        this.searchTag(this._tagsHistory[0]);
      }
    }
  }
  organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  saveLocalStorage(): void {
    localStorage.setItem('gifsHistory', JSON.stringify(this._tagsHistory))
  }

  searchTag(tag: string): void {
    tag = tag.trim();
    if (tag) {
      this.organizeHistory(tag);
      const params: HttpParams = new HttpParams()
        .set('api_key', this.apiGiphyKey)
        .set('q', tag)
        .set('limit', 10);
      try {
        //this.gifsList=[];
        this.http.get<SearchResponse>(`${this.serverUrl}search`, { params })
        .subscribe(
            (resp) => {
              console.log(resp)
              this.gifsList = resp.data;
              console.log(this.gifsList)
            }
          );
      } catch (e) {
        console.log("hubo un error" + e);
      }
    }
  }

}



/* fetch('https://api.giphy.com/v1/gifs/search?api_key=kBLLZK3Bfkul6N0gSfzrLKTakAAZLI9E&q=valorant&limit=10')
        .then(resp=>resp.json())
        .then(data=>console.log(data));
 */
