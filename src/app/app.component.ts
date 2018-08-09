import { Component } from '@angular/core';
import { Company } from '../models/Company';
import { LetterService } from './letter.service';
import { Letter } from '../models/Letter';
import {Templates} from '../models/Templates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Sender of the letter
   * @type {string}
   */
  sender = '';
  templateName = '';
  templateNames: string[] = [];

  letter: Letter;

  /**
   * List of currently selected companies
   * @type {{companyName: string}[]}
   */
  companyList: Company[] = [];
  /**
   * currently edited company
   * @type {{companyName: string}}
   */
  currentCompany: Company = new Company;

  public changeTemplate() {
    this.letter = this.getTemplate(this.templateName);
  }

  public getTemplate(templateName: string) {
    const templates = new Templates();
    for (const template of templates.Templates) {
      if (template.name === templateName) {
        return template;
      }
    }
    return null;
  }

  /**
   * Gets current date in german format
   * @returns {string}
   */
  public getDate(): string {
    return this.letterService.getDate();
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
    // TODO: return to main page
    // reset values
    this.currentCompany = new Company();
    for (const textBlock of this.letter.textblocks) {
      textBlock.selected = true;
    }
  }

  /**
   * saves sender to localstorage
   */
  public saveSender() {
    window.localStorage.setItem('sender', this.sender);
  }

  /**
   * generates pdf
   * @param {Company} company
   */
  public printPdf(company: Company, letter: Letter) {
    this.letterService.createPdf(company, letter, this.sender);
    letter.printed = this.getDate();
    this.saveCompanyList();
  }

  /**
   * saves company list in localstorage
   */
  public saveCompanyList() {
    window.localStorage.setItem('companyList', JSON.stringify(this.companyList));
  }

  public createLetter(company) {
    this.currentCompany = company;
    this.letter = new Templates().Templates[0];
    this.templateName = this.letter.name;

  }
  /**
   * removes company from company list and edits it
   * @param company
   */
  public editCompany(company, letter) {
    const companyLetters = [];
    // filter out current letter
    for (const singleLetter of company.letter) {
      if (singleLetter !== letter) {
        companyLetters.push(singleLetter);
      }
    }
    company.letter = companyLetters;
    this.currentCompany = company;
    this.letter = letter;
    // if no letter remains

    if (company.letter.length === 0) {
      const companies = [];
      for (const oneCompany of this.companyList) {
        if (oneCompany.companyName !== company.companyName) {
          companies.push(oneCompany);
        }
      }
      this.companyList = companies;
      this.saveCompanyList();
    }
  }

  /**
   * constructor, called when instantiated
   * load company list and sender information
   */
  constructor(public letterService: LetterService) {
    const storeCompanylist = window.localStorage.getItem('companyList');
    if (storeCompanylist !== null) {
      this.companyList = JSON.parse(storeCompanylist);
    }
    const storeSender = window.localStorage.getItem('sender');
    if (storeSender !== null) {
      this.sender = storeSender;
    }
    const templates = new Templates();
    for (const template of templates.Templates) {
      this.templateNames.push(template.name);
    }
    this.letter = templates.Templates[0];
    this.templateName = this.letter.name;
    console.log(this.letter);
  }


}
