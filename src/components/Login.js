import React, {useState} from 'react';

const Login = ({setUser, setLogged, setCreating, users = []}) => {
	const [p_input,setPInput] = useState("");
	const [u_input,setUInput] = useState("");

	const onChange = (e) => {
		if (e.target.name === "user_input"){
			setUInput(e.target.value);
		}
		else if (e.target.name === "password_input"){
			setPInput(e.target.value);
		}
	};

	function VerifyExistence (u_input){
		for(let i = 0; i < users.length; i++){
			if(users[i].user === u_input){
				return true;
			}
		}
	}

	const Check = () => {
		if (VerifyExistence(u_input)){
			setUser(u_input);
			setLogged(true);
		}
		else{
			window.alert("Usuario Inexistente");
			setPInput("");
			setUInput("");
		}
	};

	return (
		<div className='container-fluid text-center bg-ligth'>
			<h1 className='text-danger py-4'>Login</h1>
			<div className='form-group p-2'>
				<h4>Username</h4>
				<input id = "user_input" name = "user_input" value = {u_input} onChange = {onChange} />
			</div>
			<div className='form-group p-2'>
				<h4>Password</h4>
				<input type="password" id = "password_input" name = "password_input" value = {p_input} onChange = {onChange} />
			</div>
			<p/>
			{u_input && p_input ? (
				<div className='form-group p-2'>
					<button onClick={Check} className='btn btn-danger'>Ingresar</button>
				</div>
			):(
				<></>
			)}
			<p/>
			<div className='form-group p-2'>
				<button onClick={() => {setCreating(true)}} className='btn btn-danger'>Crear Cuenta</button>
			</div>
		</div>
	);
};

export default Login;