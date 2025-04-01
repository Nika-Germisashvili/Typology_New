import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./registration.css";

const Registration = () => {
    const GoToGoogle = () => {
        window.location.href = "https://account.envato.com/google/authenticate?to=themeforest&_ga=2.239600261.726031970.1719843294-1505691361.1715251573";
    };

    const GoToApple = () => {
        window.location.href = "https://account.envato.com/apple/authenticate?to=themeforest&_ga=2.180406561.726031970.1719843294-1505691361.1715251573";
    };

    const GoToFacebook = () => {
        window.location.href = "https://www.facebook.com/login/";
    };

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();

    const register = (event) => {
        event.preventDefault();

        if (password.length < 4) {
            alert("Password must be at least 4 characters long");
            return;
        }

        const name = firstname + " " + lastname

        axios.post("https://apitest.reachstar.io/signup", {
            name : name,
            email : email,
            password : password
        }).then(function(response) {
            navigate("/");
            console.log(response.data)
            console.log(name + " " + email + " " + password);
        }).catch(function(error) {
            console.log(error);
        });
    }

    return (
        <Fragment>
            <div className="container-fluid topBar pt-3">
                <div className="row">
                    <div className="col-md-6">
                        <Link to={ "/" }>
                            <svg className="logo_svg" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 36"><path fill="#81B441" d="M22.038 6.715c-.865-.48-3.344-.183-6.322.738-5.212 3.562-9.61 8.811-9.917 17.238-.056.202-.57-.027-.672-.09-1.407-2.697-1.965-5.538-.79-9.635.219-.365-.497-.814-.626-.685-.258.258-1.333 1.404-2.047 2.642-3.54 6.141-1.225 14.009 4.968 17.453 6.192 3.449 14.011 1.224 17.459-4.97 3.989-7.148.285-21.385-2.053-22.691z"/><g fill="#fff"><path d="M44.202 10.145c-7.342 0-12.671 5.458-12.671 12.978 0 7.582 5.315 12.877 12.927 12.877 3.845 0 6.888-1.202 9.309-3.677.723-.781.801-1.533.801-1.821 0-1.226-.912-2.117-2.168-2.117-.633 0-1.163.239-1.77.801-1.371 1.277-3.176 2.582-6.172 2.582-4.166 0-7.554-3.128-7.768-7.145h16.581c1.803 0 2.679-.843 2.679-2.576 0-.51 0-.879-.103-1.605-.893-6.447-5.246-10.297-11.645-10.297zm0 4.026c3.981 0 6.536 2.537 6.693 6.632h-14.2c.373-3.789 3.577-6.632 7.507-6.632zM71.785 10.145c-3.335 0-6.637 1.918-7.927 4.581v-1.646c0-2.55-1.976-2.679-2.372-2.679-1.171 0-2.423.704-2.423 2.679v19.881c0 2.648 2.104 2.782 2.525 2.782.421 0 2.526-.134 2.526-2.782v-10.657c0-4.637 2.628-7.876 6.39-7.876 3.644 0 5.416 2.391 5.416 7.312v11.222c0 2.648 2.105 2.782 2.526 2.782.421 0 2.525-.134 2.525-2.782v-12.81c0-4.838-2.414-10.007-9.186-10.007zM103.825 10.402c-1.167 0-2.014.681-2.518 2.02l-6.911 17.378-6.858-17.378c-.537-1.36-1.377-2.02-2.569-2.02-1.393 0-2.526 1.087-2.526 2.423 0 .331.038.759.317 1.429l7.942 18.753c.946 2.262 2.503 2.737 3.643 2.737 1.139 0 2.696-.475 3.645-2.736l7.994-18.857c.273-.662.315-1.147.315-1.377 0-1.352-1.065-2.372-2.474-2.372zM118.513 10.145c-3.231 0-6.24.9-8.472 2.532-.757.522-1.125 1.174-1.125 1.993 0 1.128.861 2.012 1.963 2.012.476 0 1.01-.19 1.499-.532 1.919-1.279 3.722-1.876 5.673-1.876 3.735 0 5.879 1.899 5.879 5.212v.549c-8.384.009-16.91 1.022-16.91 8.315 0 5.249 4.486 7.599 8.932 7.599 3.54 0 6.368-1.403 8.182-4.059v1.277c0 1.902 1.277 2.576 2.373 2.576.231 0 2.269-.072 2.269-2.576v-13.373c-.002-6.042-3.839-9.649-10.263-9.649zm4.354 13.609h1.063v1.164c0 4.256-2.71 7.006-6.903 7.006-1.138 0-4.852-.265-4.852-3.676-.001-4.029 6.101-4.494 10.692-4.494zM141.928 14.991c2.21 0 2.322-1.72 2.322-2.064 0-1.023-.61-2.116-2.322-2.116h-4.545v-4.596c0-2.053-1.332-2.782-2.474-2.782-.421 0-2.525.134-2.525 2.782v21.829c0 5.037 2.485 7.7 7.187 7.7 1.217 0 2.402-.215 3.178-.576.889-.444 1.398-1.173 1.398-2 0-1.167-.847-2.014-2.014-2.014-.225 0-.546.056-.9.158-.433.108-.726.15-1.046.15-1.913 0-2.804-1.249-2.804-3.931v-12.54h4.545zM158.631 10.145c-7.64 0-13.183 5.415-13.183 12.875 0 3.632 1.343 6.942 3.78 9.321 2.419 2.359 5.758 3.659 9.402 3.659 7.544 0 13.234-5.58 13.234-12.979.001-7.461-5.566-12.876-13.233-12.876zm0 21.573c-5.239 0-7.979-4.375-7.979-8.697 0-5.939 4.136-8.644 7.979-8.644s7.979 2.705 7.979 8.644c0 5.975-4.136 8.697-7.979 8.697z"/></g><g fill="#81B441"><path d="M211.554 11.937c-.739-.805-1.655-1.403-2.725-1.777-1.951-.68-4.619-.735-6.739-.061-.994.316-1.909.754-2.722 1.302-.815.552-1.53 1.207-2.126 1.947-.187.231-.363.47-.527.715-.52-1.284-1.285-2.283-2.288-2.978-1.401-.972-3.205-1.465-5.363-1.465-1.102 0-2.146.176-3.105.522-.947.342-1.823.815-2.604 1.404-.767.579-1.448 1.273-2.023 2.061v-2.787c0-.418-.339-.757-.757-.757h-1.219c-.418 0-.757.339-.757.757v23.98c0 .418.339.757.757.757h1.219c.418 0 .757-.339.757-.757v-15.087c.14-.709.395-1.502.759-2.359.368-.865.874-1.691 1.504-2.451.617-.744 1.387-1.373 2.288-1.871.872-.481 1.92-.725 3.114-.725.873 0 1.69.102 2.426.305.689.19 1.266.511 1.763.982.493.469.886 1.122 1.169 1.94.296.854.446 1.967.446 3.309v15.957c0 .418.339.757.757.757h1.197c.418 0 .757-.339.757-.757l-.002-15.906c.025-.361.117-.778.272-1.238.16-.473.387-.957.675-1.44.292-.49.654-.975 1.077-1.445.41-.457.902-.872 1.464-1.233.559-.36 1.203-.655 1.911-.879.705-.221 1.502-.339 2.368-.353l.155-.001c.806 0 1.562.101 2.247.303.688.202 1.264.541 1.761 1.04.496.495.892 1.196 1.178 2.08.299.925.451 2.121.451 3.557v15.515c0 .418.339.757.757.757h1.197c.418 0 .757-.339.757-.757v-15.515c0-1.664-.187-3.111-.555-4.302-.377-1.224-.94-2.249-1.671-3.046zM235.82 33.56c-.07-.337-.129-.697-.178-1.083-.05-.392-.089-.804-.117-1.239-.029-.434-.043-.857-.043-1.27v-12.012c0-1.355-.234-2.573-.697-3.62-.467-1.055-1.129-1.945-1.969-2.646-.828-.689-1.823-1.215-2.957-1.561-2.266-.689-5.181-.69-7.45.098-1.161.401-2.186.958-3.045 1.656-.869.708-1.554 1.542-2.035 2.481-.489.953-.737 1.968-.737 3.015 0 .407.322.741.729.756l1.197.044c.202.016.404-.069.553-.211.148-.142.232-.339.232-.545 0-.705.161-1.344.494-1.953.339-.62.814-1.166 1.413-1.623.615-.47 1.354-.843 2.197-1.111.852-.27 1.797-.407 2.807-.407 2.149 0 3.805.496 4.92 1.474 1.101.967 1.637 2.31 1.637 4.108v2.745h-4.984c-1.783 0-3.413.191-4.847.568-1.45.383-2.701.925-3.721 1.612-1.049.708-1.863 1.575-2.421 2.575-.564 1.011-.85 2.127-.85 3.316 0 1.061.197 2.05.584 2.939.389.895.953 1.676 1.674 2.323.716.642 1.585 1.143 2.583 1.491.986.344 2.095.519 3.297.519 1.255 0 2.417-.139 3.451-.414 1.031-.272 1.979-.651 2.817-1.125.839-.475 1.585-1.033 2.22-1.66l.275-.281.024.315c.071.837.195 1.568.371 2.175.093.324.39.547.727.547h1.374c.418 0 .757-.339.757-.757v-.199c0-.104-.022-.208-.064-.303-.081-.187-.155-.435-.218-.737zm-11.734-.248c-.825 0-1.58-.122-2.247-.365-.66-.239-1.235-.571-1.708-.987-.466-.409-.833-.891-1.091-1.43-.253-.531-.38-1.107-.38-1.714 0-.768.189-1.455.578-2.102.396-.658.978-1.234 1.731-1.715.783-.499 1.758-.895 2.9-1.177 1.163-.287 2.503-.433 3.985-.433h4.917v4.774c-.357.761-.799 1.452-1.315 2.058-.546.641-1.189 1.198-1.913 1.658-.722.459-1.547.816-2.452 1.061-.913.246-1.924.372-3.005.372zM250.599 9.913c-.244-.094-.527-.166-.863-.218-.319-.051-.687-.076-1.093-.076-2.123 0-3.924.544-5.352 1.615-.644.482-1.216 1.046-1.715 1.688v-2.102c0-.418-.339-.757-.757-.757h-1.197c-.418 0-.757.339-.757.757v23.98c0 .418.339.757.757.757h1.197c.418 0 .757-.339.757-.757v-15.646c.18-.986.466-1.908.851-2.744.383-.833.875-1.564 1.463-2.172.579-.598 1.273-1.074 2.062-1.416.787-.341 1.692-.514 2.691-.514.251 0 .492.013.723.039l.735.088c.198.024.4-.031.558-.153.158-.123.261-.304.287-.503l.133-1.064c.042-.347-.155-.677-.48-.802zM260.642 21.099l10.484-9.725c.228-.212.303-.541.19-.832-.114-.289-.393-.48-.704-.48h-1.707c-.19 0-.374.072-.513.202l-10.911 10.09-1.538 1.454v-21.051c0-.418-.339-.757-.757-.757h-1.197c-.418 0-.757.339-.757.757v34.043c0 .418.339.757.757.757h1.197c.418 0 .757-.339.757-.757v-9.582l2.687-2.31 10.541 12.383c.144.169.355.266.576.266h1.573c.418 0 .757-.339.757-.757 0-.244-.116-.461-.295-.599l-11.14-13.102zM288.498 12.708c-.873-.976-1.929-1.745-3.139-2.281-2.474-1.098-5.643-1.093-8.216.154-1.307.633-2.462 1.528-3.435 2.66-.964 1.121-1.738 2.475-2.299 4.024-.559 1.547-.843 3.256-.843 5.079v.975c0 1.827.292 3.531.869 5.064.577 1.539 1.384 2.888 2.396 4.008 1.016 1.127 2.22 2.019 3.578 2.651 1.366.635 2.853.957 4.42.957 1.015 0 1.963-.104 2.815-.309.853-.206 1.645-.495 2.353-.861.713-.369 1.361-.818 1.925-1.333.557-.509 1.056-1.081 1.486-1.701.235-.341.154-.807-.184-1.047l-.842-.598c-.33-.236-.788-.169-1.036.154-.462.597-.945 1.091-1.437 1.47-.491.379-1.009.686-1.54.911-.532.227-1.096.388-1.675.481-1.725.278-3.632.16-5.208-.618-1.041-.514-1.957-1.223-2.72-2.109-.77-.893-1.384-1.961-1.823-3.177-.441-1.219-.664-2.547-.664-3.943v-.551h17.218c.418 0 .757-.339.757-.757v-1.396c0-1.602-.243-3.09-.721-4.422-.485-1.342-1.169-2.514-2.035-3.485zm-4.19.263c.876.432 1.632 1.024 2.248 1.757.625.747 1.117 1.63 1.461 2.623.298.858.47 1.767.512 2.707h-15.079c.155-.911.406-1.775.75-2.58.444-1.037 1.027-1.954 1.734-2.722.699-.759 1.518-1.36 2.435-1.789 1.795-.838 4.188-.855 5.939.004zM303.675 33.715c-.071-.401-.446-.661-.852-.617-.403.058-.778.106-1.124.141-.654.069-1.575.107-2.316-.108-.303-.087-.566-.255-.806-.518-.251-.272-.459-.683-.617-1.219-.17-.577-.257-1.363-.257-2.335v-16.264h4.696c.418 0 .757-.339.757-.757v-1.219c0-.418-.339-.757-.757-.757h-4.696v-5.715c0-.418-.339-.757-.757-.757h-1.219c-.418 0-.757.339-.757.757v5.715h-3.676c-.418 0-.757.339-.757.757v1.219c0 .418.339.757.757.757h3.676v16.265c0 1.26.121 2.335.36 3.195.252.907.631 1.649 1.128 2.207.511.573 1.142.983 1.877 1.215.677.215 1.448.324 2.29.324l.583-.012c.234-.008.475-.024.732-.047l.713-.08c.275-.037.522-.095.735-.172.345-.126.55-.481.487-.843l-.2-1.132z"/></g></svg>                                    
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="regButtons d-flex justify-content-end align-items-center">
                            <button className="envato_account_button" type="button">
                                Create an Envato Account
                            </button>
                            <button className="cart_button d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                            <button className="top_sign_in_btn">
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container_custom pt-3">
                <div className="row justify-content-center">
                    <div className="col-md-9 col-9-custom p-0">
                        <div className="registration_box">
                            <div className="w-100 pt-3 px-3">
                                <div className="reg_header d-flex justify-content-between pb-2">
                                    <h1 className="h1_createAcc">Create Account</h1>

                                    <div className="d-flex align-items-center justify-content-end">
                                        <span className="span_gray_account">Already have an account? </span>

                                        <Link to={ "/log-in" } className="SignIn_gray text-decoration-none d-flex justify-content-center align-items-center">Sign In</Link>
                                    </div>
                                </div> 
                                <div className="w-100 pt-4">
                                    <button onClick={GoToGoogle} className="continiue_with_button w-100 d-flex justify-content-center align-items-center" type="button">
                                        <svg className="google_icon me-2"></svg>

                                        Continue with Google
                                    </button>
                                </div>
                                <div className="w-100 pt-3">
                                    <button onClick={GoToApple} className="continiue_with_button w-100 d-flex justify-content-center align-items-center" type="button">
                                        <svg className="apple_icon me-2"></svg>

                                        Continue with Apple
                                    </button>
                                </div>
                                <div className="w-100 pt-3">
                                    <button onClick={GoToFacebook} className="continiue_with_button w-100 d-flex justify-content-center align-items-center" type="button">
                                        <svg className="facebook_icon me-2"></svg>

                                        Continue with Facebook
                                    </button>
                                </div>
                                <div className="w-100 pt-4 d-flex align-items-center">
                                    <hr className="long_line w-100"/>
                                    <span className="or_text ms-2 me-2">or</span>
                                    <hr className="long_line w-100"/>
                                </div>
                                <form id="myForm" action="submit_form.php" method="POST" onSubmit={(event) => register(event)}> {/* FORM */}
                                    <div className="w-100 d-flex justify-content-between pt-3">
                                        <div className="input_div">
                                            <label className="form_label pb-1">First Name</label><br/>
                                            <input type="text" className="form_input" onChange={(event) => setFirstname(event.target.value)} />
                                            <div className="div_b24">

                                            </div>
                                        </div>

                                        <div className="input_div">
                                            <label className="form_label pb-1">Last Name</label><br/>
                                            <input type="text" className="form_input" onChange={(event) => setLastname(event.target.value)} />
                                            <div className="div_b24">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <label className="form_label pb-1">Email</label><br/>
                                        <input type="email" className="form_input w-100" onChange={(event) => setEmail(event.target.value)} />
                                        <div className="div_b24">

                                        </div>
                                    </div>
                                    <div className="w-100">
                                        <label className="form_label pb-1">Password</label><br/>
                                        <input type="password" className="form_input w-100 mb-1" onChange={(event) => setPassword(event.target.value)} minLength={4}/>
                                        <div className="w-100">
                                            <p className="gray_under_text">
                                                Use 4 or more characters with a mix of letters, numbers and symbols. Must not contain your name or<br/> 
                                                username.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-100 pt-4">
                                        <div className="captcha_box d-flex justify-content-between ps-3 pe-3">
                                            <div className="d-flex align-items-center">
                                                <input type="checkbox" className="captcha_checkbox me-3"/>

                                                <p className="captcha_text">I'm not a robot</p>
                                            </div>
                                            <div className="h-100 pt-2">
                                                <div className="d-flex justify-content-end pe-2 mt-1">
                                                    <svg className="captcha_icon"></svg>
                                                </div>
                                                <div className="pt-1">
                                                    <p className="recaptcha_text">reCAPTCHA</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 pt-4">
                                        <div className="d-flex">
                                            <input type="checkbox" className="tips_checkbox me-3"/>

                                            <div> 
                                                <p className="tips_text">Send me tips, trends, freebies, updates & offers.</p>

                                                <p className="tips_gray_text">You can unsubscribe at any time.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 pt-4 mt-3">
                                        <hr className="hr_color"/>
                                    </div>
                                    <div className="w-100 pt-3">
                                        <p className="envato_data_text">
                                            Envato collects and uses personal data in accordance with our 
                                            <span className="link_underline">Privacy Policy</span>. 
                                            By creating an account, you agree to our&nbsp;
                                            <span className="link_underline">Terms &amp; Conditions</span>; 
                                            including our&nbsp;  
                                            <span className="link_underline">Fair Use Policy</span>.
                                        </p>
                                    </div>
                                </form>
                            </div>
                            <div className="w-100 mt-4 background_darker_white py-4 px-3 d-flex justify-content-end">
                                <input form="myForm" className="create_acc_button" value="Create Account & continue" type="submit" />
                            </div>
                        </div>
                        <div className="line_card w-100 ps-3 d-flex align-items-center">
                            <h3 className="line_card_text">Billing Details</h3>
                        </div>
                        <div className="line_card w-100 ps-3 d-flex align-items-center">
                            <h3 className="line_card_text">Select Payment Method</h3>
                        </div>
                        <div className="pt-3 pb-3">
                            <p className="envato_copyright">© 2024 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-3-custom p-0">
                        <div className="order_summary_box_outside position-fixed">
                            <div className="order_summary_box px-3 pt-3">
                            <div className="w-100 custom_hr_bottom">
                                <h3 className="order_summary_h3 mb-2">Order Summary</h3>
                            </div>
                            <div className="w-100 custom_hr_bottom pt-3 d-flex justify-content-between pb-3">
                                <p className="order_text">Typology - Minimalist Blog & Text Based Theme for WordPress</p>
                            
                                <p className="price_mini">$59.00</p>
                            </div>
                            <div className="w-100 custom_hr_bottom pt-2 pb-3 d-flex justify-content-between">
                                <p className="order_text mt_2">
                                    Handling Fee: 
                                    <svg className="info_icon ms-1 mb-1"></svg>
                                </p>
                            
                                <p className="price_mini mt_2">$0.00</p>
                            </div>
                            <div className="w-100 pt-2 pb-1 d-flex justify-content-between">
                                <p className="order_summary_h3">Total:</p>
                            
                                <p className="order_summary_h3">US$ 59.00</p>
                            </div>
                            </div>
                            <div className="pt-3 mt-1 d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-lock me-2"></i>

                                <p className="secure_checkout_text">Secure checkout</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </Fragment>
    );
};

export default Registration;