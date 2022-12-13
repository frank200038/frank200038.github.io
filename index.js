let request = new XMLHttpRequest();
request.open("GET","data.json",false);
request.send(null);
let data = JSON.parse(request.responseText);

let personalInfo = data.PersonalInfo;
let education = data.Education;
let abilities = data.Abilities;
let experiences = data.Experience;
let images = data.Images;

function fillSectionTitle(){
    let section = document.querySelectorAll(".cv-section-title");
    section[0].innerHTML = "Histoire d'éducation";
    section[1].innerHTML = "Mes compétences";
    section[2].innerHTML = "Mes expériences";
}

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


function fillPersonalInfo(){
    let listDom = document.querySelectorAll(".personal-info li");
    console.log(listDom[0].className);
    for (index in listDom){
        switch (listDom[index].className) {
            case "name":
                listDom[index].innerHTML = "<b>Nom: </b>"+ personalInfo.Name;
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
                listDom[index].innerHTML = "<b>Date de naissance: </b>" + personalInfo.DOB;
                break;
            case "postal":
                listDom[index].innerHTML = "<b>Code Postale: </b>" + personalInfo.PostalCode;
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

function fillEducation(){

    let universityInfo = education.University;
    let primaryInfo = education.Primary;
    let educationCard = document.querySelectorAll("[class*='education-card']:not([class*='education-card-body'])");
    let educationCardBody = document.querySelectorAll("[class*='education-card-body']");
    let listDom = document.querySelectorAll("[class*='education-card-body'] li");
    let contentBody = document.querySelectorAll("[class*='education-accomp']");
   
    let img = document.createElement("img");
    img.src=universityInfo.Image;
    educationCard[0].insertBefore(img, educationCardBody[0]);

    img = document.createElement("img");
    img.src = primaryInfo.Image;
    educationCard[1].insertBefore(img, educationCardBody[1]);

    let para = document.createElement("p");
    para.innerHTML = universityInfo.Content;
    para.style.maxWidth = "700px";
    contentBody[0].appendChild(para);

    para = document.createElement("p");
    para.innerHTML = primaryInfo.Content;
    para.style.maxWidth = "700px";
    contentBody[1].appendChild(para);

    for (let index = 0;index<listDom.length/2;index++) {
      switch (listDom[index].className) {
        
        case "name":
          listDom[index].innerHTML = "<b>Nom: </b>" + universityInfo.Name;
          listDom[index+5].innerHTML = "<b>Nom: </b>" + primaryInfo.Name;
          break;
        case "motto":
          listDom[index].innerHTML = "<b>Devise: </b>" + universityInfo.Motto;
          listDom[index+5].innerHTML = "<b>Devise: </b>" + primaryInfo.Motto;
          break;
        case "location":
          listDom[index].innerHTML = "<b>Emplacement: </b>" + universityInfo.Location;
          listDom[index+5].innerHTML ="<b>Emplacement: </b>" + primaryInfo.Location;
          break;
        case "degree":
          listDom[index].innerHTML = "<b>Diplôme: </b>" + universityInfo.Degree;
          listDom[index + 5].innerHTML = "<b>Diplôme: </b>" + primaryInfo.Degree;
          break;
        case "duration":
          listDom[index].innerHTML = "<b>Durée: </b>" + universityInfo.Duration;
          listDom[index+5].innerHTML = "<b>Durée: </b>" + primaryInfo.Duration;
          break;
        default:
          break;
      }
    }

}

function fillAbilityInfo() {
    let abilityBody = document.querySelectorAll("[class|='ability-body']");
    let abilityMain = document.querySelectorAll("[class|='ability-main']");
    
    
    for (let i = 0; i<abilityBody.length;i++){
        let title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerHTML = abilities[String(i + 1)]["Title"];
        abilityBody[i].appendChild(title);

        let img = document.createElement("img");
        img.src = abilities[String(i + 1)]["Image"];
        abilityMain[i].insertBefore(img, abilityBody[i]);

        let content = document.createElement("p");
        content.classList.add("card-text");
        content.innerHTML = abilities[String(i + 1)]["Content"];
        abilityBody[i].appendChild(content);
    }
}

function fillExperience(){
    let date = document.querySelectorAll(".date-exp");
    let listOne = document.querySelectorAll(".detail-list-1>li");
    let listTwo = document.querySelectorAll(".detail-list-2>li");
    let subList = document.querySelectorAll(".detail-sublist");
    let exp = [experiences["First"], experiences["Second"]];

    for(let i = 0 ; i<date.length;i++){
        date[i].innerHTML = exp[i]["Duration"];
        console.log(exp[i]);
        console.log(listOne[i].className);
        switch (listOne[i].className) {
          case "job":
            listOne[i].innerHTML = "<b>Emploi: </b>" + exp[0].Job;
            listTwo[i].innerHTML = "<b>Emploi: </b>" + exp[1].Job;
            break;
          case "place":
            listOne[i].innerHTML = "<b>Endroit: </b>" + exp[0].Place;
            listTwo[i].innerHTML = "<b>Endroit: </b>" + exp[1].Place;
            break;
          default:
            break;
        }
    }

     let bold = document.createElement("b");
     bold.innerHTML = "Description: ";
     listOne[2].insertBefore(bold, subList[0]);

     bold = document.createElement("b");
     bold.innerHTML = "Description: ";
     listTwo[2].insertBefore(bold, subList[1]);


    let descriptionOne =  exp[0].Description;
    let descriptionTwo = exp[1].Description;

    for(let i = 0 ; i<3;i++){
        let sublistItemOne = document.createElement("li");
        sublistItemOne.innerHTML = descriptionOne[String(i + 1)];
        subList[0].appendChild(sublistItemOne);

        let sublistItemTwo = document.createElement("li");
        sublistItemTwo.innerHTML = descriptionTwo[String(i + 1)];
        subList[1].appendChild(sublistItemTwo);
    }

}

fillSectionTitle();
fillPersonalInfo();
fillImage();
fillEducation();
fillAbilityInfo();
fillExperience();