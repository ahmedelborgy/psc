import { Component } from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'psc-task';
  lang:any|null=localStorage.getItem('lang');

  constructor( public  _TranslateService: TranslateService) {

  console.log(this.lang);
  _TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {
    // do something
    console.log(event.lang)
    this.lang=event.lang;
  });


}


onChangeLang(lang:string){

  
   }

}
