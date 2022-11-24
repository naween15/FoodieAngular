import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/serv/auth.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.auth.logout();
  }
}
