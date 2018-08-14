// FETCH API

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);


// Get local file data
function getText(e) {
    // console.log('Get Text'); 
    fetch('test.txt')  // return's promise
        .then(function (response) { 
            // console.log(response);
            return response.text();  // 
        })
        .then(function (data) { // grab data from promise
            //  console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch(function (error) {
            console.log(error);
        })  
}


// Get local JSON data
function getJson(e) {
    fetch('users.json')  // return's promise
        .then(function (response) { 
            // console.log(response);
            return response.json();  // 
        })
        .then(function (data) { // grab data from promise
            // console.log(data);
            let output = '';
            data.forEach(user => {
                output += `<li>ID:${user.id} Name: ${user.name} Company: ${user.company} Phone: ${user.phone}</li>`
            });

            document.getElementById('output').innerHTML = output;
        })
        .catch(function (error) {
            console.log(error);
        })  
}