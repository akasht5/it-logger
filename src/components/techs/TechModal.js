import React,{ useEffect } from 'react'
import TechItem from './TechItem'
import { connect } from 'react-redux'
import { getTechs } from '../../actions/techActions'

const TechModal = ({ getTechs,tech: {techs,loading} }) => {
    useEffect(() => {
        getTechs();
    //eslint-disable-next-line
    },[]);

    return (
        <div id="tech-modal" className="modal">
            <div className="modal-content">
                <h4>Technicians List</h4>
                <ul className="collection">
                {!loading &&
                    techs !== null &&
                    techs.map(tech => <TechItem tech={tech} key={tech.id} />)} 
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    tech : state.tech
})

export default connect(mapStateToProps,{ getTechs })(TechModal)
