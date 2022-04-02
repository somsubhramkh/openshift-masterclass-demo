// data model of a program

export interface Program {
    programName?: string;
    description?: string;
    durationInMonths?:number;
    price?:number;
    discountRate?:number;
    currentPrice?:number;
    isActive?:boolean;
  }