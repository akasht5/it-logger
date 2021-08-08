import React,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { addlog } from '../../actions/logActions'
import TechSelectOption from '../techs/TechSelectOption'

const AddLogModal = ({ addlog }) => {
    const [message,setMessage] = useState('');
    const [attention,setAttention] = useState(false);
    const [tech,setTech] = useState('');
    
    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({ html:`<i class="material-icons ">error_outline</i><span> Please enter a message and tech !</span>`,classes:'round' })
        }else{
            const log = {
                message,
                attention,
                tech,
                date : Date.now()
            };
            addlog(log);
            M.toast({ html:`Log successfully added by ${tech}`,classes:'round' });
        }
    }

    return (
        <div id="add-log-modal" className="modal modal2" style={modalStyle}>
            <div className="modal-content">
                <h4>Add System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={ e => setMessage(e.target.value) } />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <TechSelectOption /> 
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className=" modal-close blue btn">Enter</a>
            </div>
        </div>
    )
}


const modalStyle = {
    width:'75%',
    height:'75%'
};

export default connect(null,{ addlog })(AddLogModal)
