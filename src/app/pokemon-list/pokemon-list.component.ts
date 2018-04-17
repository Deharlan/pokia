import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

    pokeList: any = [];

    constructor(private http: Http) {
        http.get('https://pokeapi.co/api/v2/pokemon/?limit=949')
        .map(res => res.json())
        .subscribe(data => {
            const result: any = data.results;
            for (let i = 0; i < result.length; i++) {
                const url = result[i].url.split('/');
                const id = url[6];
                result[i].id = id;
                // this.http.get('https://pokeapi.co/api/v2/pokemon/' + id)
                // .map(res => res.json())
                // .subscribe(pokeData => {
                //     console.log(pokeData);
                //     result[i].pokemon = pokeData;
                // });
            }
            this.pokeList = result;
            console.log(data);
        });
    }

    getPokemon(id: any) {
        this.http.get('https://pokeapi.co/api/v2/pokemon/' + id)
        .map(res => res.json())
        .subscribe(data => {
            console.log(data);
            return data;
        });
    }

    ngOnInit() {}

}
