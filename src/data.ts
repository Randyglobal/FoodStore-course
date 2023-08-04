// Importing the class Food and filling its content
import {Food}from './app/shares/models/food'
import { Tag } from './app/shares/models/tag'
export const sample_foods: Food[] = [
 {
    id: '1',
    name: 'chicken Rice',
    price: 9,
    tags: ['FastFood', 'Pizza'],
    favorite: true,
    stars: 3.9,
    imageUrl: '../../../assets/img/Rice-chicken.jpeg',
    origins: ['Cameroon','Nigeria'],
    cookTime: '30-40'
 },
 {
    id: '2',
    name: 'Thieboudienne',
    price: 5,
    tags: ['SlowFood'],
    favorite: false,
    stars: 2.9,
    imageUrl: '../../../assets/img/Thieboudienne.jpg',
    origins: ['Nigeria'],
    cookTime: '30-40'
 },
 {
    id: '3',
    name: 'Efo Vegitables',
    price: 12,
    tags: ['FastFood'],
    favorite: true,
    stars: 4.1,
    imageUrl: '../../../assets/img/EfoVegetable.jpg',
    origins: ['Cameroon','Nigeria','Ghana','Congo'],
    cookTime: '40-50'
 },
 {
    id: '4',
    name: 'Roasted Fish',
    price: 7,
    tags: ['FastFood', 'Pizza'],
    favorite: true,
    stars: 3.4,
    imageUrl: '../../../assets/img/RoastFish.jpeg',
    origins: ['Cameroon','Nigeria','Asia','USA'],
    cookTime: '20-30'
 },
 {
    id: '5',
    name: 'Plantain Stew',
    price: 9,
    tags: ['SlowFood', 'Pizza'],
    favorite: false,
    stars: 3.9,
    imageUrl: '../../../assets/img/plantain-stew.jpeg',
    origins: ['Cameroon','Nigeria'],
    cookTime: '30-40'
 },
 {
    id: '6',
    name: 'Eru',
    price: 11,
    tags: ['Fish'],
    favorite: true,
    stars: 5.9,
    imageUrl: '../../../assets/img/Eru.png',
    origins: ['Cameroon'],
    cookTime: '50-60'
 },
]

export const sample_tags: Tag[] =[
   {name: 'All', count:6},
   {name: 'FastFood', count:3},
   {name: 'Fish', count:1},
   {name: 'SlowFood', count:2},

]
// ! means requied, ? means optional