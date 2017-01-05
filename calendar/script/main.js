/**
 * Created by longcz on 2017/1/5.
 */

function isLeapYear(year) {
  return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);
}

function getDaysByMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function firstDayWeek(year, month) {
  return new Date(year + "/" + month + "/1").getDay();
}

function generateHTML(year, month, selectedDays) {
  var begin = firstDayWeek(year, month);
  var days = getDaysByMonth(year, month);
  var totalCells = Math.ceil((days + begin) / 7) * 7;
  var HTML = [];
  var dayNum = 1;
  for (var i = 0; i < totalCells; i++) {
    if (i % 7 === 0) {
      HTML.push("<tr>");
    }
    //第一个星期
    if (i < begin || dayNum > days) {
      HTML.push("<td></td>");
    } else {
      HTML.push("<td>" + (dayNum++) + "</td>");
    }
    if (i % 7 === 6) {
      HTML.push("</tr>");
    }
  }
  return HTML.join("");
}