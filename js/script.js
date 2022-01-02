$('li.nav-item div.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

function openside(){
  let sidebar = document.querySelector('.fixed--top')
  sidebar.className += ' fixed--left'
}



  let close = document.querySelector('#close-side')
  close.addEventListener('click' , (e)=>{
    let div = e.target.parentElement.parentElement.parentElement.parentElement
    div.className = 'fixed--top'
  })


function IsEmpty() {
  if (document.forms['frm'].question.value === "") {
    alert("لطفا نام دامنه را وارد کنید");
    return false;
  }
  return true;
}



