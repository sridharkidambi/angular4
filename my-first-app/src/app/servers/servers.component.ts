import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template:`
  // <app-server></app-server><app-server></app-server>
  // <h1>I am from template</h1>
  // `,
  styleUrls: ['./servers.component.css']
  // styles:[`
  // p { color:dodgerblue;}
  // `
  // ]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
