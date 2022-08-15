
  function handleForm(event) {
    event.preventDefault();
    const userSelections = document.querySelectorAll("input[name=grocery-option]:checked");
    let userSelectionsArray = Array.from(userSelections);
    const list = document.createElement("ul");

    let valuesArray = [];
    userSelectionsArray.forEach(function(selection){
      valuesArray.push(selection.value)
    })
    valuesArray.sort();
    valuesArray.forEach(function(element) {
      const listItem = document.createElement("li");
      listItem.append(element);
      document.body.append(list); 
      list.append(listItem);
    });
    
  }
  window.addEventListener("load", function() {
    document.querySelector("form#grocery-items").addEventListener("submit", handleForm);
  });