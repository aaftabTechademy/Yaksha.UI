import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.css']
})
export class IframeComponent implements OnInit {
  modSessionURL: string;
  constructor(private cookieService: CookieService) {
   }

  ngOnInit() {
    console.log(this.cookieService.get('Abp.AuthToken'));
    this.modSessionURL = `https://mod-ui.azurewebsites.net/app/conference?token=aWQ9MkAjfiNAY29kZT00MTg5YThkYy0wOGM1LWMwNTItZmU2Ni03Y2FhOWM5MDA5MWI&authToken=${this.cookieService.get('Abp.AuthToken')}`;
    console.log('Token:' + this.modSessionURL);
  }
}
