document.addEventListener("DOMContentLoaded", function(event) {
    clear();
})
function set(){
    document.getElementById("ssh").innerText = "kel@simply-kel.github.io:~$ _"
    setTimeout(clear, 500)
}
function clear(){
    document.getElementById("ssh").innerText = "kel@simply-kel.github.io:~$ "
    setTimeout(set, 500)
}
