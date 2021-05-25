import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import Pet from './class/pet.js';
import Category from './class/category.js';
import Tag from './class/tag.js';
import User from './class/user.js';

function createUserRequest(myUser){
  let request = new XMLHttpRequest();
  
  request.open('POST', 'https://petstore.swagger.io/v2/user/', true);
  request.setRequestHeader("Content-Type", "application/json"); 
  request.onreadystatechange = function () {
    if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
      console.log("It's Okay !!!");
      let response = request.responseText;
      console.log(response);
    }
  };

  request.send(JSON.stringify(myUser));

  let response = request.response;
}

function createUser(){
  let myUser = new User();
  myUser.id = 0;
  myUser.username = "Logulasse";
  myUser.firstname = "Max";
  myUser.lastname = "Tas";
  myUser.email = "maxtas@gmail.fr";
  myUser.password = "aaabbbccc123456";
  myUser.phone = "0202020202";
  myUser.userStatus = 0;

  createUserRequest(myUser);
}

function addPetRequest(myPet){
  let request = new XMLHttpRequest();
  
  request.open('POST', 'https://petstore.swagger.io/v2/pet/', true);
  request.setRequestHeader("Content-Type", "application/json"); 
  //console.log(JSON.stringify(myPet));
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      // Print received data from server
      console.log("That's OK ! Continue ! ");

      let response = request.responseText;
      console.log(response);
    }
  };
  let data = JSON.stringify(myPet);
  request.send(data);
}

function addPetPromise(myPet){
  return new Promise(function(resolve, reject){
    let request = new XMLHttpRequest();
  
    request.open('POST', 'https://petstore.swagger.io/v2/pet/', true);
    request.setRequestHeader("Content-Type", "application/json"); 
    //console.log(JSON.stringify(myPet));
    
    let data = JSON.stringify(myPet);
    request.send(data);

    request.onreadystatechange = function () {
      if(request.status === 200 && request.responseText !== ""){
        try{
          console.log(request.responseText, "test");
          const myJSONResponse = JSON.parse(request.responseText);
          resolve(myJSONResponse);
        }catch(error){
          console.log(error);
          reject(error);
        }
      }
    };
  })
}

function addPet(){
  let myCategory = new Category();
  myCategory.id = 0;
  myCategory.name = "Dog";

  let myTag = new Tag();
  myTag.id = 0;
  myTag.name = "Retriever";

  let myPet = new Pet();
  myPet.id = 0;
  myPet.category = myCategory;
  myPet.name = "Doug";
  myPet.photoUrls = ["https://cdn.futura-sciences.com/buildsv6/images/wide1920/8/5/8/858743bb35_50169458_chien-min.jpg"];
  myPet.tags = [myTag];
  myPet.status = "available";

  addPetPromise(myPet)
    .then(myNewPet => myPet.id =  myNewPet.id)
    .catch(error => console.log(error));

  console.log(`Mon animal est ${myPet.id}`)
}

function ButtonTestAPI(props){
  return (<div>
    <button onClick={() => createUser()}>Click here to send to API</button>
  </div>);
}

function ButtonTestAPIPetStore(props){
  return (<div>
    <button onClick={() => addPet()}>Click here to send to API to PetStore</button>
  </div>);
}

ReactDOM.render(
  <ButtonTestAPI></ButtonTestAPI>,
  document.getElementById('root')
);

ReactDOM.render(
  <ButtonTestAPIPetStore></ButtonTestAPIPetStore>,
  document.getElementById('dogo')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();