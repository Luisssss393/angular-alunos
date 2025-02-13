import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = "Sistema Alunos Proway"

  listaAlunos = [
    {
      imagem: "https://i.pinimg.com/originals/92/cc/14/92cc14189f199ca857cf7b217bf3304c.jpg",
      nome : "Mano aleatorio",
      curso :  "Angular",
      matricula:  75936,
      email : "Aleatorio@Proway.com",
      status :  true,
    },
    {
      imagem: "https://tse1.mm.bing.net/th?id=OIP.OZKO9x9foW8sUQMbThgqqwHaMw&pid=Api&P=0&h=180",
      nome :"Homer Simpson",
      curso :"JavaScript",
      matricula: 12345,
      email :"Homer@Proway.com",
      status :  false,
    },
    {
      imagem: "http://2.bp.blogspot.com/-EP2HBz9grRI/U2_kW4OdGeI/AAAAAAAAIr4/kJKj8A0fZUc/s1600/edward-scissorhands.jpg",
      nome :"Edward Mãos de Tesoura",
      curso :"Banco de Dados",
      matricula: 54321,
      email :"Edward@Proway.com",
      status :  true,
    }
  ];


}
