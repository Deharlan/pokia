import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

    pokemon: any = [];
    pokeAfter: any = [];
    pokeBefore: any = [];

    constructor(
        http: Http,
        private route: ActivatedRoute
    ) {
        const id = this.route.snapshot.paramMap.get('id');

        http.get('https://pokeapi.co/api/v2/pokemon/' + id)
        .map(res => res.json())
        .subscribe(data => {
            this.pokemon = data;
            console.log(data);
        });
    }

    ngOnInit() {}

}
