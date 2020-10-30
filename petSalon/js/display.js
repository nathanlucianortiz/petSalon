// Document Object Model (DOM)
var links=document.getElementsByTagName('a');

for(var i=0;0<links.length;i++){
    links[i].setAttribute('class', 'bordered');
    links[i].setAttribute('target', '_blank');
}

const pets= document.getElementById("pets");
var h1=document.createElement("h1");
var text=document.createTextNode("Hello World");

h1.appendChild(text);
pets.appendChild(h1);


// display the names and ages of the registered pets
//hint: for 

var ul= document.createElement('ul');
for(var i=0;i<salon.pets.length;i++){
    var li=document.createElement('li');
    var text2=document.createTextNode(`${salon.pets[i].name}
    ${salon.pets[i].age}`);
    li.appendChild(text2);
    ul.appendChild(li);
}
pets.appendChild(ul);
