import React, {useEffect, useState} from 'react';
import {User} from "../../redux/actions";
import {StoreState} from "../../redux/reducers";
import {connect, useSelector} from "react-redux";
import './Profile.Module.css';
import {Button} from "reactstrap";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {useNavigate} from "react-router-dom";


interface ProfileProps {
    userLogin: User;
}


const _Profile: React.FC<ProfileProps> = (props) => {
    const navigate = useNavigate();

    const appState = useSelector<any, any>((state) => state);


    const [editMode, setEditMode] = useState(false)
    const [username, setUserName] = useState(appState.userLogin.username)
    const [password, setPassword] = useState(appState.userLogin.password)
    const [firstName, setFirstName] = useState(appState.userLogin.firstName)
    const [lastName, setLastName] = useState(appState.userLogin.lastName)
    // @ts-ignore
    const [dob, setDob] = useState(Date.parse(appState.userLogin.dob))
    const [gender, setGender] = useState(appState.userLogin.gender)
    const [email, setEmail] = useState(appState.userLogin.email)
    const [phoneNo, setPhoneNo] = useState(appState.userLogin.phoneNo)
    const [addressLineOne, setAddressLineOne] = useState(appState.userLogin.addressLineOne)
    const [addressLineTwo, setAddressLineTwo] = useState(appState.userLogin.addressLineTwo)
    const [city, setCity] = useState(appState.userLogin.city)
    const [zipcode, setZipCode] = useState(appState.userLogin.zipcode)
    const [relationshipStatus, setRelationshipStatus] = useState(appState.userLogin.relationshipStatus)




    useEffect(() => {
        console.log(appState)
        if (appState.userLogin.user_id === 0){
            // @ts-ignore
            navigate("/login");
        }
        console.log(appState.userLogin)
    }, [editMode]);


    return (
        <section>
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img
                            className="rounded-circle mt-5" width="150px"
                            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span
                            className="font-weight-bold">{firstName}</span><span
                            className="text-black-50">{email}</span><span> </span></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile Settings</h4>
                                <Button className={"center"} onClick={()=> setEditMode(!editMode)}>Update Profile Info</Button>

                            </div>
                            {editMode ? <section>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">First Name</label><input type="text"
                                                                                                                 className="form-control"
                                                                                                                 placeholder="first name"
                                                                                                                 value={firstName}
                                                                                                                 onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    </div>
                                    <div className="col-md-6"><label className="labels">Last Name</label><input type="text"
                                                                                                                className="form-control"
                                                                                                                value={lastName}
                                                                                                                placeholder="Last Name"
                                                                                                                onChange={(e) => setLastName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels">Username</label><input
                                        type="text" className="form-control" placeholder="enter Username"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Password</label><input
                                        type="password" className="form-control" placeholder="enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Date Of Birth</label>
                                        <br/>
                                        <DatePicker className={"form-control"}
                                                    closeOnScroll={true}
                                                    // @ts-ignore
                                                    selected={dob}
                                                    // @ts-ignore
                                                    onChange={(date:Date) => setDob(date)}
                                        />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Gender</label><input
                                        type="text" className="form-control" placeholder="Gender"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Relationship Status</label><input
                                        type="text" className="form-control" placeholder="Relationship Status"
                                        value={relationshipStatus}
                                        onChange={(e) => setRelationshipStatus(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Mobile Number</label><input
                                        type="text" className="form-control" placeholder="enter phone number"
                                        value={phoneNo}
                                        onChange={(e) => setPhoneNo(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Address Line 1</label><input
                                        type="text" className="form-control" placeholder="enter address line 1"
                                        value={addressLineOne}
                                        onChange={(e) => setAddressLineOne(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Address Line 2</label><input
                                        type="text" className="form-control" placeholder="enter address line 2"
                                        value={addressLineTwo}
                                        onChange={(e) => setAddressLineTwo(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">City</label><input
                                        type="text" className="form-control" placeholder="enter City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">ZipCode</label><input type="text"
                                                                                                               className="form-control"
                                                                                                               placeholder="enter address line 2"
                                                                                                               value={zipcode}
                                                                                                               onChange={(e) => setZipCode(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Email</label><input type="text"
                                                                                                             className="form-control"
                                                                                                             placeholder="enter email address"
                                                                                                             value={email}
                                                                                                             onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                    <div className="mt-5 text-center">
                                        <Button className="btn btn-primary profile-button" type="button">Save Profile</Button>
                                    </div>
                            </section>:
                            <section>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">First Name</label><input disabled type="text"
                                                                                                                 className="form-control"
                                                                                                                 placeholder="first name"
                                                                                                                 value={firstName}
                                                                                                                 onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    </div>
                                    <div className="col-md-6"><label className="labels">Last Name</label><input disabled type="text"
                                                                                                                className="form-control"
                                                                                                                value={lastName}
                                                                                                                placeholder="Last Name"
                                                                                                                onChange={(e) => setLastName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels">Username</label><input
                                        disabled type="text" className="form-control" placeholder="enter Username"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Password</label><input
                                        disabled type="password" className="form-control" placeholder="enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Date Of Birth</label>
                                        <br/>
                                        <DatePicker className={"form-control"}
                                                    disabled
                                                    closeOnScroll={true}
                                                    // @ts-ignore
                                                    selected={dob}
                                                    // @ts-ignore
                                                    onChange={(date:Date) => setDob(date)}
                                        />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Gender</label><input
                                        disabled type="text" className="form-control" placeholder="Gender"
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    />
                                    </div>
                                    <div className="col-md-12"><label className="labels">Relationship Status</label><input
                                        disabled type="text" className="form-control" placeholder="Relationship Status"
                                        value={relationshipStatus}
                                        onChange={(e) => setRelationshipStatus(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Mobile Number</label><input
                                        disabled type="text" className="form-control" placeholder="enter phone number"
                                        value={phoneNo}
                                        onChange={(e) => setPhoneNo(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Address Line 1</label><input
                                        disabled type="text" className="form-control" placeholder="enter address line 1"
                                        value={addressLineOne}
                                        onChange={(e) => setAddressLineOne(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Address Line 2</label><input
                                        disabled  type="text" className="form-control" placeholder="enter address line 2"
                                        value={addressLineTwo}
                                        onChange={(e) => setAddressLineTwo(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">City</label><input
                                        disabled type="text" className="form-control" placeholder="enter City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">ZipCode</label><input disabled type="text"
                                                                                                               className="form-control"
                                                                                                               placeholder="enter address line 2"
                                                                                                               value={zipcode}
                                                                                                               onChange={(e) => setZipCode(e.target.value)}/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Email</label><input disabled type="text"
                                                                                                             className="form-control"
                                                                                                             placeholder="enter email address"
                                                                                                             value={email}
                                                                                                             onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                            </section>}
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}


const mapStateToProps = ({userLogin}: StoreState): { userLogin: User } => {
    return {userLogin}
}


export const Profile = connect(
    mapStateToProps,
    {}
)(_Profile)

