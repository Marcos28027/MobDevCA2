import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor() { }

   doGet = () => {
    const options = {
    url: 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=20e4357d435b4f1e904a1018ffad5931',
     // url: 'https://newsapi.org/v2/top-headlines?country=ie&apiKey=20e4357d435b4f1e904a1018ffad5931',
     // headers: { 'X-Fake-Header': 'Max was here' },
      // params: { size: 'XL' },
    };
    return from(Http.get(options))
  };
  
}
