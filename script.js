

let showResult = "" 

function result(){
    
        let table = +(document.getElementById("table").value) 
        let range = +(document.getElementById("range").value)

        if(table === 0 || range === 0){
            alert("Please Fill the table number and range")
        }

        else{

            
        for (i = 1; i<=range; i++){     
            showResult += `${table} x ${i} = ${table*i} <br>`
            document.getElementById("result").innerHTML = showResult         
        }  
        
        document.getElementById("table").value = ""
        document.getElementById("range").value = ""

        }
}

function reload(){
    window.location.reload();
}
