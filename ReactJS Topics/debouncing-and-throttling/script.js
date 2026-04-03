let normalCount = document.querySelector(".normalCount")
let throttleCount = document.querySelector(".throttleCount")
let debounceCount = document.querySelector(".debounceCount")


let nCount = 0
let normalFunction = () => {
    nCount++
    normalCount.innerHTML = `Normal Count: ${nCount}`
}

let tCount = 0
let isScroll = true
let throttleFunction = () => {
    if(isScroll){
        tCount++
        isScroll = false
    setTimeout(() => {
        throttleCount.innerHTML = `Normal Count: ${tCount}`
        isScroll = true
    }, 1000);
    }
}

let dCount = 0
let interval;
let debounceFunction = () => {
    dCount++
    clearTimeout(interval)
    interval = setTimeout(() => {
        debounceCount.innerHTML = `Debounce Count: ${dCount}`
    }, 1000);
}
let showCount = () => {
    normalFunction()
    throttleFunction()
    debounceFunction()
}