import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { Http } from '@angular/http';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PokemonComponent,
        PokemonListComponent,
        PageNotFoundComponent
    ],
    providers: [HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
