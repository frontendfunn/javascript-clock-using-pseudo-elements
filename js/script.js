/*
 * Included Jquery
 */ $(document).ready(function () {
  var getFirstDigit = function (number) {
    return parseInt(number / 10);
  };

  var getLastDigit = function (number) {
    return parseInt(number % 10);
  };

  var digit = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  setInterval(function () {
    var date = new Date();
    var secondsLast = getLastDigit(date.getSeconds());
    var secondsFirst = getFirstDigit(date.getSeconds());
    var minutesLast = getLastDigit(date.getMinutes());
    var minutesFirst = getFirstDigit(date.getMinutes());
    var hoursLast = getLastDigit(date.getHours());
    var hoursFirst = getFirstDigit(date.getHours());
    /**
     * Seconds
     *
     */
    $(".secondsLast")
      .attr("class", "digit secondsLast")
      .addClass(digit[secondsLast]);

    $(".secondsFirst")
      .attr("class", "digit secondsFirst")
      .addClass(digit[secondsFirst]);

    /**
     * Minutes
     */

    $(".minutesLast")
      .attr("class", "digit minutesLast")
      .addClass(digit[minutesLast]);

    $(".minutesFirst")
      .attr("class", "digit minutesFirst")
      .addClass(digit[minutesFirst]);

    /**
     * Hours
     */
    $(".hoursLast").attr("class", "digit hoursLast").addClass(digit[hoursLast]);

    $(".hoursFirst")
      .attr("class", "digit hoursFirst")
      .addClass(digit[hoursFirst]);
  }, 1000);
});
