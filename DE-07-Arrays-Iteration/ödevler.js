// ******ARRAY Ödevler- Soru-1*********

const fiyatlar= [100, 250, 50, 89];

fiyatlar.forEach((item, index, array)=>{

array[index]= Math.round(item*1.1);
} )

// ******ARRAY Ödevler- Soru-2*********

console.log(fiyatlar);

fiyatlar.forEach((item, index, array)=> {
    if ( item > 90)
    console.log(item);
});

console.log("************");

// ******ARRAY Ödevler- Soru-3*********

fiyatlar.forEach((item, index, array)=> {
    if ( item < 110){
        array[index]= Math.round(item*1.1);
        console.log(array[index]);
    }   
});

console.log("************");
// ******ARRAY Ödevler- Soru-4*********

const maaslar=[3000, 5000, 4000, 6000, 6500];

let zamliMaaslar=[];

maaslar.forEach((item, index, array)=> {
    if ( item < 4000){
        zamliMaaslar.push( Math.round(item*1.5) );
    }
    else   
    zamliMaaslar.push( item ); 
});
console.log(maaslar);
console.log(zamliMaaslar);

// ******ARRAY Ödevler- Soru-5*********

maaslar.forEach((item, index, array)=> {
    if ( item >= 4000){
        array[index]= Math.round(item*1.25);
        console.log(array[index]);
    }   
});