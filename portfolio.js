let request = new XMLHttpRequest();
request.open("GET","data.json",false);
request.send(null);
let data = JSON.parse(request.responseText);
console.log(data);

let personalInfo = data.PersonalInfo;
let images = data.Images;

function fillImage(){
    let divDom = document.querySelectorAll(".carousel-item");
    let imgPath = [];
    for (index in images){
         imgPath.push(images[index]);
         console.log(imgPath);
    }
    for (let i = 0 ; i<divDom.length;i++){
        let img = document.createElement("img");
        img.classList.add("d-block", "w-100", "rounded-circle");
        img.src=imgPath[i];
        divDom[i].appendChild(img);
    }
}


function fillPersonalInfo() {
  let listDom = document.querySelectorAll(".personal-info li");
  console.log(listDom[0].className);
  for (index in listDom) {
    switch (listDom[index].className) {
      case "name":
        listDom[index].innerHTML = "<b>Nom: </b>" + personalInfo.Name;
        break;
      case "alias":
        listDom[index].innerHTML = "<b>Alias: </b>" + personalInfo.Alias;
        break;
      case "age":
        listDom[index].innerHTML = "<b>Âge: </b>" + personalInfo.Age;
        break;
      case "gender":
        listDom[index].innerHTML = "<b>Sexe: </b>" + personalInfo.Gender;
        break;
      case "date":
        listDom[index].innerHTML =
          "<b>Date de naissance: </b>" + personalInfo.DOB;
        break;
      case "postal":
        listDom[index].innerHTML =
          "<b>Code Postale: </b>" + personalInfo.PostalCode;
        break;
      case "email":
        listDom[index].innerHTML = "<b>Courriel: </b>" + personalInfo.Email;
        break;
      case "address":
        listDom[index].innerHTML = "<b>Adresse: </b>" + personalInfo.Address;
        break;
      default:
        break;
    }
  }
}



fillImage();
fillPersonalInfo();
