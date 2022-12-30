// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var deadline = new Date("2023-01-01T00:00:00.000Z");

export default function handler(req, res) {
  if (req.method = "GET")  {
    res.status(200).json({ deadline: deadline });
  } else
  if  (req.method = "POST") {
    deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
    res.status(200).body("Success");
  }
  res.status(200).json({ name: 'Happy New Year!!' })
}




