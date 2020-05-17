const getTopTenCountriesByDeath = (countries) => {
    return arr.sort((a, b) => {
        return b.death - a.death
    }).splice(0, 10)
}

const calculateDeaths = (countries) => {
    return countries.reduce((sum, country) => sum + country.death, 0)
}

const calculateRecoveries = (countries) => {
    return countries.reduce((sum, country) => sum + country.recov, 0)
}

const getTopTenCountriesByCase = (countries) => {
    return arr.sort((a, b) => {
        return b.case - a.case
    }).splice(0, 10)
}

const calculateCases = (countries) => {
    return countries.reduce((sum, country) => sum + country.case, 0)
}

const getTopTenCountriesByRecov = (countries) => {
    return arr.sort((a, b) => {
        return b.recov - a.recov
    }).splice(0, 10)
}
