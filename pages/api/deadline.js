// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var deadline = "Happy New Year!"  //new Date("2023-01-01T00:00:00.000Z");
var duedate = null;
var isCounted = false;
var luckyPeople = [
  "GrandFa",
  "GrandMa",
  "Nyamsuren",
  "Ganaa",
  "Jabkhlan",
  "Sharav",
  "Tungaa",
  "Ariuka",
  "Misheel",
  "Nomio",
  "Minjee",
  "Munkhoo",
  "Puujee"
]

var randomGift = [];

const getTimeRemaining = (e) => {

  const total = Date.parse(e) - Date.parse(new Date());
  const seconds = (total / 1000);
  if (total >= 0) {
    randomGift = [...luckyPeople].sort(() => 0.5 - Math.random());
    return {status:"timer", deadline: seconds };
  }
  if (isCounted) {
    //TODO randomize
    return {status: "lucky", luckyPeople: randomGift};
  }
  deadline = "Happy New Year!";
  return {deadline: deadline, status: "greeting"};

}



export default function handler(req, res) {
  let responseData;
  if (req.method == "GET") {
    responseData = getTimeRemaining(duedate);
    res.status(200).json(responseData);
  }
  if (req.method == "POST") {
    duedate = new Date();
    duedate.setSeconds(duedate.getSeconds() + 5 );
    isCounted = true;
    responseData = getTimeRemaining(duedate);
    res.status(200).json(responseData);
  } 
  if (req.method == "PUT") {
    res.status(200).json(luckyPeople);
    responseData = luckyPeople;
  }
    console.log('Method: ', req.method, responseData);
  

}
