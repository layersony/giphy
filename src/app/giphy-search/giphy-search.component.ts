import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giphy-search',
  templateUrl: './giphy-search.component.html',
  styleUrls: ['./giphy-search.component.css']
})
export class GiphySearchComponent implements OnInit {

  search !: string;

  constructor() { }

  ngOnInit(): void {
  }

  searchgif(){
    console.log(this.search)
  }
}
