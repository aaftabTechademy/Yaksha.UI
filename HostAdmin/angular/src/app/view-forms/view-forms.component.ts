import { Component, OnInit } from '@angular/core';
import { DynamicScriptService } from '@app/service/api/dynamic-script.service';

@Component({
  selector: 'app-view-forms',
  templateUrl: './view-forms.component.html',
  styleUrls: ['./view-forms.component.scss']
})
export class ViewFormsComponent implements OnInit {

  constructor(
    private dynamicScriptService: DynamicScriptService
  ) { }

  ngOnInit(): void {
    this.dynamicScriptService.loadScripts();
  }

}