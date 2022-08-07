function maxNumberInArray(numbers){
    let i=0;
    smallest=numbers[i];
    for(;i<numbers.length;i++)
    {
        if(numbers[i]<smallest)
        {
            smallest=numbers[i];
        }
    }
    return smallest;

}
const number=[50,55,8,888,44,55,66,88,55,-555];
console.log(maxNumberInArray(number))