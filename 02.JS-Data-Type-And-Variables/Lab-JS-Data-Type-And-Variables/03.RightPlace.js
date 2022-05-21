function rightPlace(wordToMath,letter,word){
    let result = wordToMath.replace('_',letter);
    let print = result === word? 'Matched' : 'Not Matched';
    console.log(print);
}

rightPlace('Str_ng', 'i', 'String'); // Matched
rightPlace('Str_ng', 'I', 'String'); // Not Matched