function maxNumberInArray(numbers){
    let i=0;
    largest=numbers[i];
    for(;i<numbers.length;i++)
    {
        if(numbers[i]>largest)
        {
            largest=numbers[i];
        }
    }
    return largest;

}
const number=[50,55,8,888,44,55,66,88,55];
console.log(maxNumberInArray(number))