

var url_string = window.location.href
var url = new URL(url_string);
var empid = url.searchParams.get("empid");
var index = url.searchParams.get("sl");
console.log({empid, index});
let allEmployee= JSON.parse(localStorage.getItem('employees'))
let editingEmployee=allEmployee.filter(emp=>emp.empId==empid)[0]
console.log({editingEmployee});
          document.getElementById("firstName").value=editingEmployee?.firstName || ""
         document.getElementById("lastName").value=editingEmployee?.lastName || ""
          document.getElementById("emailId").value=editingEmployee?.emailId || ""
          document.getElementById("empId").value=editingEmployee?.empId || ""
          document.getElementById("salary").value=editingEmployee?.salary || ""
          document.getElementById("dob").value=editingEmployee?.dob || ""

  
       

          function updateEmployeeData(){
            // alert("OK")
              // function validationOfAdd(){
                  let firstName = document.getElementById("firstName").value;
                  let lastName = document.getElementById("lastName").value;
                  let emailId = document.getElementById("emailId").value;
                  let empId = document.getElementById("empId").value;
                  let salary = document.getElementById("salary").value;
                  let dob = document.getElementById("dob").value;

          
                  if (firstName || lastName && emailId && empId  && salary  && dob ) {
                    let allEmployees=JSON.parse(localStorage.getItem('employees'))||[]
                    console.log({firstName,lastName,emailId,empId,salary,dob});
                    allEmployees[index]=({firstName,lastName,emailId,empId,salary,dob})
                    localStorage.setItem("employees",JSON.stringify(allEmployees))
           
                   alert("Employee Updated successfuly")
                   history.push="EmployeeList.html"
                  } else {
                     alert("NOK")
                  }
              // }
          }

          function homePage(){
            location.href = "EmployeeList.html"
          }
         