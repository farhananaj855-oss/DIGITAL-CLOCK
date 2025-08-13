let clockcook=document.querySelector('#clock')
function time(){
    let newTime=new Date()
    clock.innerHTML = newTime.toLocaleTimeString()
   
}
 setInterval(time,1000)
time()