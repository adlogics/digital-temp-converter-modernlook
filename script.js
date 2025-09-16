const tempCont = (changefield)=>{
    let C = parseFloat(document.getElementById("Celsius").value)
    let F = parseFloat(document.getElementById("Fahrenheit").value) 
    let K = parseFloat(document.getElementById("Kelvin").value) 
    let celsius;
    if(changefield==="Celsius"&& !isNaN(C))
    {
        celsius = C;
        document.getElementById("Fahrenheit").value = (C * 9/5 + 32).toFixed(2);
        document.getElementById("Kelvin").value = (C + 273.15).toFixed(2);
    }
    else if(changefield==="Fahrenheit"&& !isNaN(F))
    {
        celsius = (F - 32) * 5 / 9;
        document.getElementById("Celsius").value = celsius.toFixed(2);
        document.getElementById("Kelvin").value = (celsius + 273.15).toFixed(2);
    }
    else if (changefield === "Kelvin" && !isNaN(K))
    {
        celsius = K - 273.15;
        document.getElementById("Celsius").value = celsius.toFixed(2);
        document.getElementById("Fahrenheit").value = (celsius * 9 / 5 + 32).toFixed(2);
    }
//bg color changing block
    let bgcolor; 
    if(!isNaN(celsius)){
        if(celsius>=40){
            bgcolor = "#FF3E3E";
        }
        else if(celsius>= 30){
            bgcolor = "#FF7E00";
        }
        
        else if(celsius>= 20){
            bgcolor = "#FFD600";
        }
        
        else if(celsius>= 10){
            bgcolor = "#A8E05F";
        }
        else if(celsius>= 0){
            bgcolor = "#3ABEFF";
        }
        else if(celsius>= -10){
            bgcolor = "#007BFF";
        }
        else{
            bgcolor = "#5B2C6F";
        }
        document.body.style.backgroundColor = bgcolor;
    }
}


const reset = ()=>{
    document.getElementById("Celsius").value = "";
    document.getElementById("Fahrenheit").value = "";
    document.getElementById("Kelvin").value = "";
    document.body.style.backgroundColor =""
}

// changing title icons
const tempIcon = document.getElementById("temp-icon");
const allicon =["ri-fahrenheit-line", "ri-temp-hot-line", "ri-temp-cold-line", "ri-celsius-line" ]
let index = 0;
setInterval(()=>{
    tempIcon.classList.remove(allicon[index]);
    index=(index+1)%allicon.length;
    tempIcon.classList.add(allicon[index]);
}, 800);