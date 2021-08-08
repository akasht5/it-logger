import React,{ Fragment,useRef } from 'react'
import { connect } from 'react-redux'
import { searchLogs } from '../actions/logActions'

const SearchBar = ({ searchLogs }) => {
    const text = useRef('');
    const onSearchLogs = (e) => {
        searchLogs(text.current.value);
    }
    return (
        <Fragment>
            <nav style={{ marginBottom : "30px" }} className="blue">
                <div className="nav-wrapper">
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" required ref={text} onChange={onSearchLogs} />
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav> 
        </Fragment>
    )
}

export default connect(null,{ searchLogs })(SearchBar)