import { Component, OnInit } from '@angular/core';
import { InfoApiService } from './service/info-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontApiRestJava';
  public dataItunesArtist:any;
  constructor(
    private _InfoApiService:InfoApiService
  ){

  }

  ngOnInit() {
    this._InfoApiService.getInfoApi("Jac").subscribe(
      (resp:any) =>{
        console.log(resp)
        this.dataItunesArtist = resp['resultItunes']['results'];
      },
      (error) => {
        console.log(error)
      }
    )
  }
}
