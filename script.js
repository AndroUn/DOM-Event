// დავალება 1

const div = document.createElement('div')

document.body.appendChild(div)
div.setAttribute('id', "text_div")
div.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry."



const button = document.createElement('button')
document.body.appendChild(button)
button.setAttribute('id', "close_btn")
button.innerHTML = "Click me"

button.addEventListener('click', ()=>{
        div.style.display = 'none'
})


// დავალება 2

const idCard = document.createElement('div')
idCard.setAttribute('id', "card")

const header = document.createElement('h2')
header.innerHTML = "Gandalf"

const link = document.createElement('a')
link.setAttribute('href', "#")
link.innerHTML = "Go to profile"

idCard.append(header, link)
document.body.appendChild(idCard)


//დავალება 3

const btn = document.querySelector(".submit_btn"),
      result = document.querySelector('.pasuxi'),
      inputs = document.querySelectorAll("#answer")

let count = 0


function checkAnswer(){
    inputs.forEach((elem) => {
        if(elem.checked && elem.getAttribute('value') == 'true'){
            elem.nextElementSibling.style.backgroundColor = 'green'
            count++
        }
        else if(elem.checked && elem.getAttribute('value') == 'false'){
            elem.nextElementSibling.style.backgroundColor = 'red'
        }
    })
}



btn.addEventListener('click',(e)=>{
    checkAnswer()
    e.target.style.display ="none"
    result.innerHTML = `თქვენ მიიღეთ ${count}/3`
    return
})










