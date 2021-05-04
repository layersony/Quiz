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
window.onload = function () {
  def = localStorage.length
  if (localStorage.length === 0) {
    saveObject('default', def);
    location.reload();
  } else {
    def = localStorage.length
    console.log('hapa siko')
    $("#submittest").on('click', function () {
      def += 1
      saveObject('default', def)
    })
  }
};

let correct = ['2|HTML', '3|js', '3|yes']

//user logic

$(document).ready(function () {
  $('#takequiz').on('click', function () {

    let fName = $('#firstname').val();
    let sName = $('#surname').val();
    if (fName && sName) {
      $('#nwstude').toggle()
      $('.questions').toggle()
      $('#formquiz').submit(function (event) {
        event.preventDefault()
        let quiz1 = $('input:radio[name=1]:checked').val();
        let quiz2 = $('input:radio[name=2]:checked').val();
        let quiz3 = $('input:radio[name=3]:checked').val();

        examScore = [];
        let vari = [quiz1, quiz2, quiz3]

        correct.forEach(function (corr, i) {
          let item = corr.split('|');
          if (vari[i] === item[1]) {
            examScore.push(parseInt(item[0]))
            $('#tick' + (i + 1)).prepend('<i class="far fa-check"></i>')
          } else {
            examScore.push(0);
            $('#tick' + (i + 1)).prepend('<i class="far fa-times"></i>')
          }
        })

        let score = TestScore(examScore)
        let newStudent = new Student(fName, sName, score)
        saveObject('student-' + def, newStudent)

        $('#finalScore').text(score)

        $('#nextStudent').on('click', function () {
          location.reload();
          def += 1
        })

      });
    }else{
      alert('Please Enter your Full Name')
    }
  });
});

window.onload = function(){
  for (let i=0; i < localStorage.length; i++){
    let tosplit = localStorage.key(i).split('-');
    if (tosplit[0] === 'student'){
      let one1 = localStorage.key(i);
      let stude = getObjects(one1);
      let perScore = ((stude.scores*100)/10)
      $("#overall").append("<tr><td>"+(i+1)+"</td><td>"+stude.firstname+" "+stude.surname+"</td><td>"+ perScore+"</td></tr>");
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#fff',
    lineColor: '#fff'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);