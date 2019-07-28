var randomQuestions = [
  {
    question:
      '1. Which soccer player has won the golden ball award the most times?',
    answer: 'Messi'
  },
  {
    question: '2. Who won the last Copa America centenario in 2019?',
    answer: 'Chile'
  },
  {
    question: '3. Where is the next World Cup going to be held in 2022?',
    answer: 'Russia'
  },
  {
    question: '4. Who is the best goalkeeper of 2019?',
    answer: 'Neuer'
  },
  {
    question: '5. How many FIFA World Cups has Brazil won?',
    answer: '5'
  },
  {
    question: '6. Who is the highest scoring Portuguese soccer player?',
    answer: 'Ronaldo'
  },
  {
    question: '7. How many FIFA teams qualified for the last World Cup 2019?',
    answer: '31'
  },
  {
    question: '8. Which domestic league in world football is the best?',
    answer: 'Spain-La Liga'
  }
];

for (i = 0; i < randomQuestions.length; i++) {
  q = randomQuestions[i].question;
  document.getElementById('question' + [i]).textContent = q;
}
function testResults() {
  var correct = 0;
  var incorrect = 0;
  for (i = 0; i < randomQuestions.length; i++) {
    var answer = randomQuestions[i].answer;
    var guess = document.getElementById('answer' + [i]).value;
    var questionSpot = document.getElementById('question' + [i]);
    if (answer == guess) {
      questionSpot.className = 'correct';
      correct++;
    } else {
      questionSpot.className = 'incorrect';
      incorrect++;
    }
  }
  document.getElementById('correct').textContent = correct;
  document.getElementById('incorrect').textContent = incorrect;
}

document.onkeydown = function(e) {
  if (e.keyCode == 13) {
    e.preventDefault();
    testResults();
  }
};

// function startTime() {
//   var today = new Date();

//   var m = today.getMinutes();
//   var s = today.getSeconds();
//   // add a zero in front of numbers<10
//   m = checkTime(m);
//   s = checkTime(s);
//   document.getElementById('text').innerHTML = m + ':' + s;
//   var t = setTimeout(function() {
//     startTime();
//   }, 500);
// }

// function checkTime(seconds) {
//   if (seconds < 10) {
//     seconds = '0' + seconds;
//   }
//   seconds--;
//   return seconds;
// }

// function countDown(secs, elem) {
//   var element = document.getElementById(elem);
//   element.innerHTML = 'You have ' + secs + ' seconds';
//   if (secs < 1) {
//     clearTimeout(timer);
//     element.innerHTML = '<h2>Time is Up!</h2>';
//     element.innerHTML += '<a href="#">Click here now</a>';
//   }
//   secs--;
//   var timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000);
// }
