import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrl: './draw.component.css'
})
export class DrawComponent {
  aux: any
  winningNumbers: number[] = []
  userNumbers: number[] = []

  choice(){
    if(this.userNumbers.length <= 10){
      if(this.aux >= 1 && this.aux <= 60){
        this.userNumbers.push(this.aux)
        this.aux = ''
      }
      else{
        alert("escolhe entre 1 a 60")
        this.aux = ''
      }
    }
    else{
      alert("somente 10 números")
    }
  }

  draw(){
    //make a list with all the numbers for draw
    const list: number[] = []
    for(let i = 1; i <= 60; i++){
      list.push(i)
    }
    //do the draw
    const winningNumbers: number[] = []
    for(let i = 0; i < 6; i++){
      const index = Math.floor(Math.random() *list.length) //do the draw with the numbers on the list
      const winningNumber = list.splice(index, 1)[0] //removes the drawn numbers to avoid repetion, and set on "winningNumber"
      winningNumbers.push(winningNumber) //set on a arrray
    }
    this.winningNumbers = winningNumbers; //associate on a global variabel
  }
}
