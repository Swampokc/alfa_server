/**  
 * Функция сортировки всего массива объектов опыту
*/
function bubbleSortRate(items) {
    for (var i = 0; i < items.length - 1; i++) {
        var wasSwap = false;
        for (var j = 0; j < items.length - 1 - i; j++) {
            if (items[j].rate < items[j + 1].rate) {
                [items[j], items[j + 1]]=[items[j + 1], items[j]]
                wasSwap = true
            }
        }
        if (!wasSwap) break
    }
    return items
}

module.exports.bubbleSortRate = bubbleSortRate