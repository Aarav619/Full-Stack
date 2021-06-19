import React from 'react';
import "./css/authlogin.css";
import Axios from "axios";

class login extends React.Component {
    state = {
        credentials: {} 
    };
    onSubmitClick = async (e) => {
        e.preventDefault();
        console.log(this.state.user);
        await Axios.post("http://localhost:8000/login", this.state.user)
            .then(({data}) => {
                console.info(data);
                localStorage.setItem("user", JSON.stringify(data));//to locally store token with user object
                this.props.setUserState(data.user);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                console.info("Login API call finished");
            })
    }
    render() {
        return (
            <form >
                <fieldset>
                    <label>
                        <label className={"headings"}>Email</label><br/><br/>
                        <input className={"bottom-border"} type={'email'} name={'email'} placeholder={"abc@xyz.com"} required
                        onChange={(e) => {
                            this.setState({
                                user: {
                                    ...this.state.credentials,
                                    email: e.target.value,
                                },
                            });
                        }}/> </label><br /><br /><br />
                        <label className={"headings"}>Password</label><br/><br/><input className={"bottom-border"} type={'password'} name={'password'} required 
                        onChange={(e) => {
                            this.setState({
                                user: {
                                    ...this.state.credentials,
                                    password: e.target.value,
                                },
                            });
                        }}/>
                        <br /><br /><br />
                    <div className={'form'}>
                        <button className={"submit"} type={"submit"} onClick={this.onSubmitClick}>Login</button><br/><br/>
                    </div>
                </fieldset>

            </form>
        )
    }
}

export default login;