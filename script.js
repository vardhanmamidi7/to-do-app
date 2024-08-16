const input = document.getElementById("inputfield");

const list = document.querySelector(".list-box");

function func() {
    if (input.value === '') {
        alert("you must enter some task");
    }
    else {
        let ele = document.createElement("li");
        ele.innerHTML = input.value;
        list.appendChild(ele);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        ele.appendChild(span);
        input.value = '';
    }
    savedata();
}

list.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
          e.target.classList.toggle("checked")
          savedata();
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata();
    }

});
function savedata()
{
    localStorage.setItem("data",list.innerHTML);
}
function showdata()
{
    list.innerHTML=localStorage.getItem("data");
}
showdata();

