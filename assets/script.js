// // test link
// console.log('test');

// Assignment:
// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)

// Bonus:
// Rendere l’esercizio responsive, mandando a capo le card
// Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina (usate una foto qualunque, anche vostra se volete sentirvi parte del team! :sorridere:)

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// vogliamo prendere reteiriamo il pescaggio di un teamMember dall'array
for (let i = 0; i < teamMembers.length; i++){
  // assegno questa iterazione alla variabile teamMember
  let teamMember = teamMembers[i];

  // destrutturiamo l'oggetto teamMember estraendone le proprietà 
  let {name, role, email, img} = teamMember
  // stampiamo in console per verificare
  console.log(name, role, email, img);

  // creaimo una variabile markup in cui aggiungere le nostre variabili appena create
  const markup = `
    <div class="col-12 col-md-6 col-lg-4 d-flex">
      <div class="col-4">
        <img src="./assets/${img}" alt="" class="w-100">
      </div>
      <div class="col-8 ps-3 d-flex flex-column justify-content-center">
        <h3>${name}</h3>
        <h5>${role}</h5>
        <span>${email}</span>
      </div>
    </div>
  
  `
  // ora aggiugniamo il markup alla pagina html 
  document.getElementById('row-card').innerHTML += markup
  

}




