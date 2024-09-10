const button=document.querySelector('.button')
button.addEventListener('click',(e)=>{
    e.preventDefault()
    setInterval(()=>{
    let newtime = new Date()
    console.log(newtime.toLocaleTimeString())
    button.innerHTML=newtime.toLocaleTimeString()

})
},1000)