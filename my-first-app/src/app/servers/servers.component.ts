import { Component, OnInit } from '@angular/core';
// import { ngModel } from '@angular/forms'
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
  // .mycustomp 
  // { color:green;
  // }
  // `]
})
export class ServersComponent implements OnInit {
makemeoffline:boolean=false;
inpStringText:string="initialText";
btnclickmsg:string="i am not clicking";
servers:string[]=["server1","server2"];
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
    this.setbooleanstatus();
    this.btnclickmsg="i was clicked";
    this.servers.push((new Date()).getDate().toString());
    return this.btnclickmsg;
    
    // this.getColor();
  }

textInput(event:Event){
  console.log(event);
this.inpStringText= (<HTMLInputElement>event.target).value
}
getColor(){
  if(this.inpStringText==="initialText")
  return "brown";
  else
  return "yellow";
}

setbooleanstatus(){
    if(this.makemeoffline===true)
    this.makemeoffline=false;
    else
    this.makemeoffline=true;
  }
}

