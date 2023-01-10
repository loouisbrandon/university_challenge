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

        console.log(this.arrayStudent);
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

        remove() {
   
        }
}

var student = new Student();