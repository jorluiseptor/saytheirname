import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import * as data from '../assets/data.json';
import { DetailsComponent } from './details/details.component.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  people: any = (data as any).default; // list of people that come from the assets/data.json file

  constructor(public dialog: MatDialog){}

  // open details
  openDialog(person: any){
    this.dialog.open(DetailsComponent, {
      data: person
    });
  }
}
