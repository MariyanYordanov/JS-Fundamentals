function reverseInPlace(arr){
    for (let index = 0; index < arr.length / 2; index++) {
        swapElements(arr,index,arr.length - 1 - index);
    }
    console.log(arr.join(' '));

    function swapElements(arr,index,last){
        arr[index] = arr[last];
        arr[last] = arr[index];
    }
}

reverseInPlace(['a', 'b', 'c', 'd', 'e']); 
// e d c b a 

reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
// nop klm hig def abc

reverseInPlace(['33', '123', '0', 'dd']);
// dd 0 123 33