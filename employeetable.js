
        // Find a <table> element with id="myTable":
        var table = document.getElementById("myTable");
        let allEmployees=JSON.parse(localStorage.getItem('employees')) ||[]
console.log({allEmployees});
        for (let i = 0; i < allEmployees?.length; i++) {
            var edtbtn = document. createElement('button');
            var dltbtn = document. createElement('button');

            edtbtn.innerHTML="Edit"
            edtbtn.onclick=()=>location.href=`EditEmployee.html?empid=${allEmployees[i]?.empId}&sl=${i}`
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
            cell1.innerHTML=allEmployees[i]?.firstName ||"NA"
            var cell2 = row.insertCell(1);
            cell2.innerHTML=allEmployees[i]?.lastName ||"NA"
            var cell3 = row.insertCell(2);
            cell3.innerHTML=allEmployees[i]?.empId  || "NA"
            var cell4 = row.insertCell(3);
            cell4.innerHTML=allEmployees[i]?.emailId || "NA"
            var cell5 = row.insertCell(4);
            cell5.innerHTML=allEmployees[i]?.salary || "NA"
            var cell6 = row.insertCell(5);
            cell6.innerHTML=allEmployees[i]?.dob || "NA"
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