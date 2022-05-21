function echo(input){
    if (typeof input === 'string' || typeof input === 'number') {
        console.log(typeof input);
        console.log(input);
    } else {
        console.log(typeof input);
        console.log('Parameter is not suitable for printing');
    }
}

echo(null);
/*
object
Parameter is not suitable for printing
*/
echo(18); 
/*
number
18
*/
echo('Hello, JavaScript!');
/*
string
Hello, JavaScript!
*/ 
