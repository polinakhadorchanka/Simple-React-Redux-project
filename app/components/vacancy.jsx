let actions = require("../actions.jsx");
let connect = require("react-redux").connect;

const Link = ReactRouterDOM.Link;

class Vacancy extends React.Component {
    constructor(props) {
        super(props);
        window.scrollTo(0, 0);

        this.state = {
            item : Vacancy.getItemInfo(props.store.vacancies),
            title: document.title + ' - ' + this.props.match.params.position
        };
    }

    static getItemInfo(vacancies) {
        let path = window.location.pathname;
        return vacancies.find(vacancy => vacancy.path === path);
    }

    render() {
        document.title = this.state.title;

        return <div className="vacancy-list">
            <div className="vacancy-block whitout-hover">
                <div className="my-row">
                    <div>
                        <span className="position">
                            {this.state.item.position}
                        </span> <br/>
                        <span className="company-name">
                            {this.state.item.company_name}
                        </span>
                    </div>
                    <span className="date">{this.state.item.date}</span>
                </div>
            </div>
            <div className="description" dangerouslySetInnerHTML = {{__html: this.state.item.description}} />
        </div>;
    }
}

class VacancyBlock extends React.Component {
    render() {
        return <Link to={'/' + this.props.position.company_name.replace(/ /g, '-') + '-' +
        this.props.position.position.replace(/ /g,'-')} target='_blank'>
            <div className="vacancy-block">
                <div className="my-row">
                    <div>
                        <span className="position">{this.props.position.position}</span> <br/>
                        <span className="company-name">{this.props.position.company_name}</span>
                    </div>
                    <span className="date">{this.props.position.date}</span>
                </div>
            </div>
        </Link>;
    }
}

class VacancyList extends React.Component {
    render() {
        let openVacancy = this.props.openVacancy;

        return <div className="vacancy-list">
            {
                this.props.store.vacancies && this.props.store.vacancies.map(function(vacancy){
                    return <VacancyBlock position={vacancy} openVacancy={openVacancy}/>
                })
            }
        </div>;
    }
}

function mapStateToProps(store) {
    return {
        store: store
    };
}

let VacList = connect(mapStateToProps, actions)(VacancyList),
    Vac = connect(mapStateToProps, actions)(Vacancy);

module.exports = {VacList, Vac};