import { Component } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.css'
})
export class DrawComponent {
  draw(num: number = 0){
    num = Math.floor((Math.random() * 60) + 1);
    alert(num);
  }
}
