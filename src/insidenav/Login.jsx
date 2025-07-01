import { RiCloseFill } from "react-icons/ri";
import Googlelogo from "/images/googlelogo.svg"
import Email from "/images/email.svg"
import { FaApple } from "react-icons/fa";
import Indianflag from "/images/indianflag.svg"


function Login() {

    

  return (
    <>
        <div className="login-main-div ">
            <div className="login-div "> 
                <div className=" empty-div  ">
                    
                    <div className="content-div ">

                        <div className="get-started-div get">
                            <div className="getstart">
                                Get started
                            </div>
                            <div className="cls ">
                                <div className="cls-2">
                                    <RiCloseFill  className='clo '/>
                                </div>
                            </div>
                        </div>

                        <div className="continue-section  ">
                                <div className="continue-with-parent ">

                                    <div className="continue-with-child-one ">
                                        
                                        <div className="continue-with-grandchild ">

                                            <div className="continue-with-grandchild-1 ">
                                                <div className="continue-with-grandchild-1-1 ">
                                                    <div className="continue-with-google-div ">
                                                        <span className='continue-with-google-text'>
                                                            <span className='google-logo-span '>
                                                                <img className='google-logo' src={Googlelogo} alt="google" />
                                                            </span>
                                                        </span>
                                                        Continue with Google
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="continue-with-grandchild-1">
                                                <div className="continue-with-grandchild-1-1">
                                                    <div className="continue-with-google-div ">
                                                        <span className='continue-with-google-text '>
                                                            <span className='google-logo-span '>
                                                                <img className='google-logo' src={Email} alt="email" />
                                                            </span>
                                                        </span>
                                                        Continue with Email
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="continue-with-grandchild-1 ">
                                                <div className="continue-with-grandchild-1-1">
                                                    <div className="continue-with-google-div ">
                                                        <span className='continue-with-google-text '>
                                                            <span className='google-logo-span '>
                                                                <FaApple className='apple-icon' />
                                                            </span>
                                                        </span>
                                                        Continue with apple
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="continue-with-child-two ">

                                        <div className="or-div ">OR</div>
                                </div>

                                <form className="form-parent ">
                                <div className="form-child-1 ">
                                    <div className="form-grand-child-1 ">

                                        <div className="indian-flag-div ">
                                            <img className='indian-flg ' src={Indianflag} alt="" />
                                        </div>

                                        <div className="ninetyone-text ">+91</div>

                                        <div className="input-box">
                                            <div className="input-div ">
                                                <label className='lable ' htmlFor=""></label>
                                                <input className='in-put ' type="tel" placeholder='Continue with mobile number' /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-child-2 ">
                                    <div className="i-agree-div ">
                                        I agree to the &nbsp;
                                        <a className='terms-policy' href="">Terms & Conditions</a> 
                                        &nbsp; & &nbsp;
                                        <a className='terms-policy' href="">Privacy policy</a>
                                    </div>
                                </div>
                        </form>

                        </div>
                                                                       
                    </div>

                </div>

            </div>
        </div>
    </>
  )
}

export default Login