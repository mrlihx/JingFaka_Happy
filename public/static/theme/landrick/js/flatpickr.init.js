//Flatpickr
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

$("#checkin-date").flatpickr({
    defaultDate:today
});

$("#checkout-date").flatpickr({
    defaultDate:tomorrow
});