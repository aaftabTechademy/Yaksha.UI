import { Component, OnInit } from '@angular/core';
import { DynamicScriptService } from '@app/service/api/dynamic-script.service';

@Component({
  selector: 'app-tabs-accordin',
  templateUrl: './tabs-accordin.component.html',
  styleUrls: ['./tabs-accordin.component.scss']
})
export class TabsAccordinComponent implements OnInit {

  constructor(
    private dynamicScriptService: DynamicScriptService
  ) { }

  ngOnInit(): void {
    this.dynamicScriptService.loadScripts();
  }

}
