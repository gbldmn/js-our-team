const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

// let arrayMembri = ['6','6','6','6','6','6'];
// for(let k=0; k < arrayMembri.length; k++) {
//     console.log(arrayMembri.length)
//     let pic = document.createElement('img'); 
//     pic.src = team.image;
//     console.log(pic.src)
// }

// let photo = newArray[''];
// let str;

// let photo[0]="img/angoli.jpg";
// let photo[1]="img/equazioni.jpg";
// let photo[2]="img/frazioni.jpg";
// let photo[3]="img/calcolatrice.jpg";
// let photo[4]="img/annobisestile.jpg";
// let photo[5]="img/palindroma.jpg";

// let arrayImmagini = ['img/angela-caroll-chief-editor.jpg','img/angela-lopez-social-media-manager.jpg','img/barbara-ramos-graphic-designer.jpg','img/scott-estrada-developer.jpg','img/walter-gordon-office-manager.jpg','img/wayne-barnett-founder-ceo.jpg']
// function foto() {    
//  for(let k=0; k < arrayImmagini.length; k++)
//     console.log(arrayImmagini[k])
//     var img = document.createElement("img");
    
    
//     document.body.appendChild(img);
// }
// foto()

  
 for(let i=0; i < team.length; i++) {
     console.log(team)
     let elementiSingoli = team[i]
     console.log(elementiSingoli)
     document.querySelector('.row').innerHTML += `
     <div class="card border-black" style="width: ;">
     <img src="img/${elementiSingoli.image}"  alt="...">
        <div class="card-body">
        <h5 class="card-title">${elementiSingoli.name}</h5>
        <p class="card-text">${elementiSingoli.role}</p>
        <a href="#" class="btn btn-primary">clicca</a>
       </div>
     </div>`
 }
  
  
  
  
  
  