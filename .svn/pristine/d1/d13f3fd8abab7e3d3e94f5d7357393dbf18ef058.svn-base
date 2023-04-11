import { Injectable, TemplateRef } from '@angular/core';
import { from, map, of, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


import {
  mergeMap,
  tap,
  finalize,
  shareReplay,
  catchError,
  delay,
} from 'rxjs/operators';
declare var $: any, moment: any, _: any, window: any, Swal: any;
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private router: Router, private toastrService: ToastrService) { }
  xmltojson(resp: any, tag: any){
    debugger;
return $.cordys.json.findObjects(resp, tag);
  }
  ajax(method: any, namespace: any, parameters: any){
    return new Promise((rev, rej) => {
      $.cordys.ajax({
        method: method,
        namespace: namespace,
        dataType: '* json',
        parameters: parameters,
        success: function success(resp: any) {
          rev(resp);
        },
        error: function error(e1: any, e2: any, e3: any) {
          rej([e1, e2, e3]);
        },
      });
    });
  }


  ajaxcordys(method: any, namespace: any, parameters: any, flag = true) {
    const that = this;
    debugger;
    return new Promise((rev, rej) => {
      if (flag === true) {
        that.start();
      }

      $.cordys.ajax({
        method: method,
        namespace: namespace,
        dataType: '* json',
        // isMock:true,
        parameters: parameters,
        //timeout: environment.timeout,

        success: function success(resp: any) {
          if (flag === true) {
            debugger;
            that.stop();
          }

          rev(resp);
        },
        error: function error(e1: any, e2: any, e3: any) {
          debugger;
          console.log('error=>', [e1, e2, e3]);
          if (flag === true) {
            that.stop();
            // Swal.fire({
            //   position: 'top-end',
            //   icon: 'error',
            //   title: e1.responseJSON.faultstring.text,
            //   showConfirmButton: false,
            //   timer: 1500,
            // });
            that.toastrService.error( e1.responseJSON.faultstring.text, '', { timeOut: 1500 });
            //console.log('error=>', e1.responseJSON.faultstring.text);
          }
          rej([e1, e2, e3]);
        },
      });
    });
  }
  goto(d: any) {
    this.router.navigateByUrl(d);
  }
  // get_local(data: any) {
  //   if (localStorage[data] != undefined) {
  //     return JSON.parse(localStorage[data]);
  //   } else {
  //     return '';
  //   }
  // }

  start() {
    $('body').append(`<div class='loader'></div>`);
  }
  ob_data = (d: any) => of(d);
  stop() {
    $('.loader').last().remove();
  }
  oa = (s:any) => (Array.isArray(s) ? s : [s]);

 getitem_local(key:any){
 
  return  window.localStorage.getItem(key);
 }
 setitem_local(key:any, value:any){
  window.localStorage.setItem(key, value)
 }
  remove_local(key:any){
    window.localStorage.removeItem(key);
  }

clear_local(){
  window.localStorage.clear();
}
validateEmail(emailAdress: any) {
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}
otoa(_:any) {
  return Array.isArray(_) ? _ : [_];
}
  }

