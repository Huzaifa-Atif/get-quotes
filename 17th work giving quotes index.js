var quotes = [
    "Success is not in just completing the app, but in its impact on the world.",

    "The best way to predict the future is to create it  one line of code at a time.",

    "Hard work beats talent when talent doesnt work hard.",

    "Dont just build apps, solve problems.",

    "Success in development comes from persistence, not just intelligence.",

    "Every great web developer starts with a small project.",

    "Code with passion, deploy with confidence.",

    "Challenges are what make development interesting, overcoming them is what makes it meaningful.",

    "Great apps arent built in a day, but they start with a single step.",

    "If you want to go fast, go alone. If you want to go far, go with a team.",
];
function quoteDisplay(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('generateQuote').innerHTML = quotes[randomIndex]; 
}