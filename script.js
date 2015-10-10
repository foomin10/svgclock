var $ = {
  id: function(id) {
      return document.getElementById(id);
  },
};

var now = moment();
var nowTime = new Date(); // x
var angle_of_second_hand = now.seconds() / 60 * 360;
var angle_of_minute_hand = now.minutes() / 60 * 360;
var angle_of_hour_hand = (now.hours() % 12) / 12 * 360;

$.id('secondHandLine').setAttribute('transform', `rotate(${angle_of_second_hand})`);
$.id('minuteHandLine').setAttribute('transform', `rotate(${angle_of_minute_hand})`);
$.id('hourHandLine').setAttribute('transform', `rotate(${angle_of_hour_hand})`);

$.id('calendarMonth').textContent = now.format('MMMM');
$.id('calendarYear').textContent = now.years();

var firstDay = now.clone().date(1).day();
var endDate = now.daysInMonth()
var dayCounter = 1;

for(var i=0; i <= 37; i++) {
  if(i > firstDay) {
    $.id('calendarDay' + i).textContent = `0${dayCounter}`.slice(-2);
    dayCounter++;
    if(dayCounter > endDate) {
      break;
    }
  }
}

$.id('calendarDay' + (firstDay + now.date())).setAttribute('fill', '#e76c6c');
$.id('calendarDay' + (firstDay + now.date())).setAttribute('font-weight', 'bold');
