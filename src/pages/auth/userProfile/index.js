import { useAuthState,useAuthDispatch,editUser,deleteUser } from "../../../context";
import {MD5} from '../../../helpers/md5'
import Style from "./style";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";


const UserProfile = () => {
    document.title="PersiMovies / User Profile";
    const userDetails = useAuthState()
    const { register, handleSubmit, formState: { errors } } = useForm({mode:onsubmit});
    const dispatch = useAuthDispatch();
    const history = useHistory()

    const editHandler = (e) => {
        const saveBtn = document.querySelector('.buttons__save')
        const cancelBtn = document.querySelector('.buttons__cancel')
        const phoneNumber=document.querySelector('#phone-number')
        const idNumber=document.querySelector('#id-number')
        const firstName=document.querySelector('#first-name')
        const lastName=document.querySelector('#last-name')

        saveBtn.classList.add('show')
        cancelBtn.classList.add('show')
        phoneNumber.disabled=false
        idNumber.disabled=false
        firstName.disabled=false
        lastName.disabled=false
        phoneNumber.value=""
        idNumber.value=""
        firstName.value=""
        lastName.value=""
        e.target.style.display='none'
    }
    const cancelHandler = () => {
        const saveBtn = document.querySelector('.buttons__save')
        const cancelBtn = document.querySelector('.buttons__cancel')
        const editBtn = document.querySelector('.buttons__edit')
        const phoneNumber=document.querySelector('#phone-number')
        const idNumber=document.querySelector('#id-number')
        const firstName=document.querySelector('#first-name')
        const lastName=document.querySelector('#last-name')

        saveBtn.classList.remove('show')
        cancelBtn.classList.remove('show')
        editBtn.style.display='inline-block'
        phoneNumber.value=""
        idNumber.value=""
        firstName.value=""
        lastName.value=""
        phoneNumber.disabled=true
        idNumber.disabled=true
        firstName.disabled=true
        lastName.disabled=true
        
    }
    const saveHandler =async (data) => {
        const message = document.querySelector('.notification')
        try {
            let response = await editUser(dispatch, data, userDetails.id);
            if(!response.firstName) return;
            message.innerHTML="your profile has been updated";
            cancelHandler();
        }catch(error){
            console.log(error)
            message.innerHTML=Error
        }

    }
    const showModal = () => {
        const modal = document.querySelector('.modal')
        modal.style.display="block"
    }

    const handleNo = () => {
        const modal = document.querySelector('.modal')
        modal.style.display="none"
    }
    const handleYes = async () => {
        try {
            let response= await deleteUser(dispatch, userDetails.id);
            if(response) {
                history.push('/login')
                alert('You just deleted yourr account')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Style >
            <h2>User Profile</h2>
            <hr/>
            <div className="avatar">
                <div className="avatar__img">
                    <img src={`https://www.gravatar.com/avatar/${MD5(userDetails.email)}?d=wavatar&r=g`} alt="user profile"/>
                </div>
                <div className="avatar__caption">
                    <h5>Profile Photo</h5>
                    <span>Accepted file type .png. Less than 1MB</span>
                    <div className="avatar__caption-upload">Upload</div>
                </div>
            </div>
            <hr/>
            <form onSubmit={handleSubmit(saveHandler)}>
            <div className="notification"></div>
            <div className="details">
                <div className="details__id">
                    <label>id</label>
                    <br/>
                    <input 
                        type="text"
                        placeholder={userDetails.id}
                        disabled={true}
                        
                        />
                </div>
                <div className="details__name">
                    <label htmlFor="first-name">First Name</label>
                    <br/>
                    <input 
                        {...register("firstName",
                        {required: true, pattern: /^[A-Za-z]+$/i, minLength: 3})}
                        id="first-name"
                        type='text'
                        placeholder={userDetails.firstName}
                        disabled={true}
                        />
                    {errors.firstName && <p> * Please Enter a valid first name</p>}
                </div>
                <div className="details__last-name">
                    <label htmlFor="last-name">Last Name</label>
                    <br/>
                    <input 
                        {...register("lastName",
                        {required: true, pattern: /^[A-Za-z]+$/i, minLength: 3})}
                        id="last-name"
                        type="text"
                        placeholder={userDetails.lastName}
                        disabled={true}
                        />
                    {errors.lastName && <p> * Please Enter a valid last name</p>}
                </div>
                <div className="details__email">
                    <label>Email Address</label>
                    <br/>
                    <input 
                        type="email"
                        placeholder={userDetails.email}
                        disabled={true}
                        />
                    
                </div>
                <div className="details__id-number">
                    <label htmlFor="id-number">Id Number</label>
                    <br/>
                    <input 
                        {...register("idNumber",
                        {required: true, pattern:/^[1-9]\d{6,9}/, minLength: 6 , maxLength: 9})}
                        id="id-number"
                        type="text"
                        placeholder={userDetails.idNumber}
                        disabled={true}
                        />
                    {errors.idNumber && <p> * Please Enter a valid id number</p>}
                </div>
                <div className="details__tell">
                    <label htmlFor="phone-number">Phone Number</label>
                    <br/>
                    <input 
                        {...register("phoneNumber",
                        {required: true, pattern:/^[0-9]\d/, minLength: 10 , maxLength: 11})}
                        id="phone-number"
                        type="text"
                        placeholder={userDetails.phoneNumber}
                        disabled={true}
                        />
                    {errors.phoneNumber && <p> * Please Enter a valid phone number</p>}
                </div>
            </div>
            <div className="buttons">
                <div className="buttons__edit btn" onClick={editHandler}>
                    edit profile
                </div>
                <button type="submit" className="buttons__save btn"   onClick={saveHandler}> 
                    save edits
                </button>
                <div className="buttons__cancel btn" onClick={cancelHandler}>
                    cancel
                </div>
            </div>
            <hr/>
            <div className="deactive">
                <div>
                    <h4>desable your account?</h4>
                    <p>your account will  <span>Permanently</span>  disable </p>
                </div>
                <div className="deactive__btn btn" onClick={showModal}>
                    disable account
                </div>
            </div>
            </form>
            <div className="background"></div>
            <div className="modal" onClick={handleNo}>
                <div className="modal__box">
                    <h2> are you sure ? </h2>
                    <div>
                        <button type="submit" className="btn yes" onClick={handleYes}>yes</button>
                        <div className="btn no" onClick={handleNo}> no </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}

export default UserProfile;