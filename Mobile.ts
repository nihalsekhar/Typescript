export class Mobile {
mobileId:number = 1001;
mobileName:string = "iPhone XS";
mobileCost:number = 90000;
constructor(){
this.printMobileDetail();
}
constructor(mobileType){
this.printMobileDetail();

}
printMobileDetail():void{
console.log(this.mobileId+"----"+this.mobileName+"----"+this.mobileCost+this.mobileType)
}
}
let mobile = new Mobile();



