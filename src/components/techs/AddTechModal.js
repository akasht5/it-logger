import React,{useState} from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'
import { connect } from 'react-redux'
import { addTech } from '../../actions/techActions';

const AddTechModal = ({ addTech }) => {
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');

    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({ html:'<i class="material-icons icon-alert">error_outline</i> Please enter first and last name !',classes : 'round'});
        }else{
            const newTech = {
                firstName,
                lastName
            }
            addTech(newTech);
            M.toast({ html:`${firstName} ${lastName} added as a new technician !`,classes:'round' });
            
            //Clear Fields
            setFirstName('');
            setLastName('');

        }
    }

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light blue btn">Add</a>
            </div>
        </div>
    )
}

export default connect(null,{ addTech })(AddTechModal)
