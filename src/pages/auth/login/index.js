import {  useAuthDispatch, loginUser} from '../../../context'
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import Style from "./style";

const Login = () => {
    document.title="PersiMovies / Login";
    let history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm({mode:onsubmit});
    const dispatch = useAuthDispatch();

    const handleLogin = async (data) => {
        try {
            let response = await loginUser(dispatch, data);
            if(!response.email) return;
            history.push('/')
        }catch(error){
            console.log(error)
        }
    }
    return (
        <Style>
            <form onSubmit={handleSubmit(handleLogin)}>
                <div>
                    <h2>Sign In With</h2>
                    <div className="login-with">
                        <div className="facebook">
                            <i className="fab fa-facebook-square"></i>
                            facebook
                        </div>
                        <div className="google">
                        <i className="fab fa-google"></i>
                            google
                        </div>
                    </div>
                    <h3>or </h3>
                    <div className="email__holder">
                        <label htmlFor="email">username</label>
                        <div className="input__holder">
                            <input 
                                {...register("email",
                                {required: true})}
                                type="email"
                                id='email'
                            
                            />
                            <span></span>
                        </div>
                            {errors.email && <p>Please Enter a validate E-mail</p>}
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <div className="input__holder">
                            <input 
                                type='password'
                                id='password'
                                {...register("password", 
                                { required: true,  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/ })}
                            
                            />
                            <span></span>
                        </div>
                            {errors.password && <p>
                                * Password should be atleast 8 characters
                               <br/> * Password should have atleast one uppercase and one lowercase letter
                               <br/> * Password should have atleast one digit character
                               <br/> * Password should have atleast one special character example : "@#$%^&*()-_+={}[]" 
                                </p>}
                    </div>
                    
                </div>
                <button type="submit" onClick={handleLogin}>
                    Sign In
                </button>
                <div className="not__member">
                    <span>Not a member?</span>
                    <span> Sign up now</span>
                </div>
            </form>
        </Style>
    )
}
export default Login