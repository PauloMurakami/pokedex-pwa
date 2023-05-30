import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { IPokemonTs } from 'src/interfaces/IPokemon';


@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {

  constructor(  private http: HttpClient) { }
  @Input() pokemon: any;
  pokemonFiltrado!: IPokemonTs;
  typeFiltredFirst!: string;
  loading = true;
  ngOnInit(): void {
    let api = this.pokemon.url
    this.http.get<any>(api).subscribe({
      next: (res) =>{
        this.loading = false
        this.pokemonFiltrado = res;
        this.pokemonFiltrado.name = this.pokemonFiltrado.name[0].toUpperCase() + this.pokemonFiltrado.name.substring(1)
        this.typeFiltredFirst = this.pokemonFiltrado.types[0].type.name
      }
    })
  }

}
