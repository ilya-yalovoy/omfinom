


document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('#side-menu').classList.toggle('_visible');
    document.querySelector('.menu').classList.toggle('_active');
   
})

document.querySelector('.avatar').addEventListener('click', function() {
  document.querySelector('.dropdown-list').classList.toggle('_visible');
})


function copyText(str) {
    navigator.clipboard.writeText(str)
  .then(() => {
    console.log('true')
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
}

function elementItem(name) {
    return document.querySelector(name);
}

function elementArr(name) {
    return document.querySelectorAll(name);
}


function visibleModal(element) {
    element.classList.toggle('_visible');
}