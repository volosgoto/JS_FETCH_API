// FETCH API

document.getElementById('button1').addEventListener('click', getText);

function getText(e) {
    // console.log('Get Text'); 
    fetch('test.txt')  // return's promise
        .then(function (response) { 
            // console.log(response);
            return response.text();  // 
        })
        .then(function (data) { // grab data from promise
            console.log(data);
        })
        .catch(function (error) {
            console.log(error);
        })  
}
