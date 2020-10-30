function display(aPet){
    var text="";

    var dogIcon= '<i class="fas fa-dog"></i>';
    var catIcon= '<i class="fas fa-cat"></i>';
    var birdIcon= '<i class="fas fa-crow"></i>';
       
        if(aPet.type==="Dog"){
            icon=dogIcon;
        }else if(aPet.type==="Cat"){
            icon=catIcon;
        }else if(aPet.type==="Bird"){
            icon=birdIcon;
        }else{
            icon= '<i class="fas fa-question-circle"></i>';
        }
        
        text=`
        <div id="${aPet.id}" class="pet">
            ${icon}
            <h2> Name: ${aPet.name} </h2>
            <p> Age: ${aPet.age} </p>
            <p> Gender: ${aPet.gender} </p>
            <p> Type: ${aPet.type} </p>
            <p> Breed: ${aPet.breed} </p>
            <p> Service: ${aPet.service} </p>
            <p> Price: $ ${aPet.price} </p>
            <p> Owner: ${aPet.ownersName} </p>
            <p> Contact Phone: ${aPet.contactPhone} </p>
            <p> Payment Option: ${aPet.paymentOption} </p>
            <button class="btn btn-danger" onclick='deletePet(${aPet.id})'> Delete </button>
        </div>
        `;
        $('#pets').append(text);

}

function displayTable(aPet){
    //create the template string (`${name of the var}`)
    var tr=`
        <tr id="${aPet.id}">
            <td> ${aPet.id} </td>
            <td> ${aPet.name} </td>
            <td> ${aPet.age} </td>
            <td> ${aPet.gender} </td>
            <td> ${aPet.type} </td>
            <td> ${aPet.breed} </td>
            <td> ${aPet.service} </td>
            <td> ${aPet.price} </td>
            <td> ${aPet.ownersName} </td>
            <td> ${aPet.contactPhone} </td>
            <td> ${aPet.paymentOption} </td>
            <td><button class="btn btn-danger" onclick='deletePet(${aPet.id})'> Delete </button></td>
        </tr>`;
        $('#petTable').append(tr);

}


