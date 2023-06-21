//project outcome - for of, getElementsByClassName, querySelector, classList.remove, import/export, 
//.includes(), .filter()
//parentElement,
// event.target.id, 
//classList
//accent-color : controls color inside the radio input
//getElementsByClassName
import { catsData } from "./data.js"

const emotionRadios = document.getElementById("emotion-radios")
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById("gifs-only-option")

getImageBtn.addEventListener('click', () => {
    const checkedRadio = document.querySelector("input[type='radio']:checked")
    const isGif = gifsOnlyOption.checked
    const matchingEmotionArray = catsData.filter((object) => {
        if(isGif) {
            return object.emotionTags.includes(checkedRadio.value) && object.isGif
        } else {
            return object.emotionTags.includes(checkedRadio.value)
        }
    })
    console.log(matchingEmotionArray)
    // console.log(isGif)
    if(!checkedRadio) {
        console.log('select the emotion')
    } else {
        // console.log(checkedRadio.value)
    }
})

emotionRadios.addEventListener('change', (e) => {
    const radios = document.getElementsByClassName('radio')
    for(let eachItem of radios) {
        eachItem.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
})

//catsData = [{}, {}, {}, {}, {}....]

function getEmotionsArray(cats){
    
    const emotionsArray = []

    for(let cat of cats) {
        // console.log(cat.emotionTags)
        for (let emotion of cat.emotionTags) {
            // console.log(emotion) 
            if(!emotionsArray.includes(emotion)) {
                //push
                emotionsArray.push(emotion)
            } else {
                //don't push

            }
        }
        // console.log(emotionsArray)
    }
    return emotionsArray

    // for (let i = 0; i < cats.length; i++){
    //     for (let j=0; j < cats[i].emotionTags.length; j++){
    //             emotionsArray.push(cats[i].emotionTags[j])
    //     }
    // }
    // console.log(emotionsArray)
}

// console.log(getEmotionsArray(catsData))

function renderEmotionsRadios(cats) {
    const emotions = getEmotionsArray(cats)
    // console.log(emotions) 
    let radioItems = ''

    //for of 
    for (let emotion of emotions) {
        radioItems += `
            <div class="radio">
                <label for="${emotion}">${emotion}</label>
                <input 
                    type="radio"
                    id="${emotion}"
                    value="${emotion}"
                    name="emotions"
                />
            </div>
        
        `
    }
    emotionRadios.innerHTML = radioItems


    //with for loop

    // for(let i = 0; i < emotions.length; i++) {
    //     stringOfHTML += `<p>${emotions[i]}</p>`
    //     console.log(stringOfHTML)
    //     emotionRadios.innerHTML = stringOfHTML
    // }
}
renderEmotionsRadios(catsData)









// const shoppingList = ['chick', 'flick', 'slick']

// if(!shoppingList.includes(itemInput.value)) {  // adding chick -> normally gives true which runs the code. I am making it reverse ! false which does not rus 
//     //adding 'sheep' -> normally gives false but making it ! reverse -> true then runs the code 
//     //then add
//     shoppingList.push(itemInput.value)
//     render()
// } else {
//     //don't add
//     itemInput.value = ''
//     console.log('no duplicates')
// }