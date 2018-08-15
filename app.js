// FETCH API

document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);


// Get local file data
// function getText() {
//     // console.log('Get Text'); 
//     fetch('test.txt')  // return's promise
//         .then(function (response) { 
//             // console.log(response);
//             return response.text();  // 
//         })
//         .then(function (data) { // grab data from promise
//             //  console.log(data);
//             document.getElementById('output').innerHTML = data;
//         })
//         .catch(function (error) {
//             console.log(error);
//         })  
// }


// Get local file data
function getText() {
    fetch('test.txt')
        .then(response => response.text())
        .then(data => document.getElementById('output').innerHTML = data)
        .catch(error => console.log(error))
}


// Get local JSON data
// function getJson() {
//     fetch('users.json')  // return's promise
//         .then(function (response) {  
//             // console.log(response);
//             return response.json();  // 
//         })
//         .then(function (data) { // grab data from promise
//             // console.log(data);
//             let output = '';
//             data.forEach(user => {
//                 output += `<li>ID:${user.id} Name: ${user.name} Company: ${user.company} Phone: ${user.phone}</li>`
//             });

//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function (error) {
//             console.log(error);
//         })  
// }


// Get local JSON data
function getJson() {
    fetch('users.json')  // return's promise
        .then(response => response.json())
        .then(data => { // grab data from promise
            // console.log(data);
            let output = '';
            data.forEach(user => {
                output += `<li>ID:${user.id} Name: ${user.name} Company: ${user.company} Phone: ${user.phone}</li>`
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(error => console.log(error));
}


// Get External
// function getExternal() {
//     fetch('https://api.github.com/users')  // return's promise
//         .then(function (response) {  
//             // console.log(response);
//             return response.json();  // 
//         })
//         .then(function (data) { // grab data from promise
//             // console.log(data);
//             let output = '';
//             data.forEach(user => {
//                 output += `<li>ID:${user.id} Login: ${user.login}</li>`
//             });

//             document.getElementById('output').innerHTML = output;
//         })
//         .catch(function (error) {
//             console.log(error);
//         })  
// }


// Get External
function getExternal() {
    fetch('https://api.github.com/users')  // return's promise
        .then(response => response.json()) 
        .then(data => {
            let output = '';
            data.forEach(user => {
                output += `<li>ID:${user.id} Login: ${user.login}</li>`
            });

            document.getElementById('output').innerHTML = output;

        })
        .catch(error => console.log(error))
}