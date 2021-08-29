window.addEventListener('DOMContentLoaded', function(){
    //!custom select module start
    function selectFromOptions(){
        const stepCurrent = document.querySelectorAll(".step-current")
        const stepOPtions = document.querySelectorAll(".step-option")
        stepCurrent.forEach(item => {
            item.addEventListener("click", stepActiveToggle)
        })
        stepOPtions.forEach(item => {
            item.addEventListener("click", currentChange)
        })
        function stepActiveToggle(){
            this.parentElement.classList.toggle("active")
        }
        function currentChange(){
            const value = this.innerText
            const step = this.closest(".step")
            const currentValue = step.querySelector(".step-current")
            //скрытый select свяжем с кастомным
            const options = step.querySelectorAll("option")
            currentValue.innerText = value
            for(let i = 0; i < options.length; i++){
                if(currentValue.innerText == options[i].value){
                    options[i].selected = true
                }
            }
            step.classList.remove("active")
        }
    }
    selectFromOptions();
    //!custom select
    function showLogin(){
        const startLoginButton = document.querySelector(".login-start")
        const loginForm = document.querySelector(".login-form")
        startLoginButton.addEventListener("click", showLoginForm)
        function showLoginForm(){
            loginForm.classList.add("active")
            startLoginButton.classList.add("hidden")
        }
    }
    showLogin();
    //!slider block is here
    function slider(){
        const slideeBody = document.querySelector(".steps-slider")
        const slides = slideeBody.querySelectorAll(".step")
        const nextButton = document.querySelector(".steps-button-next")
        const prevButton = document.querySelector(".steps-button-prev")
        const submitButton = document.querySelector(".steps-button-submit")
        let slideCounter = 0
        function changeDotColor(){
            let dots = document.querySelectorAll(".dot")
            dots.forEach(dot => {
                dot.classList.remove("current")
            })
            dots[slideCounter].classList.add("current")
        }
        slides[slideCounter].classList.add("showed")
        nextButton.addEventListener("click", sliderNext)
        prevButton.addEventListener("click", slidePrev)

        function changeSlideIndex(){
            let stepsWrapper = document.querySelector(".steps-wrapper")
            stepsWrapper.dataset.slideIndex = slideCounter
        }
        //!при нажатии на кнопку Next step
        function sliderNext(){
            slideCounter++
            slides.forEach(slide => {
                slide.classList.remove("showed")
            })
            slides[slideCounter].classList.add("showed")
            changeDotColor()
            changeSlideIndex()
        }
        //!при нажатии на кнопку стрелку назад
        function slidePrev(){
            slideCounter--
            if(slideCounter <= 0){
                prevButton.disabled = true
                slideCounter = 0;
            }
            slides.forEach(slide => {
                slide.classList.remove("showed")
            })
            slides[slideCounter].classList.add("showed")
            changeDotColor()
            changeSlideIndex()
        }
    }
    slider()
});