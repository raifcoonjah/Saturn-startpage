const quotes = [
  {
    quote: "The secret of getting ahead is getting started",
    source: "Mark Twain",
  },
  {
    quote: "The only impossible journey is the one you never begin",
    source: "Tony Robbins",
  },
  {
    quote: "The best way to get started is to quit talking and begin doing",
    source: "Walt Disney",
  },
  {
    quote:
      "Take action. An inch of movement will bring you closer to your goals than a mile of intention",
    source: "Steve Maraboli",
  },
  {
    quote:
      "If you genuinely want something, don’t wait for it – teach yourself to be impatient",
    source: "Gurbaksh Chahal",
  },
  {
    quote: "You miss 100% of the shots you don’t take",
    source: "Wayne Gretzky",
  },
  {
    quote:
      "Decide what you want. Believe you can have it. Believe you deserve it and believe it’s possible for you",
    source: "Jack Canfield",
  },
  {
    quote:
      "If you can dream it, you can achieve it. You will get all you want in life if you help enough other people get what they want.",
    source: "Zig Ziglar",
  },
  {
    quote:
      "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine",
    source: "Roy T. Bennett",
  },
  {
    quote:
      "There are no limits to what you can accomplish, except the limits you place on your own thinking",
    source: "Brian Tracy",
  },
  {
    quote:
      "I have learned over the years that when one’s mind is made up, this diminishes fear",
    source: "Rosa Parks",
  },
  {
    quote:
      "You learn more from failure than from success. Don’t let it stop you. Failure builds character",
    source: "Unknown",
  },
  {
    quote:
      "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it",
    source: " Henry Ford",
  },
  {
    quote: "井の中の蛙大海を知らず - A frog in a well knows nothing of the sea",
    source: "Unknown",
  },
  {
    quote:
      "二兎を追う者は一兎をも得ず - Those who chase two hares won’t even catch one.",
    source: "Unknown",
  },
  {
    quote:
      "“Happiness is not something ready made. It comes from your own actions",
    source: "Dalai Lama",
  },
  {
    quote: "Out of the mountain of despair, a stone of hope.",
    source: "Martin Luther King Jr.",
  },
  {
    quote: "Change the world by being yourself. ",
    source: "Unknown",
  },
  {
    quote: "Every moment is a fresh beginning.",
    source: "Unknown",
  },
  {
    quote: "Never regret anything that made you smile. ",
    source: "Unknown",
  },
  {
    quote: "Die with memories, not dreams.",
    source: "Unknown",
  },
  {
    quote: "To be or not to be.",
    source: "Unknown",
  },
  {
    quote: "I have nothing to declare except my genius.",
    source: "Oscar Wilde",
  },
  {
    quote: "The truth is rarely pure and never simple.",
    source: "Oscar Wilde",
  },
  {
    quote: "When I let go of what I am, I become what I might be.",
    source: "Tao Te Ching",
  },
  {
    quote: "The best way to predict the future is to create it.",
    source: "Abraham Lincoln",
  },
  {
    quote:
      "The best way to find yourself is to lose yourself in the service of others.",
    source: "Mahatma Gandhi",
  },
  {
    quote: "The only thing that I am is the result of my thoughts.",
    source: "Bruce Lee",
  },
  {
    quote: "Always forgive your enemies; nothing annoys them so much.",
    source: "Oscar Wilde",
  },
  {
    quote:
      "The weak can never forgive. Forgiveness is the attribute of the strong.",
    source: "Oscar Wilde",
  },
  {
    quote: "The best revenge is massive success.",
    source: "Oscar Wilde",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    source: "Mae West",
  },
  {
    quote: "It's about how many bread units you can bake, and not about how many sesame seeds you can afford to use.",
    source: "Luqmaan Ramoly",
  },

];

function randomQuote() {
  let random = quotes[Math.floor(Math.random() * quotes.length)];
  quotation.innerText = `“${random.quote}”`;
  source.innerText = `- ${random.source}`;
}

window.onload = randomQuote();
