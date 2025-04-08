    const quotes = [
        { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
        { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
        { quote: "Happiness depends upon ourselves.", author: "Aristotle" },
        { quote: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
        { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
        { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
        { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
        { quote: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
        { quote: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
        { quote: "Get busy living or get busy dying.", author: "Stephen King" },
        { quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
        { quote: "Life is really simple, but we insist on making it complicated.", author: "Confucius" },
        { quote: "Love the life you live. Live the life you love.", author: "Bob Marley" },
        { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
        { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
        { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
        { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { quote: "You define your own life. Don’t let other people write your script.", author: "Oprah Winfrey" },
        { quote: "Nothing is impossible. The word itself says ‘I’m possible!’", author: "Audrey Hepburn" },
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
        { quote: "Don’t settle for what life gives you; make life better and build something.", author: "Ashton Kutcher" },
        { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
        { quote: "You must be the change you wish to see in the world.", author: "Mahatma Gandhi" },
        { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
        { quote: "To handle yourself, use your head; to handle others, use your heart.", author: "Eleanor Roosevelt" },
        { quote: "Too many of us are not living our dreams because we are living our fears.", author: "Les Brown" },
        { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
        { quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
        { quote: "It is never too late to be what you might have been.", author: "George Eliot" },
        { quote: "Winning isn’t everything, but wanting to win is.", author: "Vince Lombardi" },
        { quote: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
        { quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
        { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
        { quote: "A champion is defined not by their wins but by how they can recover when they fall.", author: "Serena Williams" },
        { quote: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
        { quote: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
        { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
        { quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.", author: "Vince Lombardi" },
        { quote: "Courage is grace under pressure.", author: "Ernest Hemingway" },
        { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
        { quote: "Never let the fear of striking out keep you from playing the game.", author: "Babe Ruth" },
        { quote: "Knowing yourself is the beginning of all wisdom.", author: "Aristotle" },
        { quote: "If you judge people, you have no time to love them.", author: "Mother Teresa" },
        { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
        { quote: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
        { quote: "The harder the conflict, the greater the triumph.", author: "George Washington" },
        { quote: "Do what you love, and you’ll never work another day in your life.", author: "Confucius" },
        { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
        { quote: "We must accept finite disappointment, but never lose infinite hope.", author: "Martin Luther King Jr." }
    ];
   let a= document.querySelector(".quote");
   let auth= document.querySelector(".author");

   const change=document.querySelector(".change");

   
   
   change.addEventListener("click",()=>{
       
       let b=Math.floor(Math.random()*quotes.length);
       const rd=quotes[b];
       a.innerHTML=rd.quote;
       auth.innerHTML=rd.author;
   })
