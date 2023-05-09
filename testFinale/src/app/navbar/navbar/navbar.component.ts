import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, throwError} from 'rxjs';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private elRef:ElementRef) { }
  div:any;
  ngOnInit(): void {
    const logged = localStorage.getItem('logged');
    if(logged !=null){
    }
    this.div = this.elRef.nativeElement.querySelector('#log');
    this.div.className = 'd-block';
    console.log(this.div)
  }

  Logged(){
    localStorage.setItem('logged', 'user');

  }

}
