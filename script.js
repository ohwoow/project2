const btnOpenSidebar = document.querySelector('.open-sidebar')
const sidebar = document.querySelector('.sidebar')
const content = document.querySelector('.content')

btnOpenSidebar.addEventListener('click', function(e) {
  sidebar.classList.toggle('active')
})