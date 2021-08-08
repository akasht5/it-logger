import React,{useState,useEffect} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { updatelog } from '../../actions/logActions';
import TechSelectOption from '../techs/TechSelectOption'

const EditLogModal = ({ current,updatelog }) => {
    const [message,setMessage] = useState('');
    const [attention,setAttention] = useState(false);
    const [tech,setTech] = useState('');
    
    useEffect(() => {
        if(current){
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
        }
    },[current]);

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({ html:'<i class="material-icons icon-alert">error_outline</i>  Please enter a message and tech !',classes:'round' });
        }else{
            const updlog = {
                id:current.id,
                message,
                attention,
                tech,
                date:new Date()
            }

            updatelog(updlog);
            M.toast({ html:'Log successfully updated !',classes:'round'})
            //Clear Current fields
            setMessage('');
            setAttention('');
            setTech('');
        }
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Edit System Log</h4>
                <div className="row">
                    <div className="input-field">
                        Log Message
                        <input type="text" name="message" value={message} onChange={ e => setMessage(e.target.value) } />
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

const mapStateToProps = state => ({
    current:state.log.current
});

export default connect(mapStateToProps,{ updatelog })(EditLogModal);