const { useState } = require("react")

import { SetServices } from '../Redux/actions/actions'
import { connect } from 'react-redux'
const Service = function () {
    const [activePage, setActivePage] = useState(0);
    const [totalPages, setTotalPages] = useState()

    return (
        <div>
            <h3 className="text-center">Services</h3>
            <div id="Yacht" className="id-div">
                <h5 className="text-primary">Yacht Services</h5>

                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <button type="button" className="page-link" tabIndex="-1">Previous</button>
                        </li>
                        <li className="page-item active"><button type="button" className="page-link">1</button></li>
                        <li className="page-item"><button type="button" className="page-link">2</button></li>
                        <li className="page-item"><button type="button" className="page-link">3</button></li>
                        <li className="page-item">
                            <button type="button" className="page-link">Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps
    return {
        services: state.servicesReducer.filter(x => x.id === id),
        stats: state.servicesReducer.services_by_category[ownProps.id]
    }
}
const mapDispatchToProps = dispatch => {
    return {
        setServices: function (category, services) {
            dispatch(SetServices(category, services))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Service)