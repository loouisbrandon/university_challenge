const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})

// close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})

//change theme
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active')
})

//EDIT STUDENT
class Student {
    constructor() {
        this.id = 1;
        this.arrayStudent = [];

    }

    save() {
        let student = this.readData();

        if(this.inputValidate(student)){
            this.add(student);
        }

        this.listTable();
        this.cancel();
    }

    listTable() {
        let tbody = document.getElementById('tbody');
        tbody.innerText = '';

        for(let i = 0; i < this.arrayStudent.length; i++){
            let tr = tbody.insertRow();
            
            let td_id = tr.insertCell();
            let td_nameStudent = tr.insertCell();
            let td_reg = tr.insertCell();
            let td_actions = tr.insertCell();
            
            td_id.innerText = this.arrayStudent[i].id;
            td_nameStudent.innerText = this.arrayStudent[i].nameStudent;
            td_reg.innerText = this.arrayStudent[i].reg;
            

            let imgDelete = document.createElement('img');
            imgDelete.src = './assets/images/deleteimage.svg';
            imgDelete.setAttribute("onClick", "student.remove("+ this.arrayStudent[i].id +")");

            td_actions.appendChild(imgDelete);

        }
    }

    add(student) {
        this.arrayStudent.push(student);
        this.id++;
    }

    readData() {
        let student = {}
        
        student.id = this.id;
        student.nameStudent = document.getElementById('student').value;
        student.reg = document.getElementById('Reg').value;

        return student;
    }

    inputValidate(student) {
        let message = '';

        if(student.nameStudent == '') {
            message += '- Please insert the student name \n';
        }

        if(student.reg == '') {
            message += '- Please insert the student registration \n';
        }

        if(message != '') {
            alert(message);
            return false
        }

        return true;
    }

        cancel() {
            document.getElementById('student').value = '';
            document.getElementById('Reg').value = '';
        }

        remove(id) {
            if(confirm('You will delete the student ' + id)) {
                let tbody = document.getElementById('tbody');
            
                for(let i = 0; i < this.arrayStudent.length; i++) {
                    if(this.arrayStudent[i].id == id){
                        this.arrayStudent.splice(i, 1);
                        tbody.deleteRow(i);
                    }
                }
            }

        }
}

var student = new Student();