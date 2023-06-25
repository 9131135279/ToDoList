let input1 = document.getElementById('input1') // first input inside the form
let input2 = document.getElementById('input2') // first input inside the form
//both input ^^^^^
let form1 = document.getElementById('formbox')// from of html
let ulbox = document.getElementById('ulbox')// ul with lies......


console.log('pass Outside 1')

form1.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input1.value.trim() === '' || input2.value.trim() === '') {
        return;
    }
    let newli = document.createElement('li');
    newli.innerHTML = '<strong>Title:</strong> ' + input1.value.toUpperCase() + '<br>' + "<strong>Description:</strong> " +  input2.value.charAt(0).toUpperCase() + input2.value.slice(1);
    let spanbox = document.createElement('span')
    spanbox.innerHTML = '❌';
    newli.appendChild(spanbox)
    ulbox.appendChild(newli)
    input1.value = '';
    input2.value = '';
    storeItem();
});
console.log('pass Outside 2')

ulbox.addEventListener('click', function(x) {
    if (x.target.tagName.toLowerCase() === 'li') {
        x.target.classList.toggle('libox')
        storeItem();
    }

    else if (x.target.tagName.toLowerCase() === 'span') {
        x.target.parentElement.remove();
        storeItem();
    }
},false)

// assigning value to local storage
function storeItem() {
    localStorage.setItem('data', ulbox.innerHTML)
}
function releaseItem() {
    ulbox.innerHTML = localStorage.getItem('data');
}

releaseItem();