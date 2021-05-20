import { Component, OnInit } from '@angular/core';
import { GiphysearchService } from '../giphysearch.service';
import { Giphy } from '../giphy';


@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})

export class GiphyComponent implements OnInit {

  giphysearchService: GiphysearchService; //declaring the sservice


  constructor(giphysearchService:GiphysearchService) { 
    this.giphysearchService = giphysearchService // initializing the service
  }

  ngOnInit(): void {
    this.giphysearchService.gettrendy()
  }
}
