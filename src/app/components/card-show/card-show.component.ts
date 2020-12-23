import { Component, OnInit, Input } from '@angular/core';
import { TvShowModel } from '../../Model/TvShow.model';

@Component({
  selector: 'app-card-show',
  templateUrl: './card-show.component.html',
  styleUrls: ['./card-show.component.css']
})
export class CardShowComponent implements OnInit {
  @Input() TvShow: TvShowModel
  constructor() { }

  ngOnInit(): void {
    console.log(this.TvShow)
  }

}
