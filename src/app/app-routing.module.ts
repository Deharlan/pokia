import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/pokemons/1', pathMatch: 'full' },
    { path: 'pokemons', redirectTo: '/pokemons/1', pathMatch: 'full' },
    { path: 'pokemons/:id', component: PokemonListComponent },
    { path: 'pokemon/:id', component: PokemonComponent },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
