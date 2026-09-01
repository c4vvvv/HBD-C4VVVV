// =====================================
// Birthday AVG Game Engine
// Fixed Version
// =====================================


// ================================
// Game State
// ================================

const game = {

    currentPage:"intro",

    currentQuestion:0,

    score:0,

    affection:0,

    selectedAnswer:null,

    unlocked:false

};



// ================================
// DOM
// ================================

const pages = document.querySelectorAll(".page");


const passwordInput =
document.getElementById("password");


const passwordBtn =
document.getElementById("passwordBtn");


const message =
document.getElementById("message");


const startBtn =
document.getElementById("startBtn");


const questionNumber =
document.getElementById("questionNumber");


const questionTitle =
document.getElementById("question");


const answersBox =
document.getElementById("answers");


const nextBtn =
document.getElementById("nextBtn");


const feedback =
document.getElementById("feedback");


const scoreDisplay =
document.getElementById("score");




// ================================
// Page Switch
// ================================

function changePage(pageID){


    pages.forEach(page=>{

        page.classList.remove("active");

    });


    document
    .getElementById(pageID)
    .classList.add("active");


    game.currentPage = pageID;

}




// ================================
// Password Check
// ================================

passwordBtn.addEventListener(
"click",

()=>{


    const input =
    passwordInput.value.trim();



    if(input === birthdayPassword){


        message.style.color="#4caf50";


        message.innerHTML=
        "✓ 解鎖劇情";


        game.unlocked=true;



        setTimeout(()=>{


            changePage("startPage");


        },300);



    }

    else{


        message.style.color="#D53D3D";


        message.innerHTML=
        "✕ 密碼錯誤";


        passwordInput.value="";


    }


});





passwordInput.addEventListener(
"keydown",

(e)=>{


    if(e.key==="Enter"){

        passwordBtn.click();

    }


});




// ================================
// Start Game
// ================================

startBtn.addEventListener(
"click",

()=>{


    game.currentQuestion=0;

    game.score=0;

    game.affection=0;



    // 修正：原本錯誤跳 resultPage
    changePage("quizPage");



    loadQuestion();


});




// ================================
// Load Question
// ================================

function loadQuestion(){


    // 清除上一題訊息
    feedback.innerHTML="";

    feedback.classList.remove("show");



    const q =
    questions[
        game.currentQuestion
    ];



    questionNumber.innerHTML =
    q.id;



    questionTitle.innerHTML =
    q.question;



    scoreDisplay.innerHTML =
    game.score;



    answersBox.innerHTML="";



    game.selectedAnswer=null;



    q.options.forEach(option=>{


        const button =
        document.createElement("div");



        button.className="answer";



        button.innerHTML =
        `${option.value}. ${option.text}`;



        button.dataset.value =
        option.value;



        button.addEventListener(
        "click",

        ()=>selectAnswer(button)

        );



        answersBox.appendChild(button);


    });


}




// ================================
// Select Answer
// ================================

function selectAnswer(button){


    document
    .querySelectorAll(".answer")
    .forEach(btn=>{


        btn.classList.remove("selected");


    });



    button.classList.add("selected");



    game.selectedAnswer =
    button.dataset.value;


}




// ================================
// Next Question
// ================================

nextBtn.addEventListener(
"click",

()=>{


    if(!game.selectedAnswer){


        alert("請選擇答案");


        return;


    }



    checkAnswer();


});





// ================================
// Check Answer
// ================================

function checkAnswer(){


    const q =
    questions[
        game.currentQuestion
    ];



    let result="";



    if(
        game.selectedAnswer === q.answer
    ){


        game.score +=10;


        game.affection +=1;



        result =

        `
        <span class="feedback-correct">

        🩵 ${q.correctText}

        <br>

        「看來你真的記得。」

        </span>
        `;



    }

    else{


        result =

        `
        <span class="feedback-wrong">

        ${q.wrongText}

        <br>

        「嗯……看來我們很不熟」

        </span>
        `;


    }



    feedback.innerHTML=result;


    feedback.classList.add("show");



    nextBtn.disabled=true;




    setTimeout(()=>{


        nextBtn.disabled=false;



        game.currentQuestion++;



        if(
            game.currentQuestion >= questions.length
        ){


            // 修正：原本 showEnding 不存在
            showResult();


        }

        else{


            loadQuestion();


        }



    },600);



}







// ================================
// Result
// ================================

function showResult(){


    changePage("resultPage");



    const percent =
    game.score;



    document
    .getElementById("finalScore")
    .innerHTML =
    percent + "%";



    setTimeout(()=>{


        document
        .getElementById("syncBar")
        .style.width =
        percent + "%";


    },300);





    const rank =
    document.getElementById("rank");


    const description =
    document.getElementById("description");


    const typeBox =
    document.getElementById("typeBox");


    const achievement =
    document.getElementById("achievement");


    const card =
    document.getElementById("card");












    if(percent===100){

card.innerHTML = `
<div class="memory-card">

    <img
        src="5.png"
        class="memory-image"
    >

    <div class="card-info">

        <span class="rarity">
        ★★★★★
        </span>

     

    </div>

</div>
`;
const memoryCard =
document.querySelector(".memory-card");

memoryCard.addEventListener("click",()=>{

    memoryCard.classList.add("spin");

    setTimeout(()=>{

        memoryCard.classList.remove("spin");

        memoryCard.classList.add("zoom");

    },2200);

});

        description.innerHTML =

        "阿比!你全數參與了我的生命!";



        typeBox.innerHTML =

        `
        TYPE : 神父

       
        `;



       

        `
        

        <br>

        

        `;



        document
        .querySelector(".window")
        .classList.add("result-perfect");



    }



    else if(percent>=80){

card.innerHTML = `
<div class="memory-card">

    <img
        src="6.png"
        class="memory-image"
    >

    <div class="card-info">

        <span class="rarity">
        ★★★★
        </span>


    </div>

</div>
`;


const memoryCard =
document.querySelector(".memory-card");

memoryCard.addEventListener("click",()=>{

    memoryCard.classList.add("spin");

    setTimeout(()=>{

        memoryCard.classList.remove("spin");

        memoryCard.classList.add("zoom");

    },2200);

});

        description.innerHTML =

        "你真的了解我的很多面向!";



        typeBox.innerHTML =

        `
        TYPE : 傳教士

    
        `;






    }



    else if(percent>=60){

card.innerHTML = `
<div class="memory-card">

    <img
        src="7.png"
        class="memory-image"
    >

    <div class="card-info">

        <span class="rarity">
        ★★★
        </span>


    </div>

</div>
`;

const memoryCard =
document.querySelector(".memory-card");

memoryCard.addEventListener("click",()=>{

    memoryCard.classList.add("spin");

    setTimeout(()=>{

        memoryCard.classList.remove("spin");

        memoryCard.classList.add("zoom");

    },2200);

});


        description.innerHTML =

        "你只記得一些關於我的事情...";



        typeBox.innerHTML =

        `
        TYPE : 偶爾來朝拜之人


        `;

 
    }



    else{

card.innerHTML = `
<div class="memory-card">

    <img
        src="8.png"
        class="memory-image"
    >

    <div class="card-info">

        <span class="rarity">
        ★
        </span>

     

    </div>

</div>
`;
       
const memoryCard =
document.querySelector(".memory-card");

memoryCard.addEventListener("click",()=>{

    memoryCard.classList.add("spin");

    setTimeout(()=>{

        memoryCard.classList.remove("spin");

        memoryCard.classList.add("zoom");

    },2200);

});


        description.innerHTML =

        "我們重新認識吧!";



        typeBox.innerHTML =

        `
        TYPE : 你這個詐騙集團!
        `;


    }



}

