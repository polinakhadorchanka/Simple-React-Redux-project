let openVacancy = function(path, vacancy) {
    return {
        type: 'OPEN_VACANCY',
        path,
        vacancy
    }
};

let closeVacancy = function(path) {
    return {
        type: 'CLOSE_VACANCY',
        path
    }
};

module.exports = {openVacancy, closeVacancy};