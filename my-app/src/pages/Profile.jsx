import React from "react";
import Navbar from "../components/Input/Navbar";
import axiosInstance from '../utils/axiosInstance';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'


const ProfilePage = (
    employeeId,
    userName,
    dateOfJoining,
    role,
    fatherName,
    motherName,
    personalNumber,
    emergencyNumber,
    aadharNumber,
    panNumber,
) => {

    const [userInfo, setUserInfo] = useState(null);

    const [openEditModal, setOpenEditModal] = useState({
        isShown: false,
        date: null,
    });

    const navigate = useNavigate();


    // const handleEdit = (profileDetails) => {
    //     setOpenEditModal({ isShown: true, data: profileDetails });
    // };

    // const closeEditModal = () => {
    //     setOpenEditModal({ isShown: false, data: null });
    // };

    // const handleSave = (updatedData) => {
    //     setUserInfo(updatedData); // Update the user info with the edited data
    //     setOpenEditModal({ isShown: false, data: null }); // Close the modal
    // };

    //Get User Info
    const getUserInfo = async () => {
        try {
            const response = await axiosInstance.get("/get-user");

            if (response.data && response.data.user) {
                setUserInfo(response.data.user);
            }

        } catch (error) {
            if (error.response.status === 401) {
                localStorage.clear();
                navigate('/login');
            }
        }
    };

    useEffect(() => {
        getUserInfo();
        return () => { };
    }, []);


    return <>

        <Navbar
            userInfo={userInfo}
        />

        <div className="flex h-screen bg-gray-50 overflow-auto">
            {/* Sidebar */}
            <div className="w-64 min-h-screen bg-blue-500 text-white flex flex-col p-4">
                <button className="w-full text-left py-2 px-4 hover:bg-blue-700 mb-2 rounded-md">Home</button>
                <button className="w-full text-left py-2 px-4 hover:bg-blue-700 mb-2 rounded-md">LeaveTracker</button>
                <button className="w-full text-left py-2 px-4 hover:bg-blue-700 rounded-md">Logout</button>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6 overflow-y-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">My Space</h2>
                    {/* <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-sm font-semibold">VK</span>
                    </div> */}
                </div>

                {/* Tabs Section */}
                <div>
                    <div className="flex space-x-4 mb-6">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded shadow-md hover:bg-blue-600">Overview</button>
                        <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded shadow-md hover:bg-gray-300">Dashboard</button>
                    </div>

                    <div>
                        {/* Welcome Section */}
                        <div
                            className="bg-cover bg-center rounded-md p-6 text-white mb-6 shadow-lg"
                            style={{ backgroundImage: "url('https://source.unsplash.com/1600x400/?space')" }}
                        >
                            <h3 className="text-2xl font-bold text-black">Welcome Back, Viany Kumar!!</h3>
                        </div>

                        {/* Profile Section */}
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Profile</h3>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded mb-4 shadow hover:bg-blue-600"
                            onClick={() => handleEdit(userInfo)}
                        >
                            Edit Profile
                        </button>

                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">

                            {/* Basic Information */}
                            <h4 className="text-lg font-bold mb-4 text-gray-700">Basic Information</h4>
                            <hr className="mb-4" />
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">Employee ID</span>
                                    <span className="mt-auto">EMP1</span>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">Name</span>
                                    <span className="mt-auto">Viany Kumar</span>
                                </div>
                            </div>


                        </div>

                        {/* Work Information */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h4 className="text-lg font-bold mb-4 text-gray-700">Work Information</h4>
                            <hr className="mb-4" />
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">Date of Joining</span>
                                    <span>DD-MM-YYYY</span>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">Role</span>
                                    <span>Employee</span>
                                </div>
                            </div>
                        </div>

                        {/* Dependent Details */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h4 className="text-lg font-bold mb-4 text-gray-700">Dependent Details</h4>
                            <hr className="mb-4" />
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">Father's Name</span>
                                    <span>Father</span>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">Mother's Name</span>
                                    <span>Mother</span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h4 className="text-lg font-bold mb-4 text-gray-700">Contact Details</h4>
                            <hr className="mb-4" />
                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="flex flex-col justify-endn">
                                    <span className="text-s text-slate-400">Personal Mobile Number</span>
                                    <span>1234567890</span>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">Emergency Contact</span>
                                    <span>12345678</span>
                                </div>
                            </div>
                        </div>

                        {/* Government ID Proofs */}
                        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h4 className="text-lg font-bold mb-4 text-gray-700">Government ID Proofs</h4>
                            <hr className="mb-4" />
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">Aadhar Number</span>
                                    <span>12345678</span>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">PAN Number</span>
                                    <span>12345678</span>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">Aadhar File</span>
                                    <span>Aadhar File</span>
                                </div>
                                <div className="flex flex-col justify-end">
                                    <span className="text-s text-slate-400">PAN File</span>
                                    <span>PAN File</span>
                                </div>
                            </div>
                        </div>

                        {/* Education Details */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="text-lg font-bold mb-4 text-gray-700">Education Details</h4>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded mb-4 shadow hover:bg-blue-600">Add Education</button>
                            <div className="border p-4 rounded-md">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div className="flex flex-col justify-end">
                                        <span className="text-s text-slate-400">Education Type</span>
                                        <span>10th Class</span>
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <span className="text-s text-slate-400">College Name</span>
                                        <span>College Name</span>
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <span className="text-s text-slate-400">College Location</span>
                                        <span>Location</span>
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <span className="text-s text-slate-400">Start Year</span>
                                        <span>DD-MM-YYYY</span>
                                    </div>
                                    <div className="flex flex-col justify-end">
                                        <span className="text-s text-slate-400">End Year</span>
                                        <span>DD-MM-YYYY</span>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">Edit</button>
                                    <button className="px-4 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </>
};
export default ProfilePage;
