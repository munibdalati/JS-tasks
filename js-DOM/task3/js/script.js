//create heading
const heading = document.createElement("h1")
heading.textContent  = "My shopping list"
document.body.appendChild(heading)

//create enter
const enter = document.createElement("p")
enter.textContent  = "Enter a new item: "
document.body.appendChild(enter)

//create input box
const input = document.createElement("input")
input.type = "text"
input.id = 'myInput';
input.placeholder = 'Enter a value'; 
enter.append(input)

//create variable to input value


//create add item button
const addItemBtn = document.createElement("button")
addItemBtn.textContent = "Add item"
addItemBtn.addEventListener('click', function() {
    const inputValue = input.value
    let myVariable = inputValue;
    const output = document.createElement("p")
    output.textContent  ="\u2022" + myVariable
    input.value = ""
    document.body.appendChild(output)

    // create delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.textContent = "Delete"

    //make the delete button functionl
    deleteBtn.addEventListener('click', function(){
        output.remove()
    })

    
    output.append(deleteBtn)
  });
enter.append(addItemBtn)





