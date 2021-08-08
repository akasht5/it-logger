import React from 'react'
import { connect } from 'react-redux'
import Moment from 'react-moment'
import PropTypes from 'prop-types'
import { deletelog,setCurrent } from '../../actions/logActions'

const LogItem = ({ log,deletelog,setCurrent }) => {
    return (
        <li className="collection-item" onClick={() => setCurrent(log)}>
            <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? "red-text" : "blue-text"}`}>{log.message}</a><br/>
            <span className="grey-text">
                <span className="black-text">ID #{log.id} </span>last updated by{' '}
                <span className="black-text">{log.tech} </span>on{' '}
                <Moment>{log.date}</Moment>
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text" onClick={() => deletelog(log.id)}>delete</i>
                </a>
            </span>
        </li>
    )
}

LogItem.propTypes = {
    log : PropTypes.object.isRequired,
    deletelog : PropTypes.func.isRequired,
    setCurrent : PropTypes.func.isRequired
}

export default connect(null,{ deletelog,setCurrent })(LogItem);

