let closeNavBar = document.querySelector('.mobile_nav_go_back');
let mobileMenu = document.querySelector('.mobile_menu');
openNavBar = document.querySelector('.burger');
openNavBar.addEventListener('click', openMenu)
function openMenu(){
    console.log('open')
    mobileMenu.classList.remove('hide');
}
closeNavBar.addEventListener('click', closeMenu);
function closeMenu(){
    mobileMenu.classList.add('hide');
    console.log('close');
}



function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
          // устроить проверку, есть ли анимированные объекты
          
          // 4 класса анимаций

          // если элемент содержит такой-то класс(детектор анимации), к нему добавляется такой-то класс(сама анимация)

     
        if(change.target.classList.contains('emersion_animation')){
            change.target.classList.add('show_from_the_bottom');
        }
        if(change.target.classList.contains('opacity_animation')){
            change.target.classList.add('increase_opacity')
        }
        
        if(change.target.classList.contains('opacity_and_emersion_animation')){
            change.target.classList.add('from_the_bottom_and_opacity')
        }
        // if(change.target.classList.contains('opacity_animation')){
        //     change.target.classList.add('increase_opacity')
        // }
        
        
        change.target.classList.remove('hide_content');
      }
    });
}
  // button, p, form - increase_opacity
  // h1 h2 - show_from_the_bottom
  //
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let headers = document.querySelectorAll('h1');
  let block_headers = document.querySelectorAll('h2');
//   if(block_headers){
//     for (let header of block_headers) {
//         observer.observe(header);
//       }
//   }

  // opacity animation
  let opacity_animation = document.querySelectorAll('.opacity_animation');
  for(let item of opacity_animation){
    observer.observe(item);
  }
  // emersion animation
  let emersion_animation = document.querySelectorAll('.emersion_animation');
  for(let item of emersion_animation){
    observer.observe(item);
  }

  let opacity_and_emersion_animation = document.querySelectorAll('.opacity_and_emersion_animation');
  for(let item of opacity_and_emersion_animation){
    observer.observe(item);
  }

// setTimeout(() => {
//   let form = document.querySelector('.form_block');
//   form.setAttribute('dark', '')
// }, 2000);
document.querySelector('.feedback_form_btn').addEventListener('click', changeTheme)
function changeTheme(e) {
  e.preventDefault();
  console.log('button clicked')
  let transition_span = document.querySelector('.add_theme_transition');
  transition_span.classList.toggle('theme__fill')
}
// let form_children = form.childNodes;

// for (let i = 0; i < form_children.length; i++) {
//   const item = form_children[i];
//   console.log(item)
//   item.setAttribute('dark','')
// }