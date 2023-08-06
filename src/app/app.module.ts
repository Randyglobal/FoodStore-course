import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/partials/header/header.component';
import { HomeComponent } from './Component/pages/home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './Component/partials/search/search.component';
import { TagsComponent } from './Component/partials/tags/tags.component';
import { FoodPagesComponent } from './Component/pages/food-pages/food-pages.component';
import { CartPageComponent } from './Component/pages/cart-page/cart-page.component';
import { TitleComponent } from './Component/patials/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPagesComponent,
    CartPageComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
