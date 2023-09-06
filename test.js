export function test (element){

    let history=[]
    let msglist = element.querySelector('#msglist')
    send.addEventListener('keydown', (e) => e.key === 'Enter')
    send.addEventListener('click', (e) => {
        const li = document.createElement('li')
        const msg = element.querySelector('#msg').value;
        const send = element.querySelector('#send')
        li.textContent = msg
        if(msg === ""){
                return
            } else{
                history.push(msg)
                msglist.appendChild(li)
        //element.querySelector('#msg').value = "" //tömmer msg fältet efter skickat meddelande
            if(document.getElementById("msglist").children.length > 10){
                msglist.removeChild(li)
                console.log("Grabben, du har för många meddelanden så jag tar bort det äldsta")
            }

        //Commands
            if(msg === "/help" || msg === "/h"){
                alert("Commands are: /history   |   /")
            }
            if(msg === "/history" || msg === "/History"){
                alert(history)
            }
        }
    })
}