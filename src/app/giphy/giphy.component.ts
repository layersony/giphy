import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  search !: string;

  searchgif(){
    console.log(this.search)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
