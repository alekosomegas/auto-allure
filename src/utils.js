export function airportDelivery(locations, pickCity, dropCity) {
    let deliveries = {}
    if(locations.pick === "Larnaka Airport") deliveries["Pick-up charge"] = 70
    if(locations.drop === "Larnaka Airport") deliveries["Drop-off charge"] = 70
    if(locations.pick === "Paphos Airport") deliveries["Pick-up charge"] = 70
    if(locations.drop === "Paphos Airport") deliveries["Drop-off charge"] = 70


    if(locations.pick === "Other") {
        switch (pickCity) {
            case "Limassol":
                deliveries["Pick-up charge"] = 0
                break
            case "Larnaca":
                deliveries["Pick-up charge"] = 70
                break
            case "Paphos":
                deliveries["Pick-up charge"] = 70
                break
            case "Nicosia":
                deliveries["Pick-up charge"] = 80
                break
            case "Famagusta":
                deliveries["Pick-up charge"] = 80
                break
        } 
    }
    if(locations.drop === "Other") {
        switch (dropCity) {
            case "Limassol":
                deliveries["Drop-off charge"] = 0
                break
            case "Larnaca":
                deliveries["Drop-off charge"] = 70
                break
            case "Paphos":
                deliveries["Drop-off charge"] = 70
                break
            case "Nicosia":
                deliveries["Drop-off charge"] = 80
                break
            case "Famagusta":
                deliveries["Drop-off charge"] = 80
                break
        } 
    }

    return deliveries
}

export function toCurrency(number) {
    if (isNaN(number)) return
    return number.toLocaleString(undefined, { style: 'currency', currency: 'EUR' })
}

function getMaxPrice(key) {
    switch (key) {
        case "Additional Driver":
            return 10
        case "Infant Seat":
            return 5
        case "Child Seat":
            return 5
        case "Booster Seat":
            return 5

    }
}

export function extrasPrice(key, days) {
    let max = getMaxPrice(key)
    if(days < 3) return max
    if(days < 8) return max * 6/10
    if(days < 15) return max / 2
    return max * 2/5
}