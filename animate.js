var myEmojis = [
    "❤️",
    "💕",
    "🍬",
    "🍭",
    "🎂",
    "💝",
    "💞",
    "🍫",
    "💓",
    "🥮",
    "❤️",
    "🍭",
    "💞",
    "🎂",
    "💗",
    "🍬",
    "💓",
    "🍭",
    "💕",
    "🥮",
    "🍫"
  ]

var emoji = document.getElementById("emoji")
var i = 0

var animate = () => {
    let em = myEmojis[i % myEmojis.length]
    emoji.innerHTML = em
    i++
}

setInterval(animate, 1000)