import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/actions';



export const Login: React.FC<any> = () => {

    const dispatch = useDispatch();
    const appState = useSelector<any, any>((state) => state);
  

    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    useEffect(() => {
        
            console.log(appState);
        
    }, [appState]);

    const handleChange = (e: any) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else {
            setPassword(e.target.value);
        }
    }

    const login = async (event: any) => {
        event.preventDefault();
        await dispatch(
            loginUser({ username, password })
        );
    }

    return (
        <div className="container pt-5">

            <div className="container bg-white shadow p-3 mb-5 bg-body rounded">

                <h1 className="fw-light">Login to your account</h1>
                <hr />
                <form>

                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" placeholder="Enter username" name="username" onChange={handleChange} id="username" />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={handleChange} id="password" />
                    </div>

                    <hr />
                    <button type="submit" className="btn btn-primary btn-block" onClick={login}>Login</button>

                </form>
            </div>
        </div>
    );

}