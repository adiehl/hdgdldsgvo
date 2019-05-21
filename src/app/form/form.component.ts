import { Component, OnInit, Input } from '@angular/core';
import { Letter } from '../../models/Letter';
import { LetterService } from '../letter.service';
import { Company } from '../../models/Company';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() sender = '';
  @Input() templateName = '';
  @Input() templateNames: string[] = [];
  @Input() letter: Letter;
  @Input() companyList: Company[] = [];
  @Input() currentCompany: Company = new Company;

  constructor(public letterService: LetterService) { }

  ngOnInit() {
  }

  /**
   * saves company to localstorage
   */
  public saveCompany() {
    let existingCompany = null;
    for (const oneCompany of this.companyList) {
      if (oneCompany.companyName === this.currentCompany.companyName) {
        existingCompany = oneCompany;
      }
    }
    if (existingCompany !== null) {
      existingCompany.letter.push(JSON.parse(JSON.stringify(this.letter)));
    } else {
      // clone entry the stupid js way
      const newCompany: Company = JSON.parse(JSON.stringify(this.currentCompany));
      newCompany.letter.push(this.letter);
      this.companyList.push(JSON.parse(JSON.stringify(newCompany)));
    }
    this.saveCompanyList();
    this.currentCompany = new Company();
    for (const textBlock of this.letter.textblocks) {
      textBlock.selected = true;
    }
    this.letter.rawText = '';
  }

  public editText() {
    const lines = this.letterService.generateText(this.currentCompany, this.letter, this.sender);
    this.letter.rawText = lines;
  }

  /**
   * saves company list in localstorage
   */
  public saveCompanyList() {
    window.localStorage.setItem('companyList', JSON.stringify(this.companyList));
  }

  /**
   * Gets current date in german format
   * @returns {string}
   */
  public getDate(): string {
    return this.letterService.getDate();
  }


}
