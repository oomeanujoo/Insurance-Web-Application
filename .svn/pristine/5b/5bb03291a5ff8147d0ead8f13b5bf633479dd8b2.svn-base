import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from "../hero.service";
import { ToastrService } from 'ngx-toastr';
import { NgxOtpInputComponent, NgxOtpInputConfig } from 'ngx-otp-input';

declare var $: any;

@Component({
  selector: 'app-selectproduct',
  templateUrl: './selectproduct.component.html',
  styleUrls: ['./selectproduct.component.css']
})
export class SelectproductComponent implements OnInit {
  @ViewChild('ngxotp') ngxOtp: any;

  mySuperEvent(): void {
    this.ngxOtp.clear();
  }

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 4,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disable-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };
  otp:any =[1234, 2345, 3456];

name:any;
number:any;
pan:any;
  constructor( public heroService: HeroService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    let that =this;
    that.heroService.clear_local();
    let a= this.heroService.getitem_local('name');
    let b= this.heroService.getitem_local('number');
    let c= this.heroService.getitem_local('pan');
    console.log(a,'   ',b,'   ',c)

  }
  // open popup 1
  openmodel1(){
    let that = this;
    that.name ='';
that.number='';
that.pan='';
    $('#exampleModal2').modal('show');
  }

  userexuctandnot(){
    let that = this;
    this.heroService
    .ajax(
      'CheckIfUserExist',
      'http://schemas.cordys.com/EW_WSAppPackage',
      {
        name: that.name,
      contactno: that.number,
      pan: that.pan
      }

    )
    .then((resp) => {
      debugger;
      let usercheck = this.heroService.xmltojson(resp, 'CutomerdetailsNew');
     console.log('usercheck',usercheck);
     if(usercheck.length == 0 ){
      that.heroService.stop();
      that.toastrService.error("Invalid User", '', { timeOut: 1500 });

     }
     else {
      $('#exampleModal2').modal('hide');
      that.mySuperEvent();
      that.heroService.stop();
      $('#exampleModal3').modal('show');
      that.toastrService.success("OTP Send", '', { timeOut: 1500 });
      // this.heroService.stop();
     }

    });
  }
  // otp send after data fill
  otpsend(){
    debugger;
    let that = this;
 
    let checkVal = that.validation();
    if (checkVal) {
      this.heroService.start();
      $.cordys.authentication.sso
        .authenticate('sysadmin', 'sys@admin')
        .done((resp: any) => {
          that.userexuctandnot();
       // this.heroService.stop();
          // $('#exampleModal2').modal('hide');
          // $('#exampleModal3').modal('show');
        //  window.location.hash = '/dash';
        })
        .fail(function () {
          that.heroService.stop();
          console.log('fail');
        })
        .always(function () {

          console.log('always');
        });


   }
  
 
  }
pancheck:any = false;
panlenght(pan:any){
  if(pan.length==10){
    let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
 
    if (regex.test(pan) == true) {
      this.pancheck = true
        
    }
    else {
      this.toastrService.error('Please Enter Valid Format (ABCTY1234D)', '', { timeOut: 1500 });
      this.pancheck = false
        
    }
  }
}
isValidPanCardNo(panCardNo:any) {
  debugger;
    let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
 
    if (panCardNo == null) {
        return "false";
    }
 
    if (regex.test(panCardNo) == true) {
      this.pancheck = true
        return "true";
    }
    else {
      this.toastrService.error('Please Enter Valid Format (ABCTY1234D)', '', { timeOut: 1500 });
      this.pancheck = false
        return "false";
    }
}
// validation data fill
  validation() {
    let that = this;
    if (that.isEmpty(that.name)) {
      that.toastrService.error("Please Enter Name", '', { timeOut: 1200 });
      return false;
    }
    if (that.isEmpty(that.number)) {
      that.toastrService.error("Please Enter Mobile No.",  '', { timeOut: 1200 });
      return false;
    }
    
    if (that.isEmpty(that.pan)) {
      that.toastrService.error("Please Enter PAN No.", '', { timeOut: 1200 });
      return false;
    }
    return true;
  }
  isEmpty(value:any) {
    return (
      value == null || value == undefined || value == ""
    );
  }
// otp input fill
  handeOtpChange(value: string[]): void {
    debugger;
    console.log(value);
  }
otpflag = false;
  handleFillEvent(value: string): void {
    console.log(value);
    let that = this;
    debugger;
    if(value.length == 4){
      for(let i = 0; i < that.otp.length; i++){
if(that.otp[i] == value){
  that.otpflag = true;
  break;
}
  }
      if(that.otpflag == true){
        $('#exampleModal3').modal('hide');
        that.mySuperEvent();
        that.toastrService.success("login Successfully", '', { timeOut: 1000 });
        this.heroService.goto('/insuranceinfo');
        this.heroService.setitem_local('name', that.name);
        this.heroService.setitem_local('number', that.number);
        this.heroService.setitem_local('pan', that.pan);
      }
      else {
        that.toastrService.error("Invalid OTP", '', { timeOut: 1200 });
        that.mySuperEvent();
      }

    }
  }

  // otp model hide
  cloasemodel(){
    let that = this;
    debugger;
    $('#exampleModal3').modal('hide');
    that.mySuperEvent();
    that.name= '';
that.number= '';
that.pan= '';

  }


// input field number accpect
  keyPressNumbers(event:any) {
    var charCode = event.which ? event.which : event.keyCode;
    // Only Numbers 0-9
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  // first model close
  cleardata(){
    let that = this;
    that.name= '';
that.number= '';
that.pan= '';
  }
/// get set data
  click(){
this.heroService.setitem_local('ankit', 'aaaa')
  }
  click1(){
   let a= this.heroService.getitem_local('ankit')
    console.log(a)
  }
  resendotp(){
    let that = this
    that.toastrService.success("OTP Send Again", '', { timeOut: 1200 });
  }
}
