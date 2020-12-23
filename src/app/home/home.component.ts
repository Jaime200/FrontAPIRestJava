import { Component, OnInit } from '@angular/core';
import { InfoApiService } from '../service/info-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'FrontApiRestJava';
  public dataItunesArtist:any;
  public dataTvShow:any
  public msg:string= "";
  constructor(
    private _InfoApiService:InfoApiService
  ){

  }

  ngOnInit() {
    this.getInfoApi("");
  }

  getInfoApi(termino:string){
    if(termino.length >0){
      this._InfoApiService.getInfoApi(termino).subscribe(
        (resp:any) =>{
          this.msg="";
          this.dataItunesArtist = resp['resultItunes']['results'];
          this.dataTvShow =  resp['resultTvmaze'];
  
          console.log(this.dataTvShow)
        },
        (error) => {
          console.log(error)
        }
      )
    }else{
      this.msg="Realice una búsqueda"
    }
    
  }

  buscaTermino(termino){
    this.getInfoApi(termino);
  }
}
