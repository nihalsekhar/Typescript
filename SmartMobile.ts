import { Mobile }  from './Mobile';

export class SmartMobile extends Mobile
{
mobileType:string = "Smart Mobile Set";
constructor(mobileType){
super(mobileType);}
}

let mobile = new SmartMobile();
