document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
})  

document.querySelectorAll('.accordion').forEach((accordion) => {
  const header = accordion.querySelector('.card-header')
  header.addEventListener('click', () => {
    const group = accordion.getAttribute('data-accordion-group')
    document.querySelectorAll(`[data-accordion-group="${group}"]`).forEach((groupAccordion) => {
      groupAccordion.querySelector('.card-content').classList.add('is-hidden')
    })

    accordion.querySelector('.card-content').classList.remove('is-hidden')
    
  })
})