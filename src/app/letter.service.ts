import { Injectable } from '@angular/core';
import { Company } from '../models/Company';
import { Letter } from '../models/Letter';

const jsPDF = require('jspdf');

@Injectable()
export class LetterService {

  /***
   * Creates a PDF from the letter text
   *
   * @param {Company} company Company Object with Address
   * @param {Letter} letter Letter Object with Text / Textblocks
   * @param {String} sender Sender String with CRLF
   * @param {String} txt Text of the letter
   */
  public createPdf(company: Company, letter: Letter, sender, txt = null) {

    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm'
    });

    // title
    doc.setFontSize(14);
    doc.text(letter.titleText, 20, 100);
    doc.setFontSize(12);

    // date
    doc.text(this.getDate(), 170, 110);

    // sender
    doc.text(doc.splitTextToSize(sender, 40), 140, 20);

    doc.setLineWidth(180);
    doc.setFontSize(12);

    // recipient
    const recipient = company.companyName + '\n' +
        (company.companyAddress ? company.companyAddress : '') + '\n' +
        (company.companyZip ? company.companyZip + ' ' : '') +
        (company.companyCity ? company.companyCity : '') + '\n' +
        (company.companyCountry ? company.companyCountry : '');
    doc.text(recipient, 20, 60);

    if (!txt) {
      if (letter.rawText) {
        txt = letter.rawText;
      } else {
        txt = this.generateText(company, letter, sender);
      }

    }

    // split by lines
    const lines = doc.splitTextToSize(txt, 170);
    let y = 120;
    for (const line of lines) {
      doc.text(line, 20, y);
      y += 5;
      if (y > 270) {
        doc.addPage();
        y = 20;
      }

    }

    const fileName = company.companyName.replace(/[^A-Za-z0-9]/, '_');
    // doc.text(doc.splitTextToSize(txt, 180), 20, 100);
    doc.save(fileName + '.pdf');
  }

  public generateEmail(company: Company, letter: Letter, sender, txt = null) {
    if (!txt) {
      if (letter.rawText) {
        txt = letter.rawText;
      } else {
        txt = this.generateText(company, letter, sender);
      }
      return 'mailto:' + company.companyEmail + '?subject=' + encodeURIComponent(letter.name) + '&body=' + encodeURIComponent(txt);
    }
  }

  /**
   * Create just text for the letter
   *
   * @param {Company} company Company Object with Address
   * @param {Letter} letter Letter Object with Text / Textblocks
   * @param {String} sender Sender String with CRLF
   */
  public generateText(company, letter, sender): string {
    const senderName = this.getFirstLine(sender);
    // text generation
    let txt = '';

    if (company.contractNumber) {
      txt += 'Betreff: ' + company.contractNumber + '\n\n';
    }
    txt += letter.introText;
    for (const textBlock of letter.textblocks) {
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

    txt += letter.endClause + '\n\n\n';
    txt += senderName;

    return txt;
  }

  public getFirstLine(sender: string): string {
    const senderLines = sender.split('\n');
    return senderLines[0];
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
