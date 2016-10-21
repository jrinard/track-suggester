// Business Logic
var trackChoice = function(val1,val2,val3,val4,val5) { //Function passing in val1-val5 for conditonal statement and assigning the result to a variable

  var answer = (val1 + val2 + val3 + val4 + val5); // conditional statement by comparing values from user input to predetermined values
  if (answer <= 5) {                                // Then assinging it to an answer
    return("#ruby"); // stops the function and returns value to the caller. makes final track #ruby div
  } else if ((answer >= 6)&&(answer <= 10)){
    return("#c");
  } else if (answer >= 11) {
    return("#design")
  }
};

// Front-end Logic
$(document).ready(function(){ // Function that waits for the document to load before being ready.
    $("#main form").submit(function(event){
      var nameInput = $("input#name").val();
      var q1Input = parseInt($("#question1").val()); // Grabbing user input value and changing datatype to integer then assinging it to a variable
      var q2Input = parseInt($("#question2").val());
      var q3Input = parseInt($("#question3").val());
      var q4Input = parseInt($("#question4").val());
      var q5Input = parseInt($("#question5").val());

      var finaltrack = trackChoice(q1Input, q2Input, q3Input, q4Input, q5Input);// calling the function choice while placing user input. Assigning it to a variable
      $("#c, #ruby, #design, #main").hide(); // hiding any previous revealed divs
      $(".name").text(nameInput);// Assigns inputed form name into class
      $("#results").show();//shows div
      $(finaltrack).show(); // revealing the div as a result to the user

    event.preventDefault();// Makes the submit event handler not disapear when pressed.
  });
});
