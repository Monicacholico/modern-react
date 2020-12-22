function choice(items) {
    let randomItem = Math.floor(Math.random() * items.length);
    return items[randomItem];
}

function remove(items, elem) {
return items.filter( item => {
     if(item !== elem) {
         return items
     }
 })
}

