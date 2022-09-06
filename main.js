const QuestionEle = document.querySelector("#question-number");
const QuestiontextEle = document.querySelector("#question-text");
const option1Ele = document.querySelector("#op1");
const option2Ele = document.querySelector("#op2");
const option3Ele = document.querySelector("#op3");
const option4Ele = document.querySelector("#op4");

const selec1 = document.querySelector("#option1");
const selec2 = document.querySelector("#option2");
const selec3 = document.querySelector("#option3");
const selec4 = document.querySelector("#option4");

const main = document.querySelector("#Main-box");
submitBtnEle = document.querySelector("#submit-next");

const GkEle = document.querySelector("#Knowledge");
const SciEle = document.querySelector("#Science");
const CompEle = document.querySelector("#Computer");
const MathEle = document.querySelector("#Mathematics");
const MythEle = document.querySelector("#Mythology");
const sportsEle = document.querySelector("#Sports");
const GeoEle = document.querySelector("#Geography");
const CelebEle = document.querySelector("#Celebrities");
const choosenEle = document.querySelector("#choosen");
try {
  var fetchURL = "";
  choosenEle.addEventListener("change", (event) => {
    fetchURL = Number(event.target.value);
    c = 0;
    evaluation = 0;
    counter = 1;
    getdata();
  });
  const URLlist = [
    "",
    "https://opentdb.com/api.php?amount=10&category=9&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=17&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=18&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=19&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=20&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=21&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=22&type=multiple",
    "https://opentdb.com/api.php?amount=10&category=26&type=multiple",
  ];

  let counter = 1;
  var correct;
  var evaluation = 0;
  var c = 0;

  async function getdata() {
    c = 0;
    evaluation = 0;
    counter = 1;
    const response = await fetch(URLlist[fetchURL]);
    var result = await response.json();

    DisplayQuestions(result.results[c]);
    submitBtnEle.addEventListener("click", (event) => {
      for (let i = 0; i < ans.length; i++) {
        if (ans[i] == "on") {
          if (i == correct) evaluation++;
        }
      }
      if (c < result.results.length - 1) {
        c++;
        DisplayQuestions(result.results[c]);
      } else
        main.innerHTML = `<h5 class="card-title display-4 text-center" id="question-number">You have scored ${evaluation} out of 10</h5>
        <button onClick="window.location.reload();" class="btn btn-outline-dark "id="reload">Start Over</button>`;
    });
  }
  var ans = [];
  selec1.addEventListener("click", (event) => {
    ans.fill("off");
    ans[0] = event.target.value;
  });
  selec2.addEventListener("click", (event) => {
    ans.fill("off");
    ans[1] = event.target.value;
  });
  selec3.addEventListener("click", (event) => {
    ans.fill("off");
    ans[2] = event.target.value;
  });
  selec4.addEventListener("click", (event) => {
    ans.fill("off");
    ans[3] = event.target.value;
  });

  function DisplayQuestions(q) {
    QuestionEle.innerText = `Question ${counter++}`;
    QuestiontextEle.innerHTML = q.question;
    let options = [...q.incorrect_answers];
    options.push(q.correct_answer); //added all the options to options array
    options = shuffleArray(options); //shuffled their positions so that the correct dont always come at the same position
    correct = options.indexOf(q.correct_answer);
    option1Ele.innerHTML = options[0];
    option2Ele.innerHTML = options[1];
    option3Ele.innerHTML = options[2];
    option4Ele.innerHTML = options[3];
  }
  //function to suffle array elements
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate random number
      let j = Math.floor(Math.random() * (i + 1));

      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  }
} catch (err) {
  console.log(err);
}
