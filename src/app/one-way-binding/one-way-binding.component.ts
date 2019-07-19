import { Component } from '@angular/core';

@Component({
  selector: 'app-one-way-binding',
  templateUrl: './one-way-binding.component.html',
  styleUrls: ['./one-way-binding.component.css']
})
export class OneWayBindingComponent{

employees: any[]=[
  {
    "no":"1",
    "fname":"Joe",
    "lname":"Blow",
    "age":69
  },
  {
    "no":"2",
    "fname":"Marcus",
    "lname":"Fernandes",
    "age":59
  },
  {
    "no":"3",
    "fname":"Hannah",
    "lname":"Baker",
    "age":49
  },
  {
    "no":"4",
    "fname":"Peter",
    "lname":"Parker",
    "age":29
  }
]
}
