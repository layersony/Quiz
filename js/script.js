//business logic

//student name, scores object
let Student = function(fname, sname){
  this.firstname = fname;
  this.surname = sname;
  this.arrayscores = [];
}

Student.prototype.fullname = function(){
  return this.firstname +" "+ this.surname
}

let TestScore = function(){
  total = 0
  for (var i=0; i<arguments.length; i++){
    total += arguments[i]
  }
  return total
}


//marks
//total for each student + merit


//user logic

$(document).ready(function(){
  $('#takequiz').on('click', function(){
    let fName = $('#firstname').val();
    let sName = $('#surname').val();

    let newStudent = new Student(fName, sName)
    if(fName && sName){
      alert(newStudent.fullname())
    }
  });
});