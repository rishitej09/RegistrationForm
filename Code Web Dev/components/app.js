function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.getElementById("button").style.display="none";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }





// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length ; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("RT");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
//  var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false); 

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("rt");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function submit(){
    let x = confirm("Do You Want To Submit The Registration Form ?");
    // let y = document.getElementsById("input").value;  
    if(x===true){
      
        // if(y === ''){
        //     alert("Make Sure Your Form Is Filled !");
        // }else{
           
        // }
        window.print(); 
    }else{
        alert("Kindly Re-Check The Registration Form ! ")
    }
}
