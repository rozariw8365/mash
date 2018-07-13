function mash(){
return"you will live in a " + getHome() + " and you will have " + getChildrenCount(); + "kids"
}

console.log(mash());

function getHome(){
    let array = ["Mansion" , "Apartment" , "Shack" , "House"];
    return array[1];
}

function getChildrenCount(){
        const decimal = math.random();
        const times10 = decimal * 100;
        const final = math.floor(times10);
        return final;
    }



