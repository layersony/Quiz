//business logic

//student name, scores object
let Student = function(fname, sname, scores){
  this.firstname = fname;
  this.surname = sname;
  this.scores = scores;
}

Student.prototype.fullName = function(){
  return this.firstname+" "+ this.surname
}

let TestScore = function(singlearrays){
  total = 0
  singlearrays.forEach(function(singlearray){
    total += singlearray
  })
  return total
}

let getObjects = function(userkey){
  return JSON.parse(localStorage.getItem(userkey))
};

let saveObject = function(userkey, sObject){
  let tostring = JSON.stringify(sObject);
  return localStorage.setItem(userkey, tostring)
};

let def = 0
window.onload = function(){
    if (localStorage.length === 0){
      saveObject('default', def);
    location.reload();
  }else{
    def = localStorage.length
    $("#submittest").on('click', function(){
      def += 1
      saveObject('default', def)
      // location.reload()
    })
  }
};

//user logic

$(document).ready(function () {
  $('#takequiz').on('click', function () {
    let fName = $('#firstname').val();
    let sName = $('#surname').val();

    $('#formquiz').submit(function (event) {
      event.preventDefault()
      let quiz1 = $('input:radio[name=1]:checked').val();
      let quiz2 = $('input:radio[name=2]:checked').val();
      let quiz3 = $('input:radio[name=3]:checked').val();

      examScore = [];

      if (quiz1 === 'HTML') {
        examScore.push(2);
        $('#tick1').prepend('<i class="far fa-check"></i>')
      } else {
        examScore.push(0);
        $('#tick1').prepend('<i class="far fa-times"></i>')
      }

      if (quiz2 === 'js') {
        examScore.push(3);
        $('#tick2').prepend('<i class="far fa-check"></i>')
      } else {
        examScore.push(0);
        $('#tick2').prepend('<i class="far fa-times"></i>')
      }

      if (quiz3 === 'yes') {
        examScore.push(3);
        $('#tick3').prepend('<i class="far fa-check"></i>')
      } else {
        examScore.push(0);
        $('#tick3').prepend('<i class="far fa-times"></i>')
      }

      let score = TestScore(examScore)
      let newStudent = new Student(fName, sName, score)
      saveObject('student-'+def,newStudent)

      $('#finalScore').text(score)

      $('#nextStudent').on('click', function(){
        location.reload();
      })

    });
  });
});

window.onload = function(){
  for (let i=0; i < localStorage.length; i++){
    let tosplit = localStorage.key(i).split('-');
    if (tosplit[0] === 'student'){
      let one1 = localStorage.key(i);
      let stude = getObjects(one1);
      let perScore = ((stude.arrayscores*100)/10)
      console.log(stude)
      $("#overall").append("<tr><td>"+(i+1)+"</td><td>"+stude.firstname+" "+stude.surname+"</td><td>"+ perScore+"</td></tr>");

    }
  }
}