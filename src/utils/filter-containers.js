export function filterContainers() {
  let filterValue = document.querySelector('#filter').value;
  let containers = document.querySelectorAll('.container');
  for (let i = 0; i < containers.length; i++) {
    let spanText = containers[i].querySelector('span').innerHTML;
    if (spanText.indexOf(filterValue) >= 0) {
      containers[i].classList.remove('hide');
    }
    else {
      containers[i].classList.add('hide');
    }
  }
}
