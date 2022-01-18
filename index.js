const removeMain = document.getElementById("main");
console.log(removeMain);
removeMain.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = `Karsyn is the champion`;
document.body.append(newHeader);
