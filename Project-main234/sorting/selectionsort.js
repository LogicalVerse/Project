var container = document.getElementById("array");
var stop = false;
var s = 0; //swap counter
function generatearray() {
  s = 0;
  document.getElementById("swap").innerHTML = "Swap Counter : 0";
  var container1 = document.getElementById("div");
  stop = false;
  var elements = container.getElementsByClassName("block");

  while (elements[0]) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  for (var i = 0; i < 10; i++) {
    var value = Math.ceil(Math.random() * 100);

    var array_ele = document.createElement("div");

    array_ele.classList.add("block");

    array_ele.style.height = `${80}px`;
    array_ele.style.transform = `translate(${i * 86}px)`;

    var array_ele_label = document.createElement("label");
    array_ele_label.classList.add("block_id");
    array_ele_label.innerText = value;

    array_ele.appendChild(array_ele_label);
    container.appendChild(array_ele);
  }
}

function swap() {
  s++;
  document.getElementById("swap").innerHTML = "Swap Counter :" + s;
}

async function SelectionSort(delay = 500) {
	stop = false ;
	let bars = document.querySelectorAll(".block");
	
    // Assign 0 to min_idx
   var min_idx = 0;
   for (var i = 0; i < bars.length; i += 1) {
  
    // Assign i to min_idx
    min_idx = i;
  
    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "#c0a6f6";
    for (var j = i + 1; j < bars.length; j += 1) {
  
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "#c0a6f6";
        
      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );
  
      // To store the integer value of jth bar to var1 
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
  
      // To store the integer value of (min_idx)th bar to var2 
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
        
      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
  
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = "#86377b";
        }
        min_idx = j;
      } else {
  
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = "#86377b";
      }
    }
    
		if(stop){
			return ; 
		}
		  
    // To swap ith and (min_idx)th bar
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    await swap();
    bars[i].childNodes[0].innerText = temp2;
      
    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );
  
    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = "#a53db7";
  
    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = "#a53db7";
  }
  
}
function stopsort() {
  stop = true;
}
generatearray();
