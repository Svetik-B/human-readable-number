module.exports = function toReadable (number) {
    
   /* Is number zero? */
   if (number == 0) {
    return 'zero';
    }
    let arr = number.toString().split('');
    let word = "";
    let words = [];
    /* Array of units as words */
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    /* Array of tens as words */
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   
    let numberLength=arr.length;    
    let i = numberLength-1;
   
   if (numberLength == 1 & arr[i] != 0) {
         word += units[arr[i]]; 
         i--;
    } 

    if (numberLength == 2) {
       if (number < 20) {
        word += units[number];             
        } 

        if(number >=20 & arr[i] != 0) {
            word += tens[Number( arr[i-1])]+' '+units[Number(arr[i])];    
        } else if (number >=20 & arr[i] == 0) {
            word += tens[Number( arr[i-1])];   
          }        
    }    

    if (numberLength == 3) {
        word += units[Number(arr[i-2])] + ' hundred';
        let  number2 = Number(arr[i-1]+arr[i]);
        if (number2 < 20 & number2 != 0 ) {
        word += " "+units[number2];             
        } 

        if(number2 >=20 & arr[i] != 0) {
            word +=" "+ tens[Number( arr[i-1])]+' '+units[Number(arr[i])];    
        } else if (number2 >=20 & arr[i] == 0) {
            word +=" "+ tens[Number( arr[i-1])];   
          }        
    }        
    return word;
}
