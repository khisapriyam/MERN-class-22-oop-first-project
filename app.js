

import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

//get elements

const staff_add_form = document.getElementById('staff_add_form');
const staff_data_list = document.getElementById('staff_data_list');

//Staff form submit for data add
staff_add_form.addEventListener('submit', function(e){
    e.preventDefault();

    //step-5.1
    const msg = document.querySelector('.msg')
    // console.log(msg)

    let form_data = new FormData(e.target);

    let data = Object.fromEntries(form_data.entries())
    
    let {name, cell, photo, location} = data;

    if(name == '' || cell == '' || location == ''){
        //step-5.2/6.1

        msg.innerHTML = Alert.danger('All fields are required');
        
    }
    else{
        // msg.innerHTML = Alert.success('Data Stable');
        //step-7.2

        Storage.set('staffs', data);
        

        //step-7.3

        staff_add_form.reset();
        getAllStaff();
    
    }

});

//step-8.1
//Get all Staff

getAllStaff()
function getAllStaff(){
    let data = Storage.get('staffs');

    //step-8.2

    let list = '';
    data.map((data, index)=>{

         //step-8.3 making dynamic

        let { name, cell, location, photo} = data;

        list += `
            <tr>
                <td>${index + 1}</td>
                <td>${name}</td>
                <td>${cell}</td>
                <td>${location}</td>
                <td><img style= "width:50px; height:50px; object-fit:cover;" src="${ photo ? photo : 'assets/img/avatar.jpeg'}"></td>
                <td>
                    <button class="btn btn-info btn-sm"><i class="fas fa-eye"></i></button>
                    <button class="btn btn-warning btn-sm"><i class="fas fa-edit"></i></button>
                    <button class="btn btn-danger btn-sm" onclick="staffDelete(${index})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `;
        

    });
    staff_data_list.innerHTML = list; 

}

//step-9.1

//Staff Delete

function staffDelete(id){
    console.log(id)
}
