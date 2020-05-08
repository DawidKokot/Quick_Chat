const log = msg => {
    document.getElementById("log").textContent += msg + "\n";
}


log("CHAT BETA")

var b = Bugout("Dawid-chat-67654345678765434567");
log(`${b.address()} [ me ]`)
b.on("seen", address => log(`${address} [ seen ]`));

b.on("message", function(address, msg) {
    log(`${address} : ${msg}`);
})


document.getElementById("input").onkeydown = function(e) {
    if (e.keyCode == 13) {
        if (b.lastwirecount) {
            b.send(e.target.textContent);
            e.target.textContent = "";
        }
        e.preventDefault();
    }
}