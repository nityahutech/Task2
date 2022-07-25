
        // Find a <table> element with id="myTable":
        var table = document.getElementById("myTable");
        let allEmployees=JSON.parse(localStorage.getItem('employees')) ||[]
console.log({allEmployees});
        for (let i = 0; i < allEmployees?.length; i++) {
            var edtbtn = document. createElement('button');
            var dltbtn = document. createElement('button');
            edtbtn.style.cssText = 'background: #71b7e6;  #2e96db'
            dltbtn.style.cssText = 'background: #9b59b6; button:hover: #a938d5'

            edtbtn.innerHTML="Edit"
            edtbtn.onclick=()=>location.href=`EditEmployee.html?empid=${allEmployees[i]?.empId}&sl=${i}`
            // edtbtn.classList.add("editHover")
            dltbtn.innerHTML="Delete"
            dltbtn.onclick=()=>{
                // alert("hu")
                let all=allEmployees.splice(i,1)
                localStorage.setItem("employees",JSON.stringify(allEmployees))
                // alert("Employee deleted")
                location.href='EmployeeList.html'
            }

            var row = table.insertRow(i);
            var cell1 = row.insertCell(0);
            cell1.innerHTML=allEmployees[i]?.firstName ||""
            var cell2 = row.insertCell(1);
            cell2.innerHTML=allEmployees[i]?.lastName ||""
            var cell3 = row.insertCell(2);
            cell3.innerHTML=allEmployees[i]?.empId  || ""
            var cell4 = row.insertCell(3);
            cell4.innerHTML=allEmployees[i]?.emailId || ""
            var cell5 = row.insertCell(4);
            cell5.innerHTML=allEmployees[i]?.salary || ""
            var cell6 = row.insertCell(5);
            cell6.innerHTML=allEmployees[i]?.dob || ""
            var cell7 = row.insertCell(6);
            cell7.appendChild(edtbtn)
            var cell8 = row.insertCell(7);
            
            cell8.appendChild(dltbtn)
            var row = table.insertRow(i);
        }
        // Create an empty <tr> element and add it to the 1st position of the table:
       
        
        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        
        // Add some text to the new cells:
        // cell1.innerHTML = "NEW CELL1";
        // cell2.innerHTML = "NEW CELL2";