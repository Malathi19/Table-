var data = []
function create(){ var name1 = document.getElementById("Name").value;
      var age2 = document.getElementById("Age").value;
      var mail3 = document.getElementById("email").value;
      data.push ({"name":name1,"age":age2,"email":mail3})
      CreateRow()
      }
function CreateRow(){
      var table =document.getElementById('table')
      var tr = document.createElement('tr')
      var Name = document.createElement('td')
      var Age = document.createElement('td')
      var Email = document.createElement('td')
      var SNO = document.createElement('td')
      var Edit = document.createElement('button')
      var Save = document.createElement('button')
      var Delete = document.createElement('button')
      Name.innerText=data[data.length-1].name
      Age.innerText=data[data.length-1].age
      Email.innerText=data[data.length-1].email
      SNO.innerText=data.length
        
      var Rowno =  table.rows.length-1;
      //Name.setAttribute('contenteditable', true)
      //Age.setAttribute('contenteditable', true)
      //Email.setAttribute('contenteditable', true) 
      //Name.setAttribute('id',"row"+Rowno)
      //Age.setAttribute('id',"row"+Rowno)
      //Email.setAttribute('id',"row"+Rowno)

      

      Edit.innerText="Edit"
      Delete.innerText="Delete"
      Save.innerText='Save'
      Edit.addEventListener('click',editFunction())
      //Delete.addEventListener('click',deletefunc())
     //Edit.setAttribute(onclick ="editRow;")
      tr.appendChild(Name);
      tr.appendChild(Age)
      tr.appendChild(Email)
      tr.appendChild(SNO)
      tr.appendChild(Edit)
      tr.appendChild(Save)
      tr.appendChild(Delete)
   
      table.appendChild(tr)
      
      function editFunction(){
            console.log("Rowno")
      }
      

     
}
    


