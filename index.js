// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()
saturdayFun('bathe my dog')

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

mondayWork()
mondayWork('work from home')

function wrapAdjective(visual = '*') {
    return function (adjective = 'special') {
        return `You are ${visual}${adjective}${visual}!`
    }

}

// function innerFunction(adjective = 'special') {
//     return `You are ${adjective}!`
// }

wrapAdjective()
wrapAdjective('||')