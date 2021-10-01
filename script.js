//WHEN i open up the planner
//THEN the current date is displayed at the top
var currentDayEl = moment().format('dddd, MMM Do, YYYY'); 
$("#currentDay").text(currentDayEl);      
console.log(currentDayEl)

//WHEN I scroll down
//THEN I am presented with timeblocks for the business hours
//WHEN I view the time blocks for that day
//THEN each time block is color coded to indicate whether it is in the past, present, or future
//var currentHour;
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that event
//THEN the text for that event is saved in local storage
var eventInputEl = document.querySelectorAll('.event-log');
//var currentTime = (JSON.stringify(moment().format('H').toString()))

var currentTime = (new Date()).getHours();

renderEvent();

function renderEvent(){
    $('.row').each(function () {
        localStorage.getItem('input')
        //localStorage.getItem('input')
        $(this).siblings().val();
    }
)}

$('input').each(function(){
    if($(this).data('hour') < currentTime) {  
        $(this).addClass("past");
    } else if($(this).data('hour') == currentTime) { 
        $(this).addClass("present");
    } else {  
        $(this).addClass("future");
    } 
    $(this).val(eventInputEl[$(this).data('hour')]);
}) 


$('.saveBtn').click(function(event){
    event.preventDefault();
    //event.stopPropagation();
    var time = $(this).parent().attr('id')
    var input = $(this).siblings('input').val()
    console.log(input)
    localStorage.setItem(time,input);
})


console.log(localStorage)

/*console.log(moment().toString())
console.log(JSON.stringify(moment().format().toString()))*/

/*var timeTracker = moment(currentHour, 'hh:mm:ss').diff(moment(), 'hours');
var currentHour = dueDateInputEl.val().trim();*/
