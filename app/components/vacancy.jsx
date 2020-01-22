let actions = require("../actions.jsx");
let connect = require("react-redux").connect;

class VacancyBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpening: false
        };

        this.onClickView = this.onClickView.bind(this);
    }

    onClickView() {
        this.setState({isOpening: true});
    }

    render() {
        return <div className={this.state.isOpening ? "vacancy-block open-block" : "vacancy-block"}>
            <div className="my-row">
                <div>
                    <span className="position">{this.props.position.position}</span> <br/>
                </div>
                <div>
                    <a href={this.props.position.url} target="_blank">
                        <input type="button" className="button" value="View" onClick={this.onClickView}/>
                    </a>
                </div>
            </div>

            <span className="company-name">
                <a href={this.props.position.website} target="_blank">
                    {this.props.position.company_name}
                </a>
                {this.props.position.country ? ' / ' + this.props.position.country : undefined}
            </span>

            <span className="date">{this.props.position.date}</span>
            <span className="company-name">{this.props.position.location ? 'Location: ' + this.props.position.location :
                undefined}</span>
            <hr/>
            <div className="description" dangerouslySetInnerHTML = {{__html: this.props.position.description}} />
        </div>;
    }
}

class VacancyList extends React.Component {
    render() {
        return <div className="vacancy-list">
            {
                this.props.store.vacancies && this.props.store.vacancies.map(function(vacancy){
                    return <VacancyBlock position={vacancy} />
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

module.exports = connect(mapStateToProps)(VacancyList);