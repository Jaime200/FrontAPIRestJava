import { Component, Input, OnInit } from '@angular/core';
import { ItunesArtistModel } from '../../Model/ItunesArtist.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() ItunsArtist: ItunesArtistModel
  constructor() { }

  ngOnInit(): void {
  }

}
