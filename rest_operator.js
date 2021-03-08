function fun(a,b,...c){ 
    console.log(`${a} ${b}`); //'Gojou Sataru' 
    console.log(c);  //[ 'Lionel', 'Messi', 'Barcelona' ] 
    console.log(c[0]); //Lionel 
    console.log(c.length); //3 
    console.log(c.indexOf('Lionel')); //0 
} 
fun('Goujou','Sataru','Lionel','Messi','Barcelona'); 