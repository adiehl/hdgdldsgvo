import { Component } from '@angular/core';
import { Company } from '../models/Company';
import { Textblock } from '../models/Textblock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Available Textblocks for the first letter
   * @type {({name: string; content: string} | {name: string; content: string; selected: boolean})[]}
   */
  textblocks1: Array<Textblock> = [
    { name : 'text1', content: 'vollumfänglich sämtliche über mich bei Ihnen gespeicherten Daten in Kopie zu überlassen,' },
    { name : 'text2', content: 'den Zweck der Verarbeitung dieser Daten zu nennen,',
      selected : false },
    { name : 'text3', content: 'die Empfänger oder Kategorien von Empfängern, die meine Daten bereits erhalten haben oder' +
              ' zukünftig noch erhalten werden zu nennen,',
      selected : false },
    { name : 'text4', content: 'die geplante Dauer der Speicherung dieser Daten zu nennen,',
      selected : false },
    { name : 'text5', content: 'sofern die Daten nicht bei mir erhoben werden, mir alle verfügbaren Daten über die Herkunft der' +
                               ' Daten mitzuteilen,',
      selected : false },
    { name : 'text6', content: 'mir darzulegen, ob eine automatisierte Entscheidungsfindung einschließlich Profiling gmäß Art. 22 DSGVO ' +
              'besteht und mir in diesem Fall aussagekräftige Informationen über die involvierte Logik und die angestrebten' +
              ' Auswirkungen einer derartigen Verarbeitung für meine Person zukommen zu lassen,',
      selected : false }
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
  static getDate(): string {
    const today = new Date();
    let dd: string = today.getDate().toString();
    let mm: string = (today.getMonth() + 1).toString();
    const yyyy = today.getFullYear();

    if (parseInt(dd, 10) < 10) {
      dd = '0' + dd;
    }

    if (parseInt(mm, 10) < 10) {
      mm = '0' + mm;
    }
    return dd + '.' + mm + '.' + yyyy;
  }

  public saveCompany() {
    // clone entry the stupid js way
    const newCompany: Company = JSON.parse(JSON.stringify(this.currentCompany));
    newCompany.textBlocks = this.textblocks1;
    this.companyList.push(newCompany);
    this.currentCompany = new Company();
    for (const textBlock of this.textblocks1) {
      textBlock.selected = false;
    }
    window.localStorage.setItem('companyList', JSON.stringify(this.companyList));
  }
  /**
   * constructor, called when instantiated
   */
  constructor() {
    const storeCompanylist = window.localStorage.getItem('companyList');
    if (storeCompanylist !== null) {
      this.companyList = JSON.parse(storeCompanylist);
    }
  }
}
