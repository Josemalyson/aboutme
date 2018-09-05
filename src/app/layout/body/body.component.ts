import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  apresentation = {
    tittle: "My live",
    content: "My professional life began when I was recruited to the army in 2008 and there I was able to know the area of technology starting in the area of linux server networks. In 2010 I started my degree in Computer Science at Unipê. In 2012 I participated in the software factory composed of students from the IT courses from there I went to the internship in the CREA-PB federal body of the Brazilian government being assigned to the technology area of the same. So in 2012 I was selected for the Phoebus Technology Company to be technical support working with Oracle PL / SQL and SqlServer. Then started my search for the development area where I had the first opportunity in Indra Brazil when I started my career as a developer in 2015, so I grew professionally and was invited to join the software development team of Stefanini in 2017. Today I always look for the better for my family trying to be the best and most committed professional in the company."
  };

  constructor() { }
  ngOnInit() {

  }

}
