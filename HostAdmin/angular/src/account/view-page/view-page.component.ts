import { Component, OnInit } from '@angular/core';
import { DynamicScriptService } from '@app/service/api/dynamic-script.service';

@Component({
  selector: 'app-view-page',
  templateUrl: './view-page.component.html',
  styleUrls: ['./view-page.component.scss']
})
export class ViewPageComponent implements OnInit {

  constructor(private dynamicScriptService: DynamicScriptService) { }

  ngOnInit(): void {
    this.dynamicScriptService.loadScripts();
  }
}