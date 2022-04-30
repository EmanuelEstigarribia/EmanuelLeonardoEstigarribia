let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
}

window.onscroll = () =>{
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}



//bucle while
let ingreso = prompt("Ingrese una Hamburguesa o escriba la palabra 'SALIR'");

while(ingreso != "SALIR"){
   //operaciones
   console.log("El producto ingresado" + ingreso);
   ingreso = prompt("ingrese otra hamburguesa");

   repetir=false;
}


