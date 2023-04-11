import { Component, OnInit } from '@angular/core';
import { HeroService } from "../hero.service";
import { ToastrService } from 'ngx-toastr';

import * as moment from 'moment';
declare var $: any;


@Component({
  selector: 'app-insuranceinfo',
  templateUrl: './insuranceinfo.component.html',
  styleUrls: ['./insuranceinfo.component.css']
})
export class InsuranceinfoComponent implements OnInit {
  Addcarddata = [
    {
      ew_id: '',
      assettype: '',
      manufacturer: '',
      model: '',
      invoiceno: '',
      dateofpurchase: '',
      manufacturerwarranty: '',
      invoiceamount: '',
      premiumyear: '',
      premiumamout1: 0,
      premiumamout2: 0,
      premiumamount: 0,
      Temp3: '',
      Temp4: '',
      Temp5: '',
      uniqueno: ''
    }
  ];
  data: any = {
    arr: [],
    arr1: []
  }
  assettpearray: any = ['LAPTOP', 'MOBILE', 'CCTV', 'TABLET', 'TELEVISION', 'WASHING MACHINE', 'AIR CONDITIONER', 'CAMERA'];

  flagbutton: any;
  deleteflag: any;
  fieldflag: any;
  dte = new Date();
  minDate: any = { year: "", month: "", day: "" };
  maxDate:any =  {"year": Number(moment().endOf('month').format("YYYY")), "month": Number(moment().endOf('month').format("MM")), "day": Number(moment().format('DD'))};
  tempSNO: any = []; // To hold the deleted the record sno
  constructor(public heroService: HeroService,
    private toastrService: ToastrService) { }
  getuniuevlaue: any;
  ngOnInit(): void {
    let that = this;
    debugger;
    this.dte.setDate(this.dte.getDate() - 15);
    let y =this.dte.getFullYear();
    let m = this.dte.getMonth()+1;
    let d = this.dte.getDate();    ;

    // let y = moment(this.dte).format("YYYY");
    // let m = moment(this.dte).format("MM");
    // let d = moment(this.dte).format("DD");
    this.minDate.year = y;
    this.minDate.month = m;
    this.minDate.day = d;
    console.log(this.minDate);
    let a = this.heroService.getitem_local('name');
    let b = this.heroService.getitem_local('number');
    let c = this.heroService.getitem_local('pan');
    console.log(a, '   ', b, '   ', c)
    if (a == null && b == null && c == null) {
       this.heroService.goto('/');
     // that.getuniuevlaue = this.heroService.getitem_local('unquekey');
    }

    else {
      that.getuniuevlaue = this.heroService.getitem_local('unquekey');
      console.log('that.getuniuevlaue', that.getuniuevlaue);
      if (that.getuniuevlaue != null && that.getuniuevlaue != 'undefined') {
        that.getsaveddata(that.getuniuevlaue);
      }
    }
    // that.getsaveddata(that.getuniuevlaue);
  }

  dateformat: any;
  getsaveddata(uiquevalue: any) {
    let that = this;
    that.Addcarddata = [];
    that.flagbutton = true;
    that.deleteflag = true;
    this.heroService
      .ajaxcordys(
        'FetchDataBasedOnUniqueno',
        'http://schemas.cordys.com/EW_WSAppPackage',
        {
          uniqueno: uiquevalue,
        }
      )
      .then((resp) => {
        debugger;
        that.Addcarddata = this.heroService.xmltojson(resp, 'ExtendedWarrantyInsuranceDetails');
        console.log('usercheck', that.Addcarddata);
        if (that.Addcarddata.length == 1) {
          that.deleteflag = false;
        }
        for (let i = 0; i < that.Addcarddata.length; i++) {
          if (that.Addcarddata[i].dateofpurchase != "") {
            that.dateformat = {
              year: Number(
                moment(that.Addcarddata[i].dateofpurchase)
                  .endOf("month")
                  .format("YYYY")
              ),
              month: Number(
                moment(that.Addcarddata[i].dateofpurchase)
                  .endOf("month")
                  .format("MM")
              ),
              day: Number(
                moment(that.Addcarddata[i].dateofpurchase).format("DD")
              ),
            };
            console.log(
              "that.allData[i].OCCURRENCE_DATE",
              that.Addcarddata[i].dateofpurchase
            );
            that.Addcarddata[i].dateofpurchase = that.dateformat;
          }
          that.manufacturedataget1(that.Addcarddata[i].assettype, i);
        }
        for (let i = 0; i < that.Addcarddata.length; i++) {
          if (that.Addcarddata[i].premiumyear == '1') {
            that.data.arr[i] = true;
            that.data.arr1[i] = false;
          }
          else if (that.Addcarddata[i].premiumyear == '2') {
            that.data.arr[i] = false;
            that.data.arr1[i] = true;
          }
          that.Addcarddata[i].premiumamout1 = Number(that.Addcarddata[i].invoiceamount) / 50;
          console.log('that.Addcarddata[i].premiumamout1', that.Addcarddata[i].premiumamout1)
          that.Addcarddata[i].premiumamout2 = Number(that.Addcarddata[i].invoiceamount) / 25;
        }
      });
  }
  manufacturedataget1(asset: any, i: any) {
    let that = this;
    debugger;
    this.heroService
      .ajaxcordys(
        'GetManufacturerbyAssettype',
        'http://schemas.cordys.com/EW_WSAppPackage',
        {
          assettype: asset,
        }

      )
      .then((resp) => {
        debugger;
        let a = this.heroService.xmltojson(resp, 'AssetManufacturerDetails')
        // if(a.length != 0) {
        that.manufaturetypearray[i] = a;
        //}

        console.log(that.manufaturetypearray);
      });
  }
  manufaturetypearray: any = ['', '', '', '', '', '', '', '', '', '', ''];
  manufacturedataget(event: any, item: any, i: any) {
    let that = this;
    debugger;
    that.Addcarddata[i].manufacturer = ''
    this.heroService
      .ajaxcordys(
        'GetManufacturerbyAssettype',
        'http://schemas.cordys.com/EW_WSAppPackage',
        {
          assettype: item,
        }

      )
      .then((resp) => {
        debugger;
        let a = this.heroService.xmltojson(resp, 'AssetManufacturerDetails')
        that.manufaturetypearray[i] = a;
        console.log(that.manufaturetypearray);
      });
  }

  cardselected: any = -1;
  cardselected1: any = -1;
  selectcard(i: any, item: any) {
    debugger;
    let that = this;
    //this.cardselected = i;
    this.data.arr[i] = true;
    this.data.arr1[i] = false;
    //this.cardselected1 = -1
    console.log("iii", i);
    console.log("itemmmmm", item);
   let  aYearFromNow = new Date();

    aYearFromNow.setDate(aYearFromNow.getDate() + 365);
   
    for (let j = 0; j < that.Addcarddata.length; j++) {
      if (j == i) {
        that.Addcarddata[j].premiumyear = '1';
        that.Addcarddata[j].premiumamount = item.premiumamout1;
        that.Addcarddata[j].Temp5 = moment(aYearFromNow).format("DD-MM-YYYY");
        console.log(that.Addcarddata[j].Temp5);
      }
    }

  }
  selectcard1(i: any, item: any) {
    debugger;
    let that = this;
    // this.cardselected1 = i;
    // this.cardselected = -1;
    this.data.arr[i] = false;
    this.data.arr1[i] = true;
    let  aYearFromNow1 = new Date();
    aYearFromNow1.setDate(aYearFromNow1.getDate() + 730);
   // aYearFromNow1.setFullYear(aYearFromNow1.getFullYear() + 2);
    for (let j = 0; j < that.Addcarddata.length; j++) {
      if (j == i) {
        that.Addcarddata[j].premiumyear = '2';
        that.Addcarddata[j].premiumamount = item.premiumamout2;
        that.Addcarddata[j].Temp5 = moment(aYearFromNow1).format("DD-MM-YYYY");
      }
    }
  }

  addForm() {
    let that = this;
    let checkVal1 = that.beforaddvalidation();
    if (checkVal1) {
      this.Addcarddata.push({
        ew_id: '',
        assettype: '',
        manufacturer: '',
        model: '',
        invoiceno: '',
        dateofpurchase: '',
        manufacturerwarranty: '',
        invoiceamount: '',
        premiumyear: '',
        premiumamout1: 0,
        premiumamout2: 0,
        premiumamount: 0,
        Temp3: '',
        Temp4: '',
        Temp5: '',
        uniqueno: '',
      });
      this.deleteflag = true;
    }
    that.flagbutton = false;

  }
  assetindex: any = ''
  beforaddvalidation() {
    let that = this;
    debugger;
    for (let i = 0; i < that.Addcarddata.length; i++) {
      that.assetindex = i + 1;
      if (that.isEmpty(that.Addcarddata[i].assettype) || that.isEmpty(that.Addcarddata[i].manufacturer)
        || that.isEmpty(that.Addcarddata[i].model) || that.isEmpty(that.Addcarddata[i].invoiceno) || that.isEmpty(that.Addcarddata[i].dateofpurchase)
        || that.isEmpty(that.Addcarddata[i].manufacturerwarranty) || that.isEmpty(that.Addcarddata[i].invoiceamount)) {
        that.toastrService.error("Please Fill All Details Asset-" + that.assetindex, '', { timeOut: 1200 });
        return false;
      }
    }
    return true;
  }


  // input field number accpect 
  keyPressNumbers(event: any) {
    var charCode = event.which ? event.which : event.keyCode;
    // Only Numbers 0-9
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  calculateinsurance() {
    debugger;
    let that = this;
    let checkVal = that.validation();
    if (checkVal) {
      that.flagbutton = true;
      that.fieldflag = false;
      for (let i = 0; i < that.Addcarddata.length; i++) {
        that.Addcarddata[i].premiumamout1 = Number(that.Addcarddata[i].invoiceamount) / 50;
        console.log('that.Addcarddata[i].premiumamout1', that.Addcarddata[i].premiumamout1)
        that.Addcarddata[i].premiumamout2 = Number(that.Addcarddata[i].invoiceamount) / 25;
      }
    }
  }


  validation() {
    let that = this;
    for (let i = 0; i < that.Addcarddata.length; i++) {
      if (that.isEmpty(that.Addcarddata[i].assettype)) {
        that.toastrService.error("Please Select Asset Type", '', { timeOut: 1200 });
        return false;
      }
      if (that.isEmpty(that.Addcarddata[i].manufacturer)) {
        that.toastrService.error("Please Select Manufacture", '', { timeOut: 1200 });
        return false;
      }
      if (that.isEmpty(that.Addcarddata[i].model)) {
        that.toastrService.error("Please Enter Model", '', { timeOut: 1200 });
        return false;
      }
      if (that.isEmpty(that.Addcarddata[i].invoiceno)) {
        that.toastrService.error("Please Enter Inovice Number", '', { timeOut: 1200 });
        return false;
      }
      if (that.isEmpty(that.Addcarddata[i].dateofpurchase)) {
        that.toastrService.error("Please Select Date of Purchase", '', { timeOut: 1200 });
        return false;
      }
      if (that.isEmpty(that.Addcarddata[i].manufacturerwarranty)) {
        that.toastrService.error("Please Select Manufacturer Warranty", '', { timeOut: 1200 });
        return false;
      }
      if (that.isEmpty(that.Addcarddata[i].invoiceamount)) {
        that.toastrService.error("Please Enter Invoice Ammount", '', { timeOut: 1200 });
        return false;
      }

    }
    return true;
  }
  isEmpty(value: any) {
    return (
      value == null || value == undefined || value == ""
    );
  }


  openmodel1() {
    $('#exampleModal3').modal('show');
  }


  deleteRow(i: any) {
    debugger
    let that = this;
    // that.data.arr= []
    // that.data.arr1= []
    // for(let j = 0; j < that.Addcarddata.length; j++){

    //   that.Addcarddata[j].premiumyear = '';
    //   that.Addcarddata[j].premiumamount =  0;

    // }
    this.tempSNO = [...this.tempSNO, { "ew_id": this.Addcarddata[i].ew_id }];
    this.Addcarddata.splice(i, 1);
    that.data.arr.splice(i, 1);
    that.data.arr1.splice(i, 1);
    that.manufaturetypearray.splice(i, 1)
    that.deletefromBack();
    debugger;
    if (that.Addcarddata.length == 1) {
      that.deleteflag = false;
    }
  }
  deliics: any; // to hold the deleted record row
  deletefromBack() {
    console.log(this.tempSNO);
    let that = this;
    for (let c = 0; c < this.tempSNO.length; c++) {
      if (this.tempSNO[c].ew_id != "") {
        this.deliics = {
          old: {
            "ExtendedWarrantyInsuranceDetails": {
              ew_id: this.tempSNO[c].ew_id
            }
          }
        };
        console.log("DeleteIICS=>", this.deliics);
        this.heroService
          .ajaxcordys(
            "UpdateExtendedWarrantyInsuranceDetails",
            "http://schemas.cordys.com/EW_WSAppPackage",
            {
              tuple: this.deliics,
            }
          )
          .then((resp) => {
            that.toastrService.success("Data Deleted Successfully!", '', { timeOut: 1000 });
          });
      }
    }
    this.tempSNO = [];
  }

  cardselectvalidation() {
    let that = this;
    for (let i = 0; i < that.Addcarddata.length; i++) {
      if (that.isEmpty(that.Addcarddata[i].premiumyear)) {
        that.toastrService.error("Please Select Policy", '', { timeOut: 1200 });
        return false;
      }
    }
    return true;
  }

  nextbtndisflag: any = false;
  saveandroute() {
    let that = this;
    debugger;
    //this.heroService.goto('/policysummary');
    let checkVal = that.cardselectvalidation();
    if (checkVal) {
      that.nextbtndisflag = true;
      that.save();
      that.nextbtndisflag = false;
    }

  }


  tablemodified(item: any) {
    debugger;
    let that = this;
    item.isChange = true;
    that.flagbutton = false;
    that.data.arr = []
    that.data.arr1 = []
  }



  randumnumberflag: any;
  randomnumber: any;

  save() {
    let that = this;
    debugger;
  let  aYearFromNow = new Date()
    aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1)
    moment(aYearFromNow).subtract(1, "days").format("YYYY-MM-DD")
    if (that.Addcarddata.length > 0) {
      for (let i = 0; i < that.Addcarddata.length; i++) {
        if ((that.Addcarddata[i].ew_id != '' && that.Addcarddata[i].ew_id != 'undefined') && that.Addcarddata[i].uniqueno != '') {
          that.randumnumberflag = true;
          that.randomnumber = that.Addcarddata[i].uniqueno
          break;
        }
        else {
          that.randumnumberflag = false;
        }
      }
    }
    if (that.randumnumberflag == false) {
      that.randomnumber = Math.floor((Math.random() * 10000));
    }

    let dataObj: any = [];

    if (that.Addcarddata.length > 0) {
      for (let i = 0; i < that.Addcarddata.length; i++) {
        let temp = {};
        if (that.Addcarddata[i].ew_id == '') {
          temp = {
            new: {
              ExtendedWarrantyInsuranceDetails: {
                assettype: that.Addcarddata[i].assettype
                  ? that.Addcarddata[i].assettype
                  : "",
                manufacturer: that.Addcarddata[i].manufacturer ? that.Addcarddata[i].manufacturer : "",
                model: that.Addcarddata[i].model ? that.Addcarddata[i].model : "",
                invoiceno: that.Addcarddata[i].invoiceno ? that.Addcarddata[i].invoiceno : "",
                dateofpurchase: moment(that.Addcarddata[i].dateofpurchase).subtract(1, "months").format("YYYY-MM-DD") ? moment(that.Addcarddata[i].dateofpurchase).subtract(1, "months").format("YYYY-MM-DD") : "",
                manufacturerwarranty: that.Addcarddata[i].manufacturerwarranty ? that.Addcarddata[i].manufacturerwarranty : "",
                invoiceamount: that.Addcarddata[i].invoiceamount ? that.Addcarddata[i].invoiceamount : "",
                premiumyear: that.Addcarddata[i].premiumyear ? that.Addcarddata[i].premiumyear : "",
                premiumamount: that.Addcarddata[i].premiumamount ? that.Addcarddata[i].premiumamount : "",
                totalamount: '',
                uniqueno: that.randomnumber,
                Temp3: 'Asset-' + (i + 1),
                Temp4: moment(new Date()).format("DD-MM-YYYY") ? moment(new Date()).format("DD-MM-YYYY") : "",
                Temp5: that.Addcarddata[i].Temp5 ? that.Addcarddata[i].Temp5 : "",
              },
            },
          };
          //  dataObj.push(temp);
        } else if (that.Addcarddata[i].ew_id != '') {
          temp = {
            old: {
              ExtendedWarrantyInsuranceDetails: {
                ew_id: that.Addcarddata[i].ew_id ? that.Addcarddata[i].ew_id : "",
              },
            },
            new: {
              ExtendedWarrantyInsuranceDetails: {
                assettype: that.Addcarddata[i].assettype
                  ? that.Addcarddata[i].assettype
                  : "",
                manufacturer: that.Addcarddata[i].manufacturer ? that.Addcarddata[i].manufacturer : "",
                model: that.Addcarddata[i].model ? that.Addcarddata[i].model : "",
                invoiceno: that.Addcarddata[i].invoiceno ? that.Addcarddata[i].invoiceno : "",
                dateofpurchase: moment(that.Addcarddata[i].dateofpurchase).subtract(1, "months").format("YYYY-MM-DD") ? moment(that.Addcarddata[i].dateofpurchase).subtract(1, "months").format("YYYY-MM-DD") : "",
                manufacturerwarranty: that.Addcarddata[i].manufacturerwarranty ? that.Addcarddata[i].manufacturerwarranty : "",
                invoiceamount: that.Addcarddata[i].invoiceamount ? that.Addcarddata[i].invoiceamount : "",
                premiumyear: that.Addcarddata[i].premiumyear ? that.Addcarddata[i].premiumyear : "",
                premiumamount: that.Addcarddata[i].premiumamount ? that.Addcarddata[i].premiumamount : "",
                Temp4: moment(new Date()).format("DD-MM-YYYY") ? moment(new Date()).format("DD-MM-YYYY") : "",
                Temp5: that.Addcarddata[i].Temp5 ? that.Addcarddata[i].Temp5 : ""           
              },
            },
          };
          // dataObj.push(temp);
        }
        dataObj.push(temp);
      }
      console.log("dataObj -> ", dataObj);
      if (dataObj.length > 0) {
        that.updateDataAfterSave(dataObj);
      }
    } else {
      that.toastrService.error("Please fill details.");
    }
  }

  setvalue: any;
  updateDataAfterSave(tuple: any) {
    let that = this;
    debugger;
    this.heroService
      .ajaxcordys(
        "UpdateExtendedWarrantyInsuranceDetails",
        "http://schemas.cordys.com/EW_WSAppPackage",
        {
          tuple: tuple,
        }

      )
      .then((resp) => {
        debugger;
        let result = this.heroService.xmltojson(resp, 'ExtendedWarrantyInsuranceDetails');

        if (result.length > 0) {
          that.setvalue = that.randomnumber;
        }
        debugger;
        that.toastrService.success("Data saved successfully.", '', { timeOut: 1000 });
        this.heroService.setitem_local('unquekey', that.setvalue);
        this.heroService.goto('/policysummary');

      });

  }


  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
