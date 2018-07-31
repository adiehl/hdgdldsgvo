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
    let txt = '';
    if (company.contractNumber) {
      txt += 'Betreff: ' + company.contractNumber + '\n\n';
    }
    doc.setFontSize(14);

    doc.text(this.titleText, 20, 100);

    doc.setFontSize(12);
    doc.text(this.getDate(), 170, 110);
    txt += this.introText;
    for (const textBlock of company.textBlocks) {
      if (textBlock.selected === true) {
        txt += ' - ' + textBlock.content + '\n';
      }
    }

    // remove trailing , and replace by .
    const lastChar = txt.substr(txt.length - 2);
    if (lastChar === ',\n') {
      txt = txt.substr(0, txt.length - 2) + '.\n';
    }
    if (company.remarks) {
      txt += '\n\n' + company.remarks + '\n';
    }

    // sender
    doc.text(doc.splitTextToSize(sender, 40), 140, 20);
    // split sender
    const senderLines = sender.split('\n');
    const senderName = senderLines[0];
    txt += this.endClause + '\n\n\n';
    txt += senderName;
    doc.setLineWidth(180);
    doc.setFontSize(12);


    // recipient
    const recipient = company.companyName + '\n' +
      (company.companyAddress ? company.companyAddress : '') + '\n' +
      (company.companyZip ? company.companyZip + ' ' : '') +
      (company.companyCity ? company.companyCity : '') + '\n' +
      (company.companyCountry ? company.companyCountry : '');
    doc.text(recipient, 20, 60);
    doc.text(doc.splitTextToSize(txt, 170), 20, 120);
    const filenName = company.companyName.replace(/[^A-Za-z0-9]/, '_');
    // doc.text(doc.splitTextToSize(txt, 180), 20, 100);
    doc.save(filenName + '.pdf');
  }

  /**
   * Return current Date in german format
   * @returns {string}
   */
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
