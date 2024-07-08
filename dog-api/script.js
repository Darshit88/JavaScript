// FETCH
const clickMe = () => {
  fetch("readme.txt")
    .then((response) => response.text())
    .then((data) => {
        console.log(data);
        document.getElementById("para").innerHTML = data
    }).catch((err) => console.log(err))
};



const studentData = () => {
    fetch("Student_data.json").then((response) => response.text())
    .then((data) => {
        console.log(data);
        console.log(data[0].name);
        console.log(data[0].age);
    
        // for (let x in data) {
        //     document.write(`${data.name} - ${data.age} <br>`)
        // }
    })
    .catch((err) => console.log(err))
}



// DOG - API

const dogImg = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.message);
        let image = document.getElementById("img")
        let imgURL = data.message
        image.src = imgURL
        image.style.display = "block"
    
    })
      .catch((err) => console.log(err));
}