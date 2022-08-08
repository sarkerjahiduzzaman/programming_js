
function deletedDuplicate(names){
    let unique=[];
    for(let i=0;i<names.length;i++)
    {
       
        if(unique.includes(names[i])===false){
            unique.push(names[i])
         
        
        }
    }
    return unique;
    
  

}
const name2=['jahid','hasan','rimon','time','jahid','hasan','12',12,12,'there','two','jahid','jahid','jahid','jahid','jahid']
console.log(deletedDuplicate(name2))

