import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-videosection',
  templateUrl: './videosection.component.html',
  styleUrls: ['./videosection.component.scss']
})
export class VideosectionComponent implements OnInit {

  @Input() vid:any ;

  @Input() formation:any;

  constructor() { }

  ngOnInit(): void {
  }

}
