let userDay = prompt("Entrez le jour de la semaine").toLowerCase();

switch(userDay){
    case 'samedi':
        alert('demain sera Dimanche');
        break;
    case 'dimanche':
        alert('demain sera Lundi');
        break;
    case 'lundi':
        alert('demain sera Mardi');
        break;
    case 'mardi':
        alert('demain sera Mercredi');
        break;
    case 'mercredi':
        alert('demain sera Jeudi');
        break;
    case 'Jeudi':
        alert('demain sera Vendredi');
        break;
    case 'Vendredi':
        alert('demain sera Samedi');
        break;
    default:
        alert('Entre un jours de la semaine valide');
}
