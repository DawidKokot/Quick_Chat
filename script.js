// user name input handler
const btnName = document.getElementById("btn-name")

btnName.addEventListener("click", () => {
    document.getElementById("name-display").textContent += document.getElementById("name").value
    console.log(name)
})


const log = msg => {
    document.getElementById("log").textContent += msg + "\n";
}




log("CHAT BETA")

var b = Bugout("Dawid-chat-67654345678765434567");
log(`${b.address()} [ me ]`)
b.on("seen", address => log(`${address} [ seen ]`));

b.on("message", function(address, msg) {
    // log(`${address} : ${msg}`);
    log(msg);
})


document.getElementById("input").onkeydown = function(e) {
    if (e.keyCode == 13) {
        if (b.lastwirecount) {
            //get name
            const nameDisplay = document.getElementById("name-display").textContent;
            const name = (nameDisplay) ? nameDisplay : 'Anonymous';

            const currDateTime = new Date();
            const currYear = currDateTime.getFullYear();
            const currMonth = ('0' + (currDateTime.getMonth() + 1)).slice(-2)
            const currDay = ('0' + (currDateTime.getDate())).slice(-2);
            const currHours = ('0' + (currDateTime.getHours())).slice(-2);
            const currMins = ('0' + (currDateTime.getMinutes())).slice(-2);
            const currSec = ('0' + (currDateTime.getSeconds())).slice(-2);
            const formattedDateTime = `${currYear}-${currMonth}-${currDay} ${currHours}:${currMins}:${currSec}`;
            b.send(`${formattedDateTime} ${name}: ${e.target.textContent}`);

            e.target.textContent = "";
        }
        e.preventDefault();
    }
}