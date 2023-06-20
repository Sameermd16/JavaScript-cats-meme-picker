//project outcome - for of, getElementsByClassName, querySelector, classList.remove, import/export, .includes(), .filter()

import { catsData } from "./data.js"

const emotionRadios = document.getElementById("emotion-radios")

//catsData = [{}, {}, {}, {}, {}....]

function getEmotionsArray(cats){
    
    const emotionsArray = []

    for(let cat of cats) {
        // console.log(cat.emotionTags)
        for (let emotion of cat.emotionTags) {
            // console.log(emotion) 
            emotionsArray.push(emotion)
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
        radioItems += `<p>${emotion}</p>`
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