import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.scss']
})




export class ApprovalComponent implements OnInit {
  lang: any | null = localStorage.getItem('lang');

  constructor(public _TranslateService: TranslateService) {
    // Subscribe to language change events
    _TranslateService.onLangChange.subscribe((event: LangChangeEvent) => {
      console.log(event.lang);
      this.lang = event.lang;
    });
  }

  ngOnInit() {
    console.log('Component initialized');
  }

  simpleAlert() {
    this._TranslateService.get('alerts.simpleAlert.title').subscribe((res: string) => {
      Swal.fire({
        title: res,
        icon: 'info'
      });
    });
  }

  alertWithSuccess() {
    this._TranslateService.get(['alerts.alertWithSuccess.title', 'alerts.alertWithSuccess.text']).subscribe((translations: any) => {
      Swal.fire({
        title: translations['alerts.alertWithSuccess.title'],
        text: translations['alerts.alertWithSuccess.text'],
        icon: 'success',
        confirmButtonText: 'OK'
      });
    });
  }

  confirmBox() {
    this._TranslateService.get([
      'alerts.confirmBox.title',
      'alerts.confirmBox.text',
      'alerts.confirmBox.confirmButtonText',
      'alerts.confirmBox.cancelButtonText',
      'alerts.confirmBox.successTitle',
      'alerts.confirmBox.successText',
      'alerts.confirmBox.cancelTitle',
      'alerts.confirmBox.cancelText'
    ]).subscribe((translations: any) => {
      Swal.fire({
        title: translations['alerts.confirmBox.title'],
        text: translations['alerts.confirmBox.text'],
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: translations['alerts.confirmBox.confirmButtonText'],
        cancelButtonText: translations['alerts.confirmBox.cancelButtonText']
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: translations['alerts.confirmBox.successTitle'],
            text: translations['alerts.confirmBox.successText'],
            icon: 'success',
            confirmButtonText: 'OK'
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire({
            title: translations['alerts.confirmBox.cancelTitle'],
            text: translations['alerts.confirmBox.cancelText'],
            icon: 'info',
            confirmButtonText: 'OK'
          });
        }
      });
    });
  }

  approvalForm = new FormGroup({
    alignment: new FormControl('', Validators.required),
    project: new FormControl('', Validators.required),
    approvalType: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    submissionDate: new FormControl('', Validators.required),
    reviewDate: new FormControl('', Validators.required)
  });

  onSubmit() {
    if (this.approvalForm.valid) {
      console.log(this.approvalForm.value);
      this._TranslateService.get('alerts.alertWithSuccess.title').subscribe((title: string) => {
        Swal.fire({
          title: title,
          text: 'Your submission was successful.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      });
    } else {
      Swal.fire({
        title: 'لم يتم الحفظ',
        text: 'Please correct the errors in the form and try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.log('Form is not valid');
    }
  }
}

