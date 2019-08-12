/**
 * Функция сортировки части массива с одинаковым значением
 * опыта по значению money
 */
function bubbleSortMoney(arr, firstIndex, lastIndex) {
    for (var i = firstIndex; i < lastIndex; i++) {
        var wasSwap = false
        for (var j = firstIndex; j < lastIndex - i; j++) {
            if (items[j].money < items[j + 1].money) {
                [items[j], items[j + 1]]=[items[j + 1], items[j]]
                wasSwap = true
            }
        }
        if (!wasSwap) break
    }
    return arr
}

module.exports.bubbleSortMoney = bubbleSortMoney