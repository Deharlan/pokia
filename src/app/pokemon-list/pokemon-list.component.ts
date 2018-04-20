import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

    pokeList: any = [];
    loading: any = false;
    next: any;
    previous: any;

    constructor(
        private http: Http,
        private route: ActivatedRoute
    ) {
        this.route.params.subscribe(params => {
            let pageID: any = parseInt(params['id'], 10);
            let limit: any = 12;
            if (pageID === 75) {
                limit = 4;
            }
            let offset = pageID - 1;
            if (pageID == null) {
                offset = 0;
            }
            if (offset === 74) {
                this.next = false;
            } else {
                this.next = pageID + 1;
            }
            if (pageID > 1) {
                this.previous = pageID - 1;
            } else {
                this.previous = false;
            }
            const page = (offset * 12);
            console.log(pageID, page, this.previous, this.next);

            http.get('https://pokeapi.co/api/v2/pokemon/?limit=' + limit + '&offset=' + page)
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
                this.loading = true;
                console.log(data);
            });
        })
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
