let form = document.querySelector("form");


let name = document.getElementById("name");
let doctor_id = document.getElementById("doctor_id");
let specialization = document.getElementById("specialization");
let experience = document.getElementById("experience");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");


let filter = document.getElementById("filter");

let tbody = document.querySelector("tbody");


let employeeList = [];


form.addEventListener("submit", (e) => {
    e.preventDefault()
    let obj = {};
    obj.name = name.value
    obj.doctor_id = doctor_id.value
    obj.specialization = specialization.value
    obj.experience = experience.value
    obj.email = email.value
    obj.mobile = mobile.value
    employeeList.push(obj);
    console.log(employeeList);



    tbody.innerHTML = null;

    employeeList.map((ele, indx) => {
        let newRow = document.createElement("tr");

        let nameData = document.createElement("td");
        let employeeIDData = document.createElement("td");
        let departmentData = document.createElement("td");
        let expData = document.createElement("td");
        let emailData = document.createElement("td");
        let mblData = document.createElement("td");
        let role = document.createElement("td");
        let deletDat = document.createElement("td");
        let btn = document.createElement("button");


        nameData.innerText = ele.name;
        employeeIDData.innerText = ele.doctor_id;
        departmentData.innerText = ele.specialization;
        expData.innerText = ele.experience;
        emailData.innerText = ele.email;
        mblData.innerText = ele.mobile;


        if (Number(ele.experience) <= 1) {
            role.innerText = "Trainee";
        }
        else if ((Number(ele.experience) >= 2) && (Number(ele.experience) <= 5)) {
            role.innerText = "Junior";
        }
        else if (Number(ele.experience) > 5) {
            role.innerText = "Senior";
        }


        btn.setAttribute("data-indx", `${indx}`);
        btn.setAttribute("onclick", "deleteFunc(this)");
        btn.innerText = "Delete";
        deletDat.append(btn);


        newRow.append(nameData, employeeIDData, departmentData, expData, emailData, mblData, role, deletDat);
        tbody.append(newRow);

        form.reset()
    });



});
function deleteFunc(ev) {
    employeeList.splice(Number(ev.getAttribute("data-indx")), 1);

    tbody.innerHTML = null;

    employeeList.map((ele, indx) => {
        let newRow = document.createElement("tr");

        let nameData = document.createElement("td");
        let employeeIDData = document.createElement("td");
        let departmentData = document.createElement("td");
        let expData = document.createElement("td");
        let emailData = document.createElement("td");
        let mblData = document.createElement("td");
        let role = document.createElement("td");
        let deletDat = document.createElement("td");
        let btn = document.createElement("button");


        nameData.innerText = ele.name;
        employeeIDData.innerText = ele.doctor_id;
        departmentData.innerText = ele.specialization;
        expData.innerText = ele.experience;
        emailData.innerText = ele.email;
        mblData.innerText = ele.mobile;


        if (Number(ele.experience) <= 1) {
            role.innerText = "Trainee";
        }
        else if ((Number(ele.experience) >= 2) && (Number(ele.experience) <= 5)) {
            role.innerText = "Junior";
        }
        else if (Number(ele.experience) > 5) {
            role.innerText = "Senior";
        }

        btn.setAttribute("data-indx", `${indx}`);
        btn.setAttribute("onclick", "deleteFunc(this)");
        btn.innerText = "Delete";
        deletDat.append(btn);


        newRow.append(nameData, employeeIDData, departmentData, expData, emailData, mblData, role, deletDat);
        tbody.append(newRow);

        form.reset();
    });

}





function filtering() {
    console.log("Working");


    tbody.innerHTML = null;

    if (filter.value != "All") {

        employeeList.map((ele, indx) => {
            if (ele.specialization == filter.value) {
                let newRow = document.createElement("tr");

                let nameData = document.createElement("td");
                let employeeIDData = document.createElement("td");
                let departmentData = document.createElement("td");
                let expData = document.createElement("td");
                let emailData = document.createElement("td");
                let mblData = document.createElement("td");
                let role = document.createElement("td");
                let deletDat = document.createElement("td");
                let btn = document.createElement("button");


                nameData.innerText = ele.name;
                employeeIDData.innerText = ele.doctor_id;
                departmentData.innerText = ele.specialization;
                expData.innerText = ele.experience;
                emailData.innerText = ele.email;
                mblData.innerText = ele.mobile;


                if (Number(ele.experience) <= 1) {
                    role.innerText = "Trainee";
                }
                else if ((Number(ele.experience) >= 2) && (Number(ele.experience) <= 5)) {
                    role.innerText = "Junior";
                }
                else if (Number(ele.experience) > 5) {
                    role.innerText = "Senior";
                }

                btn.setAttribute("data-indx", `${indx}`);
                btn.setAttribute("onclick", "deleteFunc(this)");
                btn.innerText = "Delete";
                deletDat.append(btn);


                newRow.append(nameData, employeeIDData, departmentData, expData, emailData, mblData, role, deletDat);
                tbody.append(newRow);

                form.reset();

            }

        });
    }
    else {


        employeeList.map((ele, indx) => {
            let newRow = document.createElement("tr");

            let nameData = document.createElement("td");
            let employeeIDData = document.createElement("td");
            let departmentData = document.createElement("td");
            let expData = document.createElement("td");
            let emailData = document.createElement("td");
            let mblData = document.createElement("td");
            let role = document.createElement("td");
            let deletDat = document.createElement("td");
            let btn = document.createElement("button");


            nameData.innerText = ele.name;
            employeeIDData.innerText = ele.doctor_id;
            departmentData.innerText = ele.specialization;
            expData.innerText = ele.experience;
            emailData.innerText = ele.email;
            mblData.innerText = ele.mobile;


            if (Number(ele.experience) <= 1) {
                role.innerText = "Trainee";
            }
            else if ((Number(ele.experience) >= 2) && (Number(ele.experience) <= 5)) {
                role.innerText = "Junior";
            }
            else if (Number(ele.experience) > 5) {
                role.innerText = "Senior";
            }

            btn.setAttribute("data-indx", `${indx}`);
            btn.setAttribute("onclick", "deleteFunc(this)");
            btn.innerText = "Delete";
            deletDat.append(btn);


            newRow.append(nameData, employeeIDData, departmentData, expData, emailData, mblData, role, deletDat);
            tbody.append(newRow);

            form.reset();
        });

    }

}