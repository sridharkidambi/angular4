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
inpStringText:string="";
btnclickmsg:string="i am not clicking";
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
  btnClicked()
  {
    this.btnclickmsg="i was clicked";
    return this.btnclickmsg;
  }

textInput(event:Event){
  console.log(event);
this.inpStringText= (<HTMLInputElement>event.target).value
}
}

