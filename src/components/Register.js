import React, {useEffect, useState} from 'react';

const Register = ({setUser, setLogged}) => {
	const [p_input,setPInput] = useState("");
	const [u_input,setUInput] = useState("");
	const [e_input,setEInput] = useState("");

    const [minLength, setMinLength] = useState(false);
    const [hasCapital, setHasCapital] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [isEmail, setisEmail] = useState(false);
    
    const regExpMayus = /[A-Z]/;
    const regExpNum = /\d/;
    const regExpEmail = /[\w]+[@]{1}[\w]+[.]{1}[c]{1}[o]{1}[m]{1}/;

	const onChange = (e) => {
		if (e.target.name === "user_input"){
			setUInput(e.target.value);
		}
		else if (e.target.name === "password_input"){
			setPInput(e.target.value);
		}
		else if (e.target.name === "email_input"){
			setEInput(e.target.value);
		}
	};

	useEffect (() => {
        if(p_input.length > 7){
            setMinLength(true);
        }
        else{
            setMinLength(false);
        }
        if(p_input.search(regExpMayus) > -1){
            setHasCapital(true);
        }
        else{
            setHasCapital(false);
        }
        if(p_input.search(regExpNum) > -1){
            setHasNumber(true);
        }
        else{
            setHasNumber(false);
        }
        if(e_input.search(regExpEmail) > -1){
            setisEmail(true);
        }
        else{
            setisEmail(false);
        }
    }, [p_input, e_input]);

    const Send = () => {
		if (u_input){
			setUser(u_input);
		}
        setLogged(true);
	};

	return (
		<div className='container-fluid text-center bg-ligth'>
			<h1 className='text-danger py-4'>Register</h1>
			<div className='form-group p-2'>
				<h4>Username</h4>
				<input id = "user_input" name = "user_input" value = {u_input} onChange = {onChange} />
			</div>
			<div className='form-group p-2'>
				<h4>Password</h4>
				<input type="text" id = "password_input" name = "password_input" value = {p_input} onChange = {onChange} />
			</div>
			<div className='form-group p-2'>
				<h4>Email</h4>
				<input type="text" id = "email_input" name = "email_input" value = {e_input} onChange = {onChange} />
			</div>
			<p/>
			{u_input && minLength && hasCapital && hasNumber && isEmail ? (
				<div className='form-group p-2'>
					<button onClick={Send} className='btn btn-danger'>Crear Cuenta</button>
				</div>
			):(
				<></>
			)}
		</div>
	);
};

export default Register;