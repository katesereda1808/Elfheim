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
if(document.querySelector('.feedback_form_btn')){
  document.querySelector('.feedback_form_btn').addEventListener('click', changeTheme)
  function changeTheme(e) {
  e.preventDefault();
  console.log('button clicked')
  let transition_span = document.querySelector('.add_theme_transition');
  transition_span.classList.toggle('theme__fill')
}

}




if(document.querySelector('.project_page')){
  let text_half = document.querySelector('.text_half');
  let img_half = document.querySelector('.img_half');
  let texts_arr = [`<div class="text_half__content text_centre hidden first_slide" id="0"><div class="chevron desktop">
  <img src="./assets/Icons/Back.svg" alt="">
</div>
<h2 class="block_heading">Гостиная комната</h2>
<p class="typing_animation">Давным давно...</p>
<p>Мы еще пишем историю для это проекта, скоро она появится на сайте!</p></div>`, `<div class="text_half__content text_centre hidden" id="1"><div class="chevron desktop">
<img src="./assets/Icons/Back.svg" alt="">
</div>
<h2 class="block_heading">Гостиная по индивидуальному дизайн-проекту</h2>
<p>Мы часто работаем с заказчиками, предоставляющими макеты с собственными дизайн-проектами. Каждый по-своему уникален и требует особого мастерства и подхода, чтобы воплотить замысел автора с максимальной точностью. </p>
<p>Таким оказался и недавний проект гостиной. Делимся впечатлениями.</p></div>`, `<div class="text_half__content text_centre hidden" id="2"><div class="chevron desktop">
<img src="./assets/Icons/Back.svg" alt="">
</div>
<h2 class="block_heading">Этап 1. Обговорили детали</h2>
<p>Все работы велись в тесной связке с заказчиком: любые пожелания, подбор материалов, расположение мебели — все с согласия клиента. Обсуждалось всё — вплоть до цветов. Именно они вместе с правильным расположением света и должны были помочь создать желаемую атмосферу уюта и комфорта. </p>
<h3>Какую цель преследовали?</h3>
<p>Выполнить гостиную в «ламповом» исполнении: грамотно расставить акценты, подобрать тона, поработать со светом и максимально облегчить пространство, сохранив теплоту и благоустроенность дома.</p></div>`, `<div class="text_half__content text_centre hidden" id="3"><div class="chevron desktop">
<img src="./assets/Icons/Back.svg" alt="">
</div>
<h3 class="block_heading">На каком цвете мебели остановились?</h3>
<p>Выбрали коричневый, тёплый чёрный цвета — они отлично подчёркивают характер хозяев, наделяют помещение особым шармом. При этом не накапливают негатив и здорово сочетаются с мягкими оттенками стен, потолка и пола.</p>
<h3>Из каких материалов решили изготавливать мебель?</h3>
<p>Панели из высококачественного шпона, эмалированный МДФ — это современные, наиболее износостойкие и неприхотливые материалы: они хорошо переносят перепады температуры, не боятся воды и не трескаются от времени. Да и уход за ними — одно удовольствие.</p></div>`];
  let img_arr = [`<img class="project_img_animation project_img" src="./assets/Images/Cat/1.jpg" alt="">`, `<img class="project_img_animation project_img" src="./assets/Images/Cat/2.jpg" alt="">`, `<img class="zoomIn zoomed project_img" src="./assets/Images/Cat/2.jpg" alt="">`, `<img class="project_img_animation project_img" src="./assets/Images/Cat/3.jpg" alt="">`];

  function addText(arr, i) {
    if(!arr[i]){
      i=0;
    }
    let text_content = document.querySelector('.text_half__content');
    if(text_content){
      text_content.classList.add('hidden');
      findSlide(arr, i)
    } else {
      findSlide(arr, i)
    }
    setTimeout(()=>{
        document.querySelector('.text_half__content').classList.remove('hidden')
    }, 0)
  }
  function addImg(arr, i){
    if(document.querySelector('.project_img_animation')){
      document.querySelector('.project_img_animation').classList.remove('project_img_animation')
    }
    else if(document.querySelector('.zoomIn')){
      document.querySelector('.zoomIn').classList.remove('zoomIn')
    }
    if(!arr[i]){
      img_half.innerHTML = '';
      i=0;
    }
    img_half.innerHTML += arr[i];
  }
  function findSlide(arr, i){
    arr.map((item, index)=>{
        if(i === index){
          text_half.innerHTML=item;
        }
      });
  }
  addText(texts_arr, 0);
  addImg(img_arr, 0);
  
  let isEvent = false;
  let project_block = document.querySelector('.project_page__block1_content');
  console.log(project_block)
  project_block.addEventListener('wheel', function name(e) {
    if(e.deltaY >0 && window.scrollY < 100){
      e.preventDefault();
      e.stopPropagation();
      if(!isEvent){
        isEvent = true;
        setTimeout( function() {
        let text = document.querySelector('.text_half__content');
        let id = +text.id;
        addText(texts_arr, (id+1));
        addImg(img_arr, (id+1));
          isEvent = false;
        }, 1500 );
      }
    }
  }
  )
}