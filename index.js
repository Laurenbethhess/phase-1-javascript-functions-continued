// Your code here

// function saturdayFun(activity) {
//     if (activity) {
//         return `This Saturday, I want to ${activity}!`
//     }
//     else {
//         return 'This Saturday, I want to roller-skate!'
//     }
// }

function saturdayFun(activity='roller-skate') {
    if (activity) {
        return `This Saturday, I want to ${activity}!`
    }
}

// function mondayWork(activity) {
//     if (activity) {
//         return `This Monday, I will ${activity}.`
//     } else {
        
//         return 'This Monday, I will go to the office.'
//     }
// }

function mondayWork(activity='go to the office') {
    if (activity) {
        return `This Monday, I will ${activity}.`
    }
}

    // function wrapAdjective(visualFlair) {
    //     if (visualFlair) {
    //         return function (adjective) {
    //             return `You are ${visualFlair}${adjective}${visualFlair}!`
    //     }
    //     } else {
    //         let visualFlair = '*' 
    //         return function (adjective) {
    //             return `You are ${visualFlair}${adjective}${visualFlair}!`
    //         }
    //     }
    // }

function wrapAdjective(visualFlair='*') {
    if (visualFlair) {
        return function (adjective) {
            return `You are ${visualFlair}${adjective}${visualFlair}!`
        }
    }
}