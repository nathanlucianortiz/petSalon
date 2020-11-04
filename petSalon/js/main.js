var salon={
    name:"The Fashion Pet",
    address:{
        street:"Ave University",
        number:"2569"
    },
    hours:{
        open:"8:00 a.m.",
        close:"8:00 p.m."
    },
    pets:[]
}



var id=0;
/* constructor */
class Pet{
    constructor(name,age,gender,type,breed,service,price,ownersName,contactPhone,paymentOption){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.type=type;
        this.breed=breed;
        this.service=service;
        this.price=price;
        this.ownersName=ownersName;
        this.contactPhone=contactPhone;
        this.paymentOption=paymentOption;
        this.id=id++; //don't need to add up there^ because not an argument
    }
}

var scooby = new Pet("Scooby",50,"Male","Dog","Dane","Full Service",20,"Shaggy","555-555-5555","Cash");
var scrappy = new Pet("Scrappy",25,"Male","Dog","Lab","Nail Trimming",10,"Jane","947-222-3333", "Visa Debit");
var tweetie = new Pet("Tweetie",23,"Male","Bird","Canary","Full Service",19,"John","888-888-8888", "Apple Pay");


/* register function */
const txtName = document.getElementById('petName');
const txtAge = document.getElementById('petAge');
const txtGender = document.getElementById('petGender');
const txtType = document.getElementById('petType');
const txtBreed = document.getElementById('petBreed');
const txtService = document.getElementById('petService');
const txtPrice = document.getElementById('servicePrice');
const txtOwner = document.getElementById('ownersName');
const txtContact = document.getElementById('contactPhone');
const txtPayment = document.getElementById('paymentOption');

function register(){
    var thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtType.value,txtBreed.value,txtService.value,txtPrice.value,txtOwner.value,txtContact.value,txtPayment.value);
    salon.pets.push(thePet);
    displayTable(thePet);
    clear();
    registeredPets();
    profitCalculation();
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtType.value="";
    txtBreed.value="";
    txtService.value="";
    txtPrice.value="";
    txtOwner.value="";
    txtContact.value="";
    txtPayment.value="";
}

function registeredPets(){
    document.getElementById('registeredPets').innerHTML=`Number of pets: ${salon.pets.length}`;
}


function profitCalculation(){
    var total=0;
    for(var i=0;i<salon.pets.length;i++){
        total=total + Number(salon.pets[i].price);
    }
    document.getElementById('profits').innerHTML=`Profits: $ ${total}`;
}

function deletePet(petId){
    //delete from the array
    //travel the array to search the desired pet to delete
    for(var i=0; i<salon.pets.length; i++){
        if(salon.pets[i].id===petId){
        indexDelete=i; //storing the position
        }
    }
    salon.pets.splice(indexDelete,1);
    //delete pet from html
    //remove
    $('#'+petId).remove();
}

function search(){
    // get the value from the input $('#petSearch') .val(); store it in a variable
    var searchString = $('#searchPet').val();
    var searchIndex;

    for(var i=0;i<salon.pets.length;i++){
        // search by name || service
        if(searchString.toLowerCase()===salon.pets[i].name.toLowerCase() || salon.pets[i].service.toLowerCase()===searchString.toLowerCase())
        {
            searchIndex=i;
        }
        else{
            console.log("No");
        }
    }
    console.log(searchIndex);
// highlight the found pet on table
    $('#' + searchIndex).addClass('highlight');



}

function init(){
    
    /* display info on the footer */
    text=`
    ${salon.name}, ${salon.address.street} ${salon.address.number} 
    <br>
    It is open from ${salon.hours.open} to ${salon.hours.close}
    `;
    document.getElementById('footer-info').innerHTML=text;

    salon.pets.push(scooby);
    displayTable(scooby);
    salon.pets.push(scrappy);
    displayTable(scrappy);
    salon.pets.push(tweetie);
    displayTable(tweetie);
    registeredPets();
    profitCalculation();
   
    // hook events
    $('#btn-register').on('click', register);
    $('#btn-search').on('click', search);
    $('#searchPet').keypress(function(e){
        //display hello if user hits enter
        if(e.key==="Enter"){
            search();
        }
    });
    $('#paymentOption').keypress(function(e){
        if(e.key==="Enter"){
            register();
        }
    });
}

window.onload=init;
