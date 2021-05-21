import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'; 

export const getdata = (data: { articles: any; })=>{
  return data.articles;
}

export interface Response {
  assignments: any;
}

@Component({
  selector: 'pega-mashup',
  templateUrl: './pega-mashup.component.html',
  styleUrls: ['./pega-mashup.component.css']
})
export class PegaMashupComponent implements OnInit {  
  assignments: any = [];
  caseID: string = '';
  caseData: any = {};
  
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.getAssignments().subscribe(data => {
      this.assignments = (data as Response).assignments;
    });
  }
  opencase(id: string) {
    this.caseID = id;
    this.dataService.getCaseData(id).subscribe((data: any) => {
      this.caseData = data;
    });
  }
  backtoworklist() {
    this.caseID = '';
    this.caseData = {};
  }

  contentCase() : Array<string> {
   return Object.keys(this.caseData.content);
  }
}