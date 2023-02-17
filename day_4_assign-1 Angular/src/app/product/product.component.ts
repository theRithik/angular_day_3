import { Component, OnInit } from '@angular/core';
import { Employee } from './color';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor(){}

inputValue:any="rithik"
name:string="edureka"
value= "edit"


employees: Employee[]=[
  {

  id:1,
  fname:"Rithik",
  lname:"Kuvvarapu",
  salary:50000,
  dob:"18-9-2001",
  email:"rithik@gmail.com"
},
{

  id:2,
  fname:"Rithik",
  lname:"Kuvvarapu",
  salary:50000,
  dob:"06-10-2003",
  email:"rrrrr@gmail.com"
},
{

  id:3,
  fname:"Rithik",
  lname:"kuvvarapu",
  salary:50000,
  dob:"10-11-2001",
  email:"chocolate@gmail.com"
}

]

ngOnInit():void{

}
onClick(){
  this.value="submit"
  console.log("sumbit")
}
onClick2(){
  this.value="edit"
  console.log("edit")
}


}
