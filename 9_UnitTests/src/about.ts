export class About {

 public firstName: string = 'John';
 public lastName: string = 'Doe';

 private _fullName: string = 'John Doe';

 get fullName() : string{
   return this._fullName;
 }

 set fullName(value : string){
   this._fullName = value;

   if (value == null)
    return;

   var names = value.split(' ');
   this.firstName = names[0] || '';
   this.lastName = names[1] || '';
 }
}
