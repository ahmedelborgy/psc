import { Component } from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  translate: any;
  lang:any|null=localStorage.getItem('lang');
 

constructor(public _TranslateService: TranslateService) {


  _TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {
    // do something
    console.log(event.lang)
    this.lang=event.lang;
  });


  
if(localStorage.getItem('lang') !=null){

  this.onChangeLang(this.lang);

}else{
  this.onChangeLang('en');

}


}
onChangeLang(lang:string){

console.log(lang);

localStorage.setItem('lang',lang);
 this._TranslateService.setDefaultLang(lang);

 this._TranslateService.use(lang);
    
   }

   


}
