import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";
import { ToastrService } from 'ngx-toastr';
declare var $: any;
@Component({
  selector: 'app-policysummary',
  templateUrl: './policysummary.component.html',
  styleUrls: ['./policysummary.component.css']
})
export class PolicysummaryComponent implements OnInit {

  constructor(public heroService: HeroService,
    private toastrService: ToastrService) { }
  getuniuevlaue: any;
  ngOnInit(): void {
    let that = this;
    let a = this.heroService.getitem_local('name');
    let b = this.heroService.getitem_local('number');
    let c = this.heroService.getitem_local('pan');
    console.log(a, '   ', b, '   ', c)
    debugger;
    if (a == null && b == null && c == null) {
      this.heroService.goto('/');
    }
   else {
      that.userexuctandnot(a, b, c);
      that.getuniuevlaue = this.heroService.getitem_local('unquekey');
      console.log('that.getuniuevlaue', that.getuniuevlaue);
      that.TableData(that.getuniuevlaue);
    }

  }
  savedData: any = [
    {
      CustId: '',
      Name: '',
      Email: '',
      ContactNo: '',
      Pan: '',
      Address1: '',
      Address2: '',
      City: '',
      State: '',
      Pincode: '',
      Temp1: '',
      Temp2: '',
      Temp3: '',
      Temp4:'',
      Temp5:''
    }

  ];
  userexuctandnot(name: any, number: any, pan: any) {
    let that = this;
    // this.heroService
    //   .ajaxcordys(
    //     'CheckIfUserExist',
    //     'http://schemas.cordys.com/EW_WSAppPackage',
    //     {
    //       name: name,
    //       contactno: number,
    //       pan: pan
    //       // name: 'Parul Sharma',
    //       // contactno: 7568561737,
    //       // pan: 'ABCTY1234D'
    //     }

    //   )
    //   .then((resp) => {
    //     debugger;
    //     let usercheck = this.heroService.xmltojson(resp, 'CutomerdetailsNew');
    //     console.log('usercheck', usercheck);
    //     debugger;
    //     if (usercheck.length != 0) {
    //       that.savedData = usercheck;
    //     }
    //     // else {
    //     //     that.toastrService.error("No Data", '', { timeOut: 1500 });
    //     //   }
    //   });
  }

  tableData: any = []
  TableData(unqno: any) {
    let that = this;
    // this.heroService
    //   .ajaxcordys(
    //     'FetchDataBasedOnUniqueno ',
    //     'http://schemas.cordys.com/EW_WSAppPackage',
    //     {
    //       uniqueno: unqno,

    //     }

    //   )
    //   .then((resp) => {
    //     debugger;
    //     that.tableData = this.heroService.xmltojson(resp, 'ExtendedWarrantyInsuranceDetails');
    //     console.log(that.tableData)

    //     debugger;
    //   });
  }

  goTo() {
    this.heroService.goto('/insuranceinfo');
  }
  openmodel1() {
    $('#exampleModal3').modal('show');
  }
  paymentclick(){
    this.heroService.goto('/');
  }

}
