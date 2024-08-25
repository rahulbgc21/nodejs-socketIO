const socket = io("ws://localhost:8080");

// client-side
socket.on("message", (text) => {
    console.log("fired in client side", text);
    let ele = document.createElement("li");
    ele.innerHTML = text;
    document.querySelector("ul").appendChild(ele);
});

document.getElementById("btnSendMsg").onclick = () => {
    let text = document.getElementById("msgText").value;
    socket.emit("message", text);
    document.getElementById("msgText").value = "";
}
;
