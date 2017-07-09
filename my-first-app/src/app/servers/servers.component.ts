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
makemeoffline:boolean=false;
  constructor() { 
setTimeout(()=> {
  this.makemeoffline=true;
}, 2000);

  }

  ngOnInit() {
  }

  getmakemeoffline(){
    if(this.makemeoffline){
      return " i am  clickable";
    }else{
      return " i am not clickable";
    }
  }

}

