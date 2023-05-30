import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  constructor( private http: HttpClient){}
  ngOnInit(): void {
    let api = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
    this.http.get<any>(api).subscribe({
      next: (res) =>{
        console.log(res)
        this.pokemons = res.results;
      }
    })
  }
}
