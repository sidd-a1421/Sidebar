const dropDownBtn = document.querySelectorAll('.dropdown-btn');
const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('#sidebar');
const subMenu = document.querySelectorAll('.sub-menu');

dropDownBtn.forEach(button => {
  button.addEventListener('click', () => {
    subMenu.forEach(menu => {
      if (menu !== button.nextElementSibling) {
        menu.classList.remove('show');
      }
    });
    dropDownBtn.forEach(btn => {
      if (btn !== button) {
        btn.classList.remove('rotate');
      }
    });
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
    if (sidebar.classList.contains('close')) {
      sidebar.classList.remove('close');
    }
  });
});


const navLinks = document.querySelectorAll('#sidebar a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if (sidebar.classList.contains('close')) {
      e.preventDefault(); 
      sidebar.classList.remove('close'); 
    }
  });
});



toggleBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('close');
    toggleBtn.classList.toggle('rotate');
    subMenu.forEach(submenu => {
        if(submenu.classList.contains('show')){
            submenu.classList.remove('show');
            dropDownBtn.forEach(button => {
                if(button.classList.contains('rotate')){
                    button.classList.remove('rotate')
                }
            });
        }
    });
});

