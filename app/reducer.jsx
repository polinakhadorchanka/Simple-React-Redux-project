let reducer = function(state = {}) {

    let vac = vacancies.positions.map(function(position) {
        return {
            ...position,
            path: '/' + position.company_name.replace(/ /g, '-') + '-' +
                position.position.replace(/ /g,'-')
        };
    });
    let newState = Object.assign({}, { ...state, vacancies: vac });
    window.localStorage.setItem('store', JSON.stringify(newState));
    return newState;
};

module.exports = reducer;