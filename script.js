//WHEN i open up the planner
//THEN the current date is displayed at the top
var currentDayEl = moment().format('dddd, MMM Do, YYYY'); 
$("#currentDay").text(currentDayEl);      
console.log(currentDayEl)

//WHEN I scroll down
//THEN I am presented with timeblocks for the business hours
//WHEN I view the time blocks for that day
//THEN each time block is color coded to indicate whether it is in the past, present, or future
var currentHour;
//WHEN I click into a timeblock
//THEN I can enter an event
//WHEN I click the save button for that event
//THEN the text for that event is saved in local storage
var eventInputEl = document.querySelectorAll('.event-log');

function renderEvent(){
    localStorage.getItem('');
    $(".row").each(function (row) {
        row.attr('id').siblings('input').val()
})

renderEvent();

function hourPassed(){
    var currentTime = JSON.stringify(moment().format('H').toString())
    console.log(currentTime)
    
}}

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

console.log(JSON.stringify(moment().format('H').toString()))





/*var timeTracker = moment(currentHour, 'hh:mm:ss').diff(moment(), 'hours');
var currentHour = dueDateInputEl.val().trim();*/
