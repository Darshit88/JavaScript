const fetchData = () => {
    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const responseData = JSON.parse(this.responseText)
            document.getElementById("demo").innerHTML = JSON.stringify(responseData)
            document.getElementById("demo").innerHTML = this.responseText
            
            let index = document.getElementById("index").value
            
            const id = responseData[index].id
            const name = responseData[index].name
            const city = responseData[index].address.city
            const email = responseData[index].email
            const phone = responseData[index].phone
            document.getElementById("demo").innerHTML = ` ID : ${id} NAME : ${name} CITY : ${city} EMAIL : ${email} PHONE : ${phone}`
        }
        else if (this.readyState == 4 && this.status == 400) {
            console.log("Can Not Fetch Data.....");
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    xhttp.send()
}