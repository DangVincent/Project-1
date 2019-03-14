$(function() {
  // Object used to contain all quiz questions and answers
  const myQuestions = [
    {
      question: 'How many provinces are there in Canada?',
      answers: {
        a: 8,
        b: 9,
        c: 10,
        d: 11
      },
      correctAnswer: 'c'
    },
    {
      question: 'What is the capital city of Quebec?',
      answers: {
        a: 'Quebec City',
        b: 'Vancouver',
        c: 'Ottawa',
        d: 'Montreal' 
      },
      correctAnswer: 'a'
    },
    {
      question: 'Which celebrity is originally from Canada?',
      answers: {
        a: 'Emma Stone',
        b: 'Hugh Jackman',
        c: 'Tom Holland',
        d: 'Jim Carrey'
      },
      correctAnswer: 'd'
    },
    {
      question: 'Which music artist is NOT from Canada?',
      answers: {
        a: 'Justin bieber',
        b: 'Drake',
        c: 'The Weeknd',
        d: 'Justin Timberlake' 
      },
      correctAnswer: 'd'
    },
    {
      question: 'What is the national sport of Canada?',
      answers: {
        a: 'Soccer',
        b: 'Football',
        c: 'Lacrosse',
        d: 'Hockey' 
      },
      correctAnswer: 'c'
    },
    {
      question: 'What food product is originally from Canada?',
      answers: {
        a: 'Oreos',
        b: 'Kraft Dinner',
        c: 'Chef Boyardee',
        d: 'Frosted Flakes' 
      },
      correctAnswer: 'b'
    },
    {
      question: 'Is Canada the second largest country in the world?',
      answers: {
        a: 'True',
        b: 'False'
      },
      correctAnswer: 'a'
    },
    {
      question: `Canada has more lakes than the rest of the world's lakes combined.`,
      answers: {
        a: 'True',
        b: 'False'
      },
      correctAnswer: 'a'
    },
    {
      question: 'Who is the current prime minister of Canada?',
      answers: {
        a: 'Justin Trudeau',
        b: 'Andrew Scheer',
        c: 'Jagmeet Singh',
        d: 'Stephen Harper' 
      },
      correctAnswer: 'a'
    },
    {
      question: 'Canada does NOT have the largest coastline in the world.',
      answers: {
        a: 'True',
        b: 'False'
      },
      correctAnswer: 'b'
    },
    {
      question: 'Yonge Street is the longest street in the world.',
      answers: {
        a: 'True',
        b: 'False'
      },
      correctAnswer: 'a'
    },
    {
      question: 'What is the national animal of Canada?',
      answers: {
        a: 'Platypus',
        b: 'Moose',
        c: 'Beaver',
        d: 'Bald Eagle' 
      },
      correctAnswer: 'c'
    },
    {
      question: 'What type of beer was crafted in Canada?',
      answers: {
        a: 'Corona',
        b: 'Budweiser',
        c: 'Red Racer IPA',
        d: 'Bud Light' 
      },
      correctAnswer: 'c'
    },
    {
      question: 'Is Toronto ranked in as one of the top 10 cities in the world for technological advancement?',
      answers: {
        a: 'True',
        b: 'False'
      },
      correctAnswer: 'a'
    },
    {
      question: 'What superhero was NOT originally created from Canada?',
      answers: {
        a: 'Wolverine',
        b: 'Deadpool',
        c: 'Superman',
        d: 'Iron Man' 
      },
      correctAnswer: 'd'
    },
    {
      question: 'Hawaiian Pizza was NOT originally invented in Canada.',
      answers: {
        a: 'True',
        b: 'False'
      },
      correctAnswer: 'b'
    },
    {
      question: 'Canadians consume more mac and cheese than the rest of the world.',
      answers: {
        a: 'True',
        b: 'False'
      },
      correctAnswer: 'a'
    },
    {
      question: 'How many time zones does Canada have?',
      answers: {
        a: 4,
        b: 5,
        c: 6,
        d: 7 
      },
      correctAnswer: 'c'
    },
    {
      question: 'How many years before did it take Canada to get its own flag when it became a country on February 15, 1965?',
      answers: {
        a: 10,
        b: 5,
        c: 100,
        d: 1 
      },
      correctAnswer: 'c'
    },
    {
      question: 'Canada is the biggest consumer of donuts in the entire world.',
      answers: {
        a: 'True',
        b: 'False'
      },
      correctAnswer: 'a'
    } 
  ];
  
  // Variables used for progress bar
  let width = 5;
  let bar = document.getElementById('progressBar');

  // To show the progression of the quiz
  function barProgression() {
      
      // Variable created for slider reference 
      sliderCounter = sliderCounter + 1;
      
      if (width < 100) {
        width = width + 5; 
      }
      if (width > 100) {
        width = 100;
      }
      
      bar.style.width = width + '%'; 
      bar.innerHTML = width * 1  + '%';
    }
  
  let questionNum = 1;

  // Outputs each question and answers from the questions object
  function buildQuiz() {
    // Stores the HTML output
    const output = [];
 
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // Stores the list of answer choices
      const answers = [];

      // For each available answer have a letter represent each one
      for (letter in currentQuestion.answers) {
        // Add a HTML radio button
        answers.push(
          `<label>
             <input type='radio' name='question${questionNumber}' value='${letter}'>
              ${letter}:
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // Add this question and its answers to the output
        output.push(
          `<div class='slide'>
             <div class='question'> Question ${questionNum}: ${currentQuestion.question} </div>
             <div class='answers'> ${answers.join('')} </div>
           </div>`
        );
      questionNum = questionNum + 1;
    });

    // Combines the output list into one string of HTML and puts it on the page
    quizContainer.innerHTML = output.join('');
  }

  // Variable created for the submit button
  const $submitButton = $('#submit');

  // Watches for the form submit to collect all of the answers chosen
  $('form').on('submit', function(event) {

    event.preventDefault();
    questionNum = 1;

    // Gathers answer containers from the quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    $submitButton.css('display', 'none');
    $playAgainButton.css('display', 'inline-block');
    $showScoreButton.css('display', 'inline-block');
    submittedAnswers = true;

    // Keeps track of user's answers
    let numCorrect = 0;
    $scoreContent.append(`<h2>Final Scores</h2>`);

    myQuestions.forEach((currentQuestion, questionNumber) => {
      // Finds selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // If answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainer.style.color = 'lightgreen';
        $scoreContent.append(`<div class='scoreQuestion'>Question ${questionNum}: ✅</div>`);
      } else {
        // If answer is wrong or blank
        answerContainer.style.color = 'red';
        $scoreContent.append(`<div class='scoreQuestion'>Question ${questionNum}: ❌</div>`);
      }
      questionNum = questionNum + 1;
    });

    // Show number of correct answers out of total
    $scoreContent.append(`<br /> <div class='totalCorrect'>${numCorrect} out of ${myQuestions.length} questions answered correctly.</div>`);
  });

  // Variables created for all the buttons
  const $nextButton = $('#next');
  const $previousButton = $('#previous');
  const $playAgainButton = $('#playAgain');
  const $score = $('#scoreModal');
  const $showScoreButton = $('#showScore');
  const $close = $('.close');
  // Variables created for the containers
  const quizContainer = document.getElementById('quiz');
  const $scoreContent = $('.scoreContainer');

  // Shows only certain button options for each slide
  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    
    if (currentSlide === 0) {
      $previousButton.css('display', 'none');
      $submitButton.css('display', 'none');
      $playAgainButton.css('display', 'none');
      $showScoreButton.css('display', 'none');
    } 
    
    else if (currentSlide === slides.length - 1) {
      $nextButton.css('display', 'none');
      if (submittedAnswers === false) {
        $submitButton.css('display', 'inline-block');
      }
      else {
        $playAgainButton.css('display', 'inline-block');
        $showScoreButton.css('display', 'inline-block');
      }
    } 

    else {
      $previousButton.css('display', 'inline-block');
      $nextButton.css('display', 'inline-block');
      $submitButton.css('display', 'none');
      $playAgainButton.css('display', 'none');
      $showScoreButton.css('display', 'none');
    }
  }

  // Display quiz right away
  buildQuiz();

  // Variables created for the slides
  const slides = document.querySelectorAll('.slide');
  let submittedAnswers = false;
  let currentSlide = 0;
  let sliderCounter = 0;

  // Show slides right away
  showSlide(0);

  // On play again, quiz game resets
  $playAgainButton.on('click', function(e) {
    location.reload();
  });

  // When next button is clicked, play the next slide
  $nextButton.on('click', function() {
    showSlide(currentSlide + 1);
    if (currentSlide > sliderCounter) {
      barProgression();
    }
  });

  // When previous button is clicked, play the previous slide
  $previousButton.on('click', function() {
    showSlide(currentSlide - 1);
  });

  $showScoreButton.on('click', function() {
    $score.css('display', 'block');
  });

  $close.on('click', function() {
    $score.css('display', 'none');
  });

  // When escape key is pressed, close scoreboard
  $(document).keydown(function(e) {
    if (e.keyCode == 27) {
      $score.css('display', 'none');
    }
  });
});
