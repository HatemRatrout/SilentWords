// import logo from '../img/giphy.webp';

const qBank = [
    {
      question:
        "what are you doing with your life comrade? ?",
      answers: ["vodka", "sarthak", "somil", "devesh"],
      correct: "vodka",
      questionId: "099099"
    },
    {
      question:
        "where are you  ?",
      answers: ["wade3", "hatem", "yousef", "mousa"],
      correct: "wade3",
      questionId: "093909"
    },
    {
      question:
      "",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "009039"
    },
    {
      question:
        "how build the app ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "090089"
    },
    {
      question:
        "test",
      answers: ["hitham", "abood", "somil", "devesh"],
      correct: "abood",
      questionId: "01010101"
    },
    {
      question:
        "how build the app 2?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "092299"
    },
    {
      question:
        "how build the app 3?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "099099"
    },
    {
      question:
        "how build the app4 ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "222099"
    },
    {
      question:
        "how build the app 5?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "2222099"
    },
    {
      question:
        "how build the app 6?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "09922099"
    },
    {
      question:
        "how build the app 7?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "222292099"
    },
    {
      question:
        "how build the app 8?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "0998999099"
    },
    {
      question:
        "how build the app9 ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "099099"
    },
    {
      question:
        "how build the app ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "099099"
    },
    {
      question:
        "how build the app ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "099099"
    },
    {
      question:
        "how build the app ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "09459099"
    },
    {
      question:
        "how build the app ?",
      answers: ["vinayak", "sarthak", "somil", "devesh"],
      correct: "vinayak",
      questionId: "0912219099"
    },
    
];
export default (n = 5) =>
// n = 5 to export 5 question
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
