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

let TestScore = function(singlearrays){
  total = 0
  singlearrays.forEach(function(singlearray){
    total += singlearray
  })
  
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

  $('#formquiz').submit(function(event){
    event.preventDefault()
    let quiz1 = $('input:radio[name=1]:checked').val();
    let quiz2 = $('input:radio[name=2]:checked').val();
    let quiz3 = $('input:radio[name=3]:checked').val();

    examScore=[];

    if (quiz1 === 'HTML'){
      examScore.push(2);
      $('#tick1').prepend('<i class="far fa-check"></i>')
    }else{
      examScore.push(0);
      $('#tick1').prepend('<i class="far fa-times"></i>')
    }

    if (quiz2 === 'js'){
      examScore.push(3);
      $('#tick2').prepend('<i class="far fa-check"></i>')
    }else{
      examScore.push(0);
      $('#tick2').prepend('<i class="far fa-times"></i>')
    }

    if (quiz3 === 'yes'){
      examScore.push(3);
      $('#tick3').prepend('<i class="far fa-check"></i>')
    }else{
      examScore.push(0);
      $('#tick3').prepend('<i class="far fa-times"></i>')
    }


    $('#finalScore').text(TestScore(examScore))
  });
});