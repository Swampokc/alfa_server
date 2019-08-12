const sortRate = require('./bubbleSortRate')
const sortMoney = require('./bubbleSortMoney')

function getTop5() {
    const items = require('../db/index')

    var cleanSortData

    if (items != null)
        cleanSortData = prepareData(items)

    var top5 = []
    var i = 0;
    while(cleanSortData[i].place <= 5) {
        top5.push(cleanSortData[i])
        i++
    }

    return top5
}

function getFull() {
    const items = require('../db/index')

    if (items != null)
        return prepareData(items)
}

function prepareData(items) {

    var cleanData = [];

    function addPerson(place, fio, status, rate, money) {
        cleanData.push({
            place: place,
            fio: fio,
            status: status,
            rate: rate,
            money: money
        })
    }

    for (var i = 0; i < items.length; i++) {
        var rateAndMoney = getRateAndMoney(items[i])
        addPerson(null, items[i]['fio'], items[i]['level'], rateAndMoney.rate, rateAndMoney.money)
    }

    var cleanSortData = sortRate.bubbleSortRate(cleanData)
    for (var i = 0; i < items.lenth - 1; i++) {
        count = 0
        while (cleanSortData[i].rate == cleanSortData[i + 1].rate) {
            count++
            i++
        }
        if (count > 0)
            cleanSortData = sortMoney(cleanSortData, i, i + count)
    }

    place = 1
    var i = 0
    while (i != cleanSortData.length - 1) {
        cleanSortData[i].place = place
        if (cleanSortData[i].rate != cleanSortData[i + 1].rate || cleanSortData[i].money != cleanSortData[i + 1].money) {
            place++
        }
        i++
    }

    return cleanSortData
}

function getRateAndMoney(item) {
    var rateSum = 0
    var money
    for (var i = 0; i < 4; i++) {
        if (item['resources'][i]['resource'] === 'ACTIVERATE')
            rateSum += item['resources'][i]['value']
        if (item['resources'][i]['resource'] === 'PASSIVERATE')
            rateSum += item['resources'][i]['value']
        if (item['resources'][i]['resource'] === 'MONEY')
            money = item['resources'][i]['value']
    }

    return ({
        rate: rateSum,
        money: money
    })
}

module.exports.getFull = getFull
module.exports.getTop5 = getTop5