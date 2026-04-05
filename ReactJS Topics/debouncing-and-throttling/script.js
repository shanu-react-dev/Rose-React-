let normalCount = document.querySelector(".normalCount")
let throttleCount = document.querySelector(".throttleCount")
let debounceCount = document.querySelector(".debounceCount")
let debounceVal = document.querySelector(".debounceVal")
let normalVal = document.querySelector(".normalVal")


let nCount = 0
let normalFunction = (value) => {
    nCount++
    normalCount.innerHTML = `Normal Count: ${nCount}`
    normalVal.innerHTML = `Normal Value: ${value}`

}

let tCount = 0
let isScroll = true
let throttleFunction = () => {
    if(isScroll){
        tCount++
        isScroll = false
    setTimeout(() => {
        throttleCount.innerHTML = `Throttle Count: ${tCount}`
        isScroll = true
    }, 1000);
    }
}

let dCount = 0
let timer;
let debounceFunction = (val) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
        dCount++
        debounceCount.innerHTML = `Debounce Count: ${dCount}`
        debounceVal.innerHTML = `Debounce Value: ${val}`
    }, 1000);
}

let showCount = () => {
    normalFunction()
    throttleFunction()
    debounceFunction()
}

let input = document.getElementById("searchTerm")
input.addEventListener("keyup", function (e) {
    debounceFunction(e.target.value)
    normalFunction(e.target.value)
})

