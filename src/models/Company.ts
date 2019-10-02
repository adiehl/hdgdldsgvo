import {Letter} from './Letter';

export class Company {
  companyName: string;
  companyAddress?: string;
  companyZip?: string;
  companyCity?: string;
  companyCountry?: string;
  companyFax?: string;
  companyEmail?: string;
  contractNumber?: string;
  remarks?: string;
  letter: Letter[] = [];
  printed?: string;
}
