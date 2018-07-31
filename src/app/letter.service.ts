import { Injectable } from '@angular/core';
import { Company } from '../models/Company';

const jsPDF = require('jspdf');

@Injectable()
export class LetterService {

  public titleText = 'Datenschutzrechliche Selbstauskunft gemäß DSGVO';
  public introText = 'Sehr geehrte Damen und Herren,\n\n' +
    'nach Art. 15 DSGVO habe ich das Recht, von Ihnen eine Bestätigung darüber zu verlangen' +
    ', ob sie personenbezogene Daten über mich gespeichert haben. Sofern dies der Fall ist, so habe ich ein' +
    ' Recht auf Auskunft über diese Daten.\n' +
    '\n' +
    'Ich darf Sie in diesem Fall bitten, mir\n';
  public endClause = '\n' +
    '\n' +
    '\n' +
    'Mit freundlichen Grüßen,';

  public createPdf(company: Company, sender) {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm'
    });
    let txt = this.titleText;
    txt += '\n' + this.getDate() + '\n';
    txt += this.introText;
    for (const textBlock of company.textBlocks) {
      if (textBlock.selected === true) {
        txt += ' - ' + textBlock.content + '\n';
      }
    }
    if (txt.substr(txt.length - 1) === ',') {
      txt = txt.substr(0, txt.length - 1) + '.';
    }
    txt += this.endClause;
    doc.setLineWidth(180);
    doc.setFontSize(12);

    // sender
    doc.text(doc.splitTextToSize(sender, 40), 140,20);
    // recipient
    const recipient = company.companyName + '\n' +
      company.companyAddress + '\n' +
      company.companyZip + ' ' + company.companyCity + '\n' +
      company.companyCountry || '';
    doc.text(recipient, 20, 60);
    doc.text(doc.splitTextToSize(txt, 180), 20, 100);
    const filenName = company.companyName.replace(/[^A-Za-z0-9]/, '_');
    // doc.text(doc.splitTextToSize(txt, 180), 20, 100);
    doc.save(filenName + '.pdf');

  }
  public getDate(): string {
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

  constructor() { }

}
