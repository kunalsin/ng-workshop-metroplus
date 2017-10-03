import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // << ------------------ >>
  // << PROPERTIES - START >>
  // << ------------------ >>
  navLinks: Array<object> = [
    {
      path: 'about',
      label: 'ABOUT ME'
    },
    {
      path: 'collection',
      label: 'MY COLLECTION'
    }
  ];
  // << ---------------- >>
  // << PROPERTIES - END >>
  // << ---------------- >>

  // << --------------- >>
  // << METHODS - START >>
  // << --------------- >>
  constructor() { }

  ngOnInit(): void {

  }
  // << ------------- >>
  // << METHODS - END >>
  // << ------------- >>
}
