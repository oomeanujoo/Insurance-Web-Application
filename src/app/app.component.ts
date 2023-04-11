import { Component } from '@angular/core';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateParserFormatterService} from './custom-date-parser-formatter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: NgbDateParserFormatter, useClass: CustomDateParserFormatterService}
  ]
})
export class AppComponent {
  title = 'Lombardicic';
}
