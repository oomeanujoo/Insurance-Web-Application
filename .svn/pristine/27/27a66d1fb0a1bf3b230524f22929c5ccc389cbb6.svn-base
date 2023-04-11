import { Injectable } from '@angular/core';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class CustomDateParserFormatterService extends NgbDateParserFormatter {
  // readonly DT_FORMAT = 'DD-MM-YYYY';

  // parse(value: string): NgbDateStruct | null {
  //     if (value) {
  //         value = value.trim();
  //         let mdt = moment(value, this.DT_FORMAT)
  //     }
  //     return null;
  // }
 
  
   readonly DELIMITER = '-';

  parse(value: string): NgbDateStruct | null {
    let result: any;
    if (value) {
      let date = value.trim().split(this.DELIMITER);
      result = {
        day : parseInt(date[0], 10),
        month : parseInt(date[1], 10),
        year : parseInt(date[2], 10)
      };
    }
    return result;
  }

//   format(date: NgbDateStruct): string {
//     if (!date) return '';
//     let mdt = moment([date.year, date.month - 1, date.day]);
//     if (!mdt.isValid()) return '';
//     return mdt.format(this.DELIMITER);
// }
  format(date: NgbDateStruct): string {
    let result: any;
    if (!date) return '';
    if (date) {
      result = (date.day<10 ? ("0"+date.day) : date.day) + this.DELIMITER + (date.month<10 ? ("0"+date.month) : date.month) + this.DELIMITER + date.year;
    }
    return result;
  }
}