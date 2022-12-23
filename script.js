var myArray=new Array();
myArray[0]="Abdul";
myArray[1]="basit";
myArray[2]="jerry";
myArray[3]="Jhonson";
myArray[4]="Khan";
myArray[5]="Ali";
myArray[6]="Joule";
myArray[7]="Imran";
myArray[8]="Khan";
myArray[9]="Akber";

for(var index=0;index<myArray.length;index++)
{
    if(myArray[index].charAt(0) == 'j' || myArray[index].charAt(0) == 'J')
    { 
              console.log("GoodBye " + myArray[index]);
    }
    else
    {
        console.log("Hello " + myArray[index]);
    }
}