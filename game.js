const cards = document.querySelectorAll(".card")
console.log(cards);


// variable
var isflipped = false;
var firstcard;
var secondcard;


cards.forEach((card) => card.addEventListener("click", flip))

function flip(){
    // console.log("card flipped");
    // console.log(this);

    this.classList.add("flip");
    if(!isflipped){
        isflipped = true
        firstcard = this
    }else {
        secondcard = this;
        console.log(firstcard);
        console.log(secondcard);
        checkit()
    }
}

function checkit(){
    // console.log("checking....");
    if(firstcard.dataset.image === secondcard.dataset.image){
        success();
    }else{
        fail();
    }
}

function success(){
    // console.log("success");
    firstcard.removeEventListener('click', flip);
    secondcard.removeEventListener('click', flip)
    reset();
    setTimeout(() =>{
        done()
    },1000)

}

function fail(){
    // console.log("fail");
    setTimeout(()=>{
        firstcard.classList.remove("flip")
        secondcard.classList.remove("flip")
        reset();
    }, 1000);

}

function done(){
   
    const cardArray = Array.from(document.querySelectorAll(".card"))

    var win = cardArray.every(card => {
        const classArray = [...card.classList]
        
        if(classArray.includes('flip')){
            return card
        }
    })

    if(win){
        alert('You done win')
    }
}

function reset(){
    isflipped = false;
    firstcard = null;
    secondcard = null;
}

// shuffle
(function shuffle(){
    cards.forEach((card) => {
        var index = Math.floor(Math.random() * 16)
        card.style.order = index;

        console.log(index, card.dataset.image)
    })
}

)();
