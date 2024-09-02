import { Injectable } from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  textDir="ltr"

  constructor(public translate: TranslateService) { 

  
  }

}
