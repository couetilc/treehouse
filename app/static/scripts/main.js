var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// Display message when profile picture is clicked

// Display Time and Date of Current Page Load
function formatDateTime(date_obj) {
    var months = ["January", "February", "March", "April"
                 , "May", "June", "July", "August"
                 , "September", "October", "November", "December"];
    var date_string = date_obj.getHours() + ":" + date_obj.getMinutes() 
                      + " " + months[date_obj.getMonth()] 
                      + " " + date_obj.getDate() 
                      + ", " + date_obj.getFullYear();
    return date_string;
}

var dateHeading = document.querySelector('h2');
var date_obj = new Date();
dateHeading.textContent = formatDateTime(date_obj);

