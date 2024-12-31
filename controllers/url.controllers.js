const { nanoid } = require("nanoid");

const URL = require("../models/url.model");
const handleGenerateShortUrl = async (req, res) => {
  const body = req.body;

  if (!body.url) return res.status(400).json({ message: "URL is required" }); // Aur humko pta hai 400 tabhi use use krte hai jaab bad request hota hai taab

  const shortID = nanoid(8); // ! => Basically yeha per hamne nanoid ka use kiya hai jo ki ek npm package hai jo ki hame random string generate karne me help karta hai, aur jo hamne nanoid ke andar 8 pass kya hai uska main purpose hai ki **kitne Digit taak ka chaiye humko url ka name**.

  await URL.create({
    shortId: shortID,
    longURL: body.url,
    redirect: body.url,
    visitedHistory: [],
  });
  return res.json(shortID);
};

module.exports = {
  handleGenerateShortUrl,
};
