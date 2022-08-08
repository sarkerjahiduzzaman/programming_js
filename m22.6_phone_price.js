function phonePrice(phones){
    let lessPrice=phones[0]
    for(let i=0;i<phones.length;i++)
    {
       const phone=phones[i];

        
   if(phone.price<lessPrice.price)
        {
            lessPrice=phone
        }
        
    }
    return lessPrice.name
    



}
var phone=[{name:'samsung',camera: 32,price:50000,ram:"8 gb"},
{name:'htc',camera: 32,price:12,ram:"8 gb"},

{name:'symphony',camera: 32,price:568454,ram:"8 gb"},{name:'vivo',camera: 32,price:55455,ram:"8 gb"},
{name:'oppo',camera: 32,price:555,ram:"8 gb"}
]
console.log(phonePrice(phone))