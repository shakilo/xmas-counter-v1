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
  "Misheel",
  "Minjee",
  "Munkhoo",
  "Sharav",
  "Tungaa",
  "Nomio",
  "Puujee",
  "Ariuka"
]

const getTimeRemaining = (e) => {

  const total = Date.parse(e) - Date.parse(new Date());
  const seconds = (total / 1000);
  if (total >= 0) {
    return seconds;
  }
  if (isCounted) {
    //TODO randomize
    shuffle(luckyPeople);
    return luckyPeople;
  }
  deadline = "Happy New Year!";
  return deadline;

}



export default function handler(req, res) {
  if (req.method == "GET") {
    deadline = getTimeRemaining(duedate);
    res.status(200).json({ deadline: deadline, status: 'ok' });
    return;
  } 
    if (req.method == "POST") {
      duedate = new Date();
      duedate.setSeconds(duedate.getSeconds() + 60);
      isCounted = true;
      deadline = getTimeRemaining(duedate);
      console.log("time resetted: ", deadline);
      res.status(200).json({ status: "Success", method: req.method, deadline: deadline });
      return
    } else {
      isCounted = false;
      res.status(200).json({
        status: 'nok',
        deadline: deadline
      })
    }

}
