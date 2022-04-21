// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]



// Your code goes here

function displaysingleContact(contactsList){
  
    let createImg = document.createElement("img");
    let createDiv = document.createElement("div");
    let createP = document.createElement("p")
  
    document.querySelector('#display_all_contacts').appendChild(createDiv);
    createDiv.appendChild(createImg).setAttribute('src', './img/aramaki.png')
    createDiv.appendChild(createP).setAttribute('id', '6')
    createP.innerText = contactsList[6].name

    createImg = document.createElement("img");
    createDiv = document.createElement("div");
    createP = document.createElement("p")
    document.querySelector('#display_all_contacts').appendChild(createDiv);
    createDiv.appendChild(createImg).setAttribute('src', './img/batou.png')
    createDiv.appendChild(createP).setAttribute('class', '5')
    createP.innerText = contactsList[5].name

    createImg = document.createElement("img");
    createDiv = document.createElement("div");
    createP = document.createElement("p")
    document.querySelector('#display_all_contacts').appendChild(createDiv);
    createDiv.appendChild(createImg).setAttribute('src', './img/ishikawa.png')
    createDiv.appendChild(createP).setAttribute('class', '4')
    createP.innerText = contactsList[4].name

    createImg = document.createElement("img");
    createDiv = document.createElement("div");
    createP = document.createElement("p")
    document.querySelector('#display_all_contacts').appendChild(createDiv);
    createDiv.appendChild(createImg).setAttribute('src', './img/motoko.png')
    createDiv.appendChild(createP).setAttribute('class', '3')
    createP.innerText = contactsList[3].name

    createImg = document.createElement("img");
    createDiv = document.createElement("div");
    createP = document.createElement("p")
    document.querySelector('#display_all_contacts').appendChild(createDiv);
    createDiv.appendChild(createImg).setAttribute('src', './img/saito.png')
    createDiv.appendChild(createP).setAttribute('class', '2')
    createP.innerText = contactsList[2].name

    createImg = document.createElement("img");
    createDiv = document.createElement("div");
    createP = document.createElement("p")
    document.querySelector('#display_all_contacts').appendChild(createDiv);
    createDiv.appendChild(createImg).setAttribute('src', './img/togusa.png')
    createDiv.appendChild(createP).setAttribute('class', '0')
    createP.innerText = contactsList[0].name

    
    
 
  // createImg[0].setAttribute('src', './img/togusa.png')
  // createImg[1].setAttribute('src', './img/tachikoma.png')
  // createImg[2].setAttribute('src', './img/saito.png')
  // createImg[3].setAttribute('src', './img/motoko.png')
  // createImg[4].setAttribute('src', './img/ishikawa.png')
  // createImg[5].setAttribute('src', './img/batou.png')
  // createImg[6].setAttribute('src', './img/aramaki.png')
}
