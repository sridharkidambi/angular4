import { Component } from "@angular/core";

@Component({
    //  selector:"app-server",
    //  selector:"[app-server]",
     selector:".app-server",
     templateUrl:"./server.component.html"
 }
)
export class servercomponent{
age:number=34;
sex:string="male";

     getage(){
    return this.age;
    }

}