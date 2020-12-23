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
  public dataTvShow:any
  constructor(
    private _InfoApiService:InfoApiService
  ){

  }

  ngOnInit() {
    this._InfoApiService.getInfoApi("Jac").subscribe(
      (resp:any) =>{
        
        this.dataItunesArtist = resp['resultItunes']['results'];
        this.dataTvShow =  resp['resultTvmaze'];

        console.log(this.dataTvShow)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  buscaTermino(termino){
    console.log(termino)
  }
}
