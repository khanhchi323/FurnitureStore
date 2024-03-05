import React, { useState, useEffect } from "react";

export default function EditMember({ member, onUpdateMember }) {
    const [editedMember, setEditedMember] = useState({ ...member });

    useEffect(() => {
        setEditedMember({ ...member });
    }, [member]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedMember((prevMember) => ({
            ...prevMember,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateMember(editedMember);
    };

    return (
        <div className="font-sans h-full w-full justify-center">
            <div>
                <div className="text-center py-4">
                    <b className="text-3xl">Edit Member</b>
                </div>
                <div className="w-full flex justify-center">
                    <div className="px-8 w-3/5 shadow pb-4">
                        <form onSubmit={handleSubmit}>
                            <div className="py-3 font-bold">
                                <label className="mr-4">Role Name </label>
                                <select
                                    className="p-1 px-3 w-28"
                                    name="roleName"
                                    value={editedMember.roleName}
                                    onChange={handleChange}
                                >
                                    <option value="Admin">Admin</option>
                                    <option value="Member">Member</option>
                                    <option value="Client">Client</option>
                                </select>
                            </div>
                            <p className="py-1 font-bold">Account Name</p>
                            <input
                                type="text"
                                name="accountName"
                                value={editedMember.accountName}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-full"
                            />
                            <p className="py-1 font-bold">Password</p>
                            <input
                                type="password"
                                name="password"
                                value={editedMember.password}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-full"
                            />
                            <p className="py-1 font-bold">Confirm Password</p>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={editedMember.confirmPassword}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-full"
                            />
                            <p className="py-1 font-bold">User Name</p>
                            <input
                                type="text"
                                name="userName"
                                value={editedMember.userName}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-full"
                            />
                            <p className="py-1 font-bold">Number Phone</p>
                            <input
                                type="text"
                                name="numberPhone"
                                value={editedMember.numberPhone}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-full"
                            />
                            <p className="py-1 font-bold">Email</p>
                            <input
                                type="email"
                                name="email"
                                value={editedMember.email}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-full"
                            />
                            <p className="py-1 font-bold">Address</p>
                            <input
                                type="text"
                                name="address"
                                value={editedMember.address}
                                onChange={handleChange}
                                className="border rounded-md px-2 py-1 mt-1 border-2 border-gray-500 w-full"
                            />
                            <div className="py-3 font-bold">
                                <label className="mr-4">Status </label>
                                <select
                                    className="p-1 px-3"
                                    name="status"
                                    value={editedMember.status}
                                    onChange={handleChange}
                                >
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                            <div className="text-sm mt-2 w-full flex ">
                                <button
                                    className="w-20 text-left text-gray-800 text-center"
                                    onClick={() => window.history.back()}
                                >
                                    Back
                                </button>
                                <div className="w-full text-right">
                                    <button
                                        className="bg-blue-400 text-white p-2 rounded"
                                        type="submit"
                                    >
                                        Add Member
                                    </button>
                                </div>
                            </div>
                        </form>                    </div>
                </div>
            </div>
        </div>
    );
}
