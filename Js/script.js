
const formSubmit=document.getElementById('#form')

formSubmit.addEventListener('submit',(e) => {
e.preventDefault()
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const address = document.getElementById('address')
const enail = document.getElementById('email')
const pincode = document.getElementById('pincode')
const gender = document.getElementById('gender')
const food = document.getElementById('food')
const state = document.getElementById('state')
const country = document.getElementById('country')

const array = [firstName,lastName,address,pincode,gender,food,state,country]

const tableRow = document.createElement('tr')
const count = 0;
for(const i = 0; i < array.length; i++){
  if(array[i].value  != ''){
    const tableData = document.createElement('td')
    tableData.innerHTML=array[i].value
    tableRow.append(tableData)
    count++
  
  }
  
}
if(count > 2) {
  document.getElementById('tbody').append(tableRow)
}else{
  alert("Must choose at least 2 out of 5 options")
}




for(let i of array){
  i.value = ''
}

})