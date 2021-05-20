import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' // 

import { environment } from '../environments/environment' // import api
import { Giphy } from './giphy' // import class


@Injectable({
  providedIn: 'root'
})

export class GiphysearchService {

  giphy!: Giphy; // blueprint for creating gipfy instance
  giphyData: any = []
  newGiphyData : any = []

  constructor(private http: HttpClient) {
    this.giphy = new Giphy('', '', '', '', new Date(), '') // insitialize the blueprint
  }

  gettrendy() {
    this.giphyData = []
    this.giphyData.length = 0
    
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<any>(environment.apiUrl).toPromise().then(response => {
        for (var i = 0; i<response.data.length; i++){
          this.newGiphyData = new Giphy(response[i].title, response[i].type, response[i].username, response[i].url, response[i].trending_datetime, response[i].images)
          this.giphyData.push(this.newGiphyData)
          console.log(this.newGiphyData)
        }
        resolve()
      }), (error: any) =>{
        console.log('imekataa')
        reject(error)
      }
    })

    return promise;
  }
  
  getsearchResult(searchQuery:string){

    this.giphyData = []
    
    let promise = new Promise<void>((resolve, reject) => {
      this.http.get<any>(environment.searchapi+'&q='+searchQuery+'&limit=30&offset=0&rating=g&lang=en').toPromise().then(response=>{
                for (var i = 0; i<response.data.length; i++){
          this.newGiphyData = new Giphy(response[i].title, response[i].type, response[i].username, response[i].url, response[i].trending_datetime, response[i].images)
          this.giphyData.push(this.newGiphyData)
          console.log(this.newGiphyData)
        }
        resolve()
      }), (error: any) =>{
        console.log('imekataa')
        reject(error)
      }
    })
    return promise;
  }
}
