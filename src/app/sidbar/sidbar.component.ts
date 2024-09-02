import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss']
})
export class SidbarComponent {

lang:any|null=localStorage.getItem('lang');
  constructor(public _TranslateService:TranslateService){
 
    _TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {
      // do something
      console.log(event.lang)
      this.lang=event.lang;
    });
  
  
}
  isSidebarVisible = true;

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  
  }
}
