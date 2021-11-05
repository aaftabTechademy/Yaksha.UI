import { Component, OnInit } from '@angular/core';
import { DynamicScriptService } from '@app/service/api/dynamic-script.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(
    private dynamicScriptService: DynamicScriptService
  ) { }

  ngOnInit(): void {
    this.dynamicScriptService.loadScripts();
  }

}
