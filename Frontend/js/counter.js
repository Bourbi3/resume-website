window.addEventListener('DOMContentLoaded',(event) =>{
    getVisitCount();
})
const functionApi = "https://getwebsitecounter.azurewebsites.net/api/GetResumeCounter?code=5f0hFcEAzZIUUDVvdU371HYO8ARTaKE5l4DCZQHOEYZ6AzFu6bQ7mA==";
const functionApiLocal = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () =>{
    let count = 30;
    fetch(functionApi).then(response =>{
        return response.json()
    }).then(response =>{
        console.log("Website called funtionApi");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error);
    });
    return count;
}