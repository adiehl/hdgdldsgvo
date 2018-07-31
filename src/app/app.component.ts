import { Component } from '@angular/core';
import { Company } from '../models/Company';
import { Textblock } from '../models/Textblock';
import { LetterService } from './letter.service';

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
  /**
   * Available Textblocks for the first letter
   * @type {({name: string; content: string} | {name: string; content: string; selected: boolean})[]}
   */
  textblocks1: Array<Textblock> = [
    { name : 'text1', content: 'vollumfänglich sämtliche über mich bei Ihnen gespeicherten Daten in Kopie zu überlassen,', selected: true },
    { name : 'text2', content: 'den Zweck der Verarbeitung dieser Daten zu nennen,',
      selected : true },
    { name : 'text3', content: 'die Empfänger oder Kategorien von Empfängern, die meine Daten bereits erhalten haben oder' +
              ' zukünftig noch erhalten werden zu nennen,',
      selected : true },
    { name : 'text4', content: 'die geplante Dauer der Speicherung dieser Daten zu nennen,',
      selected : true },
    { name : 'text5', content: 'sofern die Daten nicht bei mir erhoben werden, mir alle verfügbaren Daten über die Herkunft der' +
                               ' Daten mitzuteilen,',
      selected : true },
    { name : 'text6', content: 'mir darzulegen, ob eine automatisierte Entscheidungsfindung einschließlich Profiling gmäß Art. 22 DSGVO ' +
              'besteht und mir in diesem Fall aussagekräftige Informationen über die involvierte Logik und die angestrebten' +
              ' Auswirkungen einer derartigen Verarbeitung für meine Person zukommen zu lassen,',
      selected : true }
  ];
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
    // clone entry the stupid js way
    const newCompany: Company = JSON.parse(JSON.stringify(this.currentCompany));
    newCompany.textBlocks = this.textblocks1;
    this.companyList.push(JSON.parse(JSON.stringify(newCompany)));
    this.saveCompanyList();
    // reset values
    this.currentCompany = new Company();
    for (const textBlock of this.textblocks1) {
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
   * constructor, called when instantiated
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
  }

  public printPdf(company: Company) {
    this.letterService.createPdf(company, this.sender);
    company.printed = this.getDate();
    this.saveCompanyList();
  }

  public saveCompanyList() {
    window.localStorage.setItem('companyList', JSON.stringify(this.companyList));
  }

  public editCompany(company) {
    const companies = [];
    for (const oneCompany of this.companyList) {
      if (oneCompany !== company) {
        companies.push(oneCompany);
      }
    }
    this.currentCompany = company;
    this.textblocks1 = company.textBlocks;
    this.companyList = companies;
    this.saveCompanyList();
  }
}
