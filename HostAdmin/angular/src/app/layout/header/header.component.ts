import { Component, OnInit } from '@angular/core';
import { DynamicScriptService } from '@app/service/api/dynamic-script.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dynamicScriptService: DynamicScriptService
  ) { }

  ngOnInit(): void {
    this.dynamicScriptService.loadScripts();
  }

}
