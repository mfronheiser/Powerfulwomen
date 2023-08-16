const quoteButton = document.getElementById('button');
const displayQuote = document.getElementById('quote');


quoteList = ["The most courageous act is still to think for yourself. Aloud. - Coco Chanel", "Step out of the history that is holding you back. Step into the new story you are willing to create. - Oprah Winfrey", "You may not control all the events that happen to you, but you can decide not to be reduced by them. - Maya Angelou", "I can't think of any better representation of beauty than someone who is unafraid to be herself. - Emma Stone", "The power you have is to be the best version of yourself you can be, so you can create a better world. - Ashley Rickards", "We need to accept that we won't always make the right decisions, that we'll screw up royally sometimes—understanding that failure is not the opposite of success, it's part of success. - Arianna Huffington", "The more I like me, the less I want to pretend to be other people. - Jamie Lee Curtis", "The question isn’t who’s going to let me; it’s who is going to stop me.- Ayn Rand",  "Success is about creating benefit for all and enjoying the process. If you focus on this & adopt this definition, success is yours. - Kelly Kim", "If you don't like the road you're walking, start paving another one. - Dolly Parton"]


quoteButton.addEventListener('click', () => {
    // get quote
    let quoteNumber = Math.floor(Math.random()*quoteList.length);

    // display quote
    displayQuote.innerHTML = quoteList[quoteNumber];



});