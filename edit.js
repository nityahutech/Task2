

var url_string = window.location.href
var url = new URL(url_string);
var empid = url.searchParams.get("empid");
var index = url.searchParams.get("sl");
console.log({empid, index});
let allEmployee= JSON.parse(localStorage.getItem('employees'))
let editingEmployee=allEmployee.filter(emp=>emp.empId==empid)[0]
console.log({editingEmployee});
          document.getElementById("firstName").value=editingEmployee?.firstName || "NA"
         document.getElementById("lastName").value=editingEmployee?.lastName || "NA"
          document.getElementById("emailId").value=editingEmployee?.emailId || "NA"
          document.getElementById("empId").value=editingEmployee?.empId || "NA"
          document.getElementById("salary").value=editingEmployee?.salary || "NA"
          document.getElementById("dob").value=editingEmployee?.dob || "NA"

  
       

          function updateEmployeeData(){
            // alert("OK")
              // function validationOfAdd(){
                  let firstName = document.getElementById("firstName").value.trim();
                  let lastName = document.getElementById("lastName").value.trim();
                  let emailId = document.getElementById("emailId").value.trim();
                  let empId = document.getElementById("empId").value.trim();
                  let salary = document.getElementById("salary").value.trim();
                  let dob = document.getElementById("dob").value.trim();

          
                  if (firstName || lastName && emailId && empId  && salary  && dob ) {
                    let allEmployees=JSON.parse(localStorage.getItem('employees'))||[]
                    console.log({firstName,lastName,emailId,empId,salary,dob});
                    allEmployees[index]=({firstName,lastName,emailId,empId,salary,dob})
                    localStorage.setItem("employees",JSON.stringify(allEmployees))
           
                //    alert("Employee Updated successfuly")
                   history.push="EmployeeList.html"
                  } else {
                     alert("NOK")
                  }
              // }
          }
         