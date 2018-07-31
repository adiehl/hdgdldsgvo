import {Textblock} from './Textblock';

export class Company {
  companyName: string;
  companyAddress?: string;
  companyZip?: string;
  companyCity?: string;
  companyCountry?: string;
  contractNumber?: string;
  remarks?: string;
  textBlocks?: Textblock[];
  printed?: string;
}
