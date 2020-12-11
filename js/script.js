form_div = document.getElementById('form_div')
email_input = document.getElementById('email_input')
trial_btn = document.getElementById('trial_btn')
video1 = document.querySelector('.tv_video')
faq_questions = Array.from(document.querySelectorAll('.faq_header'))
faq_answers = Array.from(document.querySelectorAll('.faq_body'))

answer_open = -1



$("document").ready(()=> {
    $('video').get(0).play()
    $('video').get(1).play()
    
})

form_div.addEventListener("click", (e)=> {
    if(e.target.parentElement.className.includes("input_form")){
        if(e.target.tagName == "INPUT" || e.target.tagName == "LABEL"){
            form_div.classList.add("active")
        }
    }
})
form_div2.addEventListener("click", (e)=> {
    if(e.target.parentElement.className.includes("input_form")){
        if(e.target.tagName == "INPUT" || e.target.tagName == "LABEL"){
            form_div2.classList.add("active")
        }
    }
})
document.body.addEventListener("click", (e) => {
    if (e.target.tagName != "INPUT" && e.target.tagName != "LABEL"){
       if(email_input.value == ""){
           form_div.classList.remove("active")
           form_div2.classList.remove("active")
       }
    }
})



form_div.addEventListener("submit", (e) => {
    e.preventDefault()
})
form_div2.addEventListener("submit", (e) => {
    e.preventDefault()
})





faq_questions.map((question,index) => {
    question.addEventListener("click", () => {
        let id = index
        if(id == answer_open) {
            return        
        } else {
            answer_open = id

            $(".faq_body.active").slideUp("200")
            faq_questions.map(question => {
            question.classList.remove("active")
            })
            faq_answers.map(question => {
            question.classList.remove("active")
            })

            faq_questions[answer_open].classList.add("active")
            faq_answers[answer_open].classList.add("active")

            $(".faq_body.active").slideDown("200")
        
    }
    })
})


