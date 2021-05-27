const menus = ['Banane malaxe', 'Riz sauce tomate', 'Epinards sautés...', 'Plantains tapés', 'Taro sauce jaune', 'Koki accompagné...', 'Macabo rapé', 'Ignames sautés', 'Cotisses au four', 'Poissons braisés', 'Spaghtetti à la bolognaise']



let dernier;
let nombreAleatoire;
let genererMenu   = document.querySelector('.btn1')
let menu          = document.querySelector('.menu')
genererMenu.addEventListener('click', afficherMenu)

function afficherMenu(){
do{
        nombreAleatoire = Math.floor(Math.random()*(menus.length ))
}while(nombreAleatoire == dernier)
menu.textContent  = menus[nombreAleatoire]
dernier = nombreAleatoire
  
}