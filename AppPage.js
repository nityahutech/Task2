function signUp() {
  // e.preventDefault();
  var password1 = document.getElementById("pwd").value;
  var password2 = document.getElementById("cpwd").value;
  function validate() {
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let pswd = document.getElementById("pwd").value.trim();
    if (fname != "" && lname != "" && email != "" && pswd != "") {
      return true;
    } else {
      return false;
    }
  }
  if (password1 == password2 && validate()) {
    let formData = {
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      pwd: document.getElementById("pwd").value,
      emp: []
    };
    let personList = JSON.parse(localStorage.getItem("formData"));
    if (personList == null) {
      dataArr = [];
    } else {
      dataArr = personList;
    }
    const newData = JSON.stringify(formData);
    dataArr.push(newData);
    localStorage.setItem("formData", JSON.stringify(dataArr));
    document.getElementById("signup_msg").style.color = "green";
    document.getElementById("signup_msg").innerHTML =
      "Sign Up Successfully. Please Log In";
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pwd").value = "";
    document.getElementById("cpwd").value = "";
  } else {
    document.getElementById("signup_msg").style.color = "red";
    document.getElementById("signup_msg").innerHTML =
      "Provide Valid Information";
    document.getElementById("pwd").value = "";
    document.getElementById("cpwd").value = "";
  }
}

function logIn() {
    let email = document.getElementById("login-email").value;
    let pwd = document.getElementById("login-pwd").value;
  
    let personList = JSON.parse(localStorage.getItem("formData"));
  
    let resp;
    personList.forEach((element) => {
      let data = JSON.parse(element);
      let e = data.email;
      let p = data.pwd;
      console.log(e);
      if (data.email == email && data.pwd == pwd) {
        var fullName = data.fname + " " + data.lname;
        const userInfo = { name: fullName, email: data.email };
        localStorage.setItem("isLogin", JSON.stringify(userInfo));
        resp = "success";
      }
    });
  
    if (resp == "success") {
        // localStorage.setItem("addUsers",[])
      location.href = "EmployeeList.html";
    } else {
      document.getElementById("wrong-credentials").innerHTML =
        "Invalid Credentials";
      document.getElementById("login-email").value = "";
      document.getElementById("login-pwd").value = "";
    }
  }

  function addEmployee(){
    location.href = "AddEmployee.html"
  }
  function logout(){
    location.href = "LoginPage.html"
  }
//   function addEmployeeData(){
//     location.href = "EmployeeList.html"
//   }

//   -------------------

function addEmployeeData(){
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
         console.log({allEmployees});
         allEmployees.push({firstName,lastName,emailId,empId,salary,dob})

         localStorage.setItem("employees",JSON.stringify(allEmployees))
         alert("Employee added successfuly")

        } else {
           alert("NOK")
        }
        console.log({firstName,lastName,emailId,empId, salary,dob});
    // }
}

function homePage(){
  location.href = "EmployeeList.html"
}


// --------------------------------



// function onFormSubmit(){
//     var empData = readFormData();
//     insertNewRecord(empData);
//     resetForm();
// }

// function readFormData(){
//     var empData = {};
//     empData["empId"] = document.getElementById("empId").value;
//     empData["firstName"] = document.getElementById("firstName").value;
//     empData["lastName"] = document.getElementById("lastName").value;
//     empData["emailId"] = document.getElementById("emailId").value;
//     empData["salary"] = document.getElementById("salary").value;
//     empData["dob"] = document.getElementById("dob").value;
//     return empData;
// }
// function insertNewRecord(data){
//     var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
//     var newRow = table.insertRow(table.length);
//     cell1 = newRow.insertCell(0);
//     cell1.innerHTML = data.empId;
//     cell2 = newRow.insertCell(1);
//     cell2.innerHTML = data.firstName;
//     cell3 = newRow.insertCell(2);
//     cell3.innerHTML = data.lastName;
//     cell4 = newRow.insertCell(3);
//     cell4.innerHTML = data.emailId;
//     cell5 = newRow.insertCell(4);
//     cell5.innerHTML = data.salary;
//     cell6 = newRow.insertCell(5);
//     cell6.innerHTML = data.dob;
//     cell7 = newRow.insertCell(6)
//     cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
//                         <a>Delete</a>`;
// }
// function resetForm(){
//     document.getElementById("empId").value = "";
//     document.getElementById("firstName").value = "";
//     document.getElementById("lastName").value = "";
//     document.getElementById("emailId").value = "";
//     document.getElementById("salary").value = "";
//     document.getElementById("dob").value = "";
// }

// function onEdit(td){
//     selectedRow = td.parentElement.parentElement;
//     document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
//     document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
//     document.getElementById("emailId").value = selectedRow.cells[2].innerHTML;
//     document.getElementById("empId").value = selectedRow.cells[3].innerHTML;
//     document.getElementById("salary").value = selectedRow.cells[4].innerHTML;
//     document.getElementById("dob").value = selectedRow.cells[5].innerHTML;
// }
