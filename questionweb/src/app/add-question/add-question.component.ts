import { AppComponent } from './../app.component';
import { UtilityService } from './../../services/utility.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
declare var _: any;
@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  constructor(private _dataService: DataService, private _utility: UtilityService, private _appComponent: AppComponent) { }
  question: string;
  ans1: string;
  ans2: string;
  ans3: string;
  ans4: string;
  status: any;
  ngOnInit() {
  }
  submit() {
    let data = {
      question: this.question,
      answers: [
        { title: this.ans1, status: 0 },
        { title: this.ans2, status: 0 },
        { title: this.ans3, status: 0 },
        { title: this.ans4, status: 0 },
      ]
    };
    if (data.question) {
      for (let i = 0; i < 4; i++) {
        if (!data.answers[i].title) {
          this._utility.showAlert("Error", 'Please type all field', 'error');
          break;
        }
      }
    } else {
      this._utility.showAlert("Error", 'Please type all field', 'error')
      return;
    }
    if (this.status) {
      data.answers[this.status - 1].status = 1;
    } else {
      this._utility.showAlert("Error", 'Please choose right answer', 'error');
      return;
    }
    this._appComponent.showloading = true;
    this._dataService.AddQuestion(data).subscribe(res => {
      this._appComponent.showloading = false;
      console.log(res);
    }, err => {
       this._utility.showAlert("Error", 'Server error', 'error');
      this._appComponent.showloading = false;
    });
  }
}
