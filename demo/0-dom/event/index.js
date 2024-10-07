console.log('division par 0', 1000/0) // possible en JS
const eventCallback = (e) =>  {
    console.log('event', e)
}
// 1. Séléctionner l'élément
const btn = document.querySelector('button')
// 2. Greffer un événement
btn.addEventListener('click', eventCallback)
// 3. callback = fonction qui sera exécutée lorsque l'événement aura lieu
/**
 * Fonction nommée dans le cadre d'une reutilisation de la même logique sur d'autres listeners
 */
btn.addEventListener('mouseenter', (e) => {
    console.log('event with anonym function', e)
})
btn.addEventListener('mouseleave', eventCallback)