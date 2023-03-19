import { Component, OnInit } from '@angular/core';
import { Libro } from './Libro';

@Component({
  selector: 'app-libros-list',
  templateUrl: './libros-list.component.html',
  styleUrls: ['./libros-list.component.scss']
})
export class LibrosListComponent implements OnInit {
libros: Libro[]= [
 {
  titulo:"t1",
  autor:"a1",
  paginas:100,
  leidas:100,
  portada:"assets/img/principito.jpg",
  like:false,
} ,
{
  titulo:"t1",
  autor:"a1",
  paginas:170,
  leidas:0,
  portada:"assets/img/principito.jpg",
  like:true,
} ,
{
  titulo:"t1",
  autor:"a1",
  paginas:180,
  leidas:42,
  portada:"assets/img/principito.jpg",
  like:false,
} ,

]


constructor(){}

ngOnInit(): void {}
}
