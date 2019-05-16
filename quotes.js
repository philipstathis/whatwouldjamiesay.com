const quotes = [
  "🎵 Cooodyyyy Rrrrrooooosssseeeee 🎵",
  "🎵 Joooon Raaa - Chenkooooo 🎵",
  "Just spark the scala using Kafka",
  "Why did we hire him again?",
  "I'm feeling Gussy's",
  ":popcorn:",
  "It's a dump in a box",
  "It's a polished turd",
  "It's a tire fire",
  "One bad data point can bring down the entire application",
  "Neither Useful Nor Ornamental",
  "His allocation is 75% not giving a fuck, and 25% giving fewer fucks",
  "...fucknuts...",
  "Hey Buckaroo!",
  "👎",
  "We should take credit for it",
  "Hello my lovelies!",
  "(scottish) Take it out back and bash in the head with a saddle",
  "Good riddance to bad rubbish",
  "You really treasury-dev ed that joke",
  "(☞ ͡° ͜ʖ ͡°)☞",
  'Yeoman the shit out of teamcity',
  'Gloooooooooooooooooooorious!!!',
  'This time Anand is a man',
  'Some interviewers stay completely silent to see what the candidate says, I just never shut up',
  'I absolutely love myself a rom com'
];

export default function getQuote() {
    return quotes[Math.trunc(Math.random() * quotes.length)]
};
