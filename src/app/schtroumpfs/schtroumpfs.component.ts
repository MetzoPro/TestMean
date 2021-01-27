import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SchtroumpfsService} from '../services/schtroumpfs.service';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';


@Component({
  selector: 'app-schtroumpfs',
  templateUrl: './schtroumpfs.component.html',
  styleUrls: ['./schtroumpfs.component.css'],
  animations: [
    trigger('schtroumpfsAnimation', [
      state('active', style({
        opacity: '1'
      })),
      transition('void => *', [
        style({transform: 'translateY(-100px)', opacity: '0'}),
          animate('1000ms ease-in-out')
      ])
    ])
  ]

})
export class SchtroumpfsComponent implements OnInit{

 /* values = '';
  onKey(event: any) {
    this.values = event.target.value;
  }*/

  input = {
    width: '360px',
    background: '#fff',
    'box-shadow': '0 6px 10px 0 rgba(0, 0, 0, .1)',
    border: '0',
    outline: '0',
    padding: '22px 18px'
  };
  public schtroumpfs;
  public modif = false;
  constructor(private SchtroumpfService: SchtroumpfsService, public auth: AuthService) {

  }

  ngOnInit() {
    this.getSchtroumpfs();

  }

  getSchtroumpfs(){
    this.SchtroumpfService.getSchtroumpfs()
      .subscribe(
        data => {this.schtroumpfs = data; },
        err => console.log(err)
      );
  }

  addSchtroumpf(value: any){
    const schtroumpf = value;
    console.log(this.schtroumpfs);
    this.SchtroumpfService.addSchtroumpf(schtroumpf)
      .subscribe(
        data => {
          console.log(this.schtroumpfs);
          this.getSchtroumpfs();
          return true;
        },

        error => {
          console.error('Erreur de sauvegarde');
          return Observable.throw(error);
        }

      );
  }

  deleteSchtroumpf(id){
    this.SchtroumpfService.deleteSchtroumpf(id)
      .subscribe(
        data => {
          this.getSchtroumpfs();
          return true;
        },
        err => console.log(err)
      );
  }

  updateSchtroumpf(id, value){
    const schtroumpf = value;
    this.modif = false;
    this.SchtroumpfService.updateSchtroumpf(id, schtroumpf)
      .subscribe(
        data => {
          this.getSchtroumpfs();
          return true;
        },
      );
  }

  getSchtroumpf(id){
    this.modif = true;
    this.SchtroumpfService.getSchtroumpfwithID(id)
      .subscribe(
        data => {
          this.schtroumpfs = data;
          return true;
        },
      );
  }
}
