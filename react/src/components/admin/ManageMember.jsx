import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ManageMember() {
    const members = [
        { id: 1, roleName: "Admin", accountName: "chomini", creationDate: "2024-03-01", userName: "Khanh Chi", numberPhone: "0334455667", email: "chosupermini123@gmail.com", address: "Quan 2", status: "Active" },
        { id: 2, roleName: "Member", accountName: "duumanhlam", creationDate: "2024-03-01", userName: "Manh Luu", numberPhone: "0334455667", email: "luuvippro123@gmail.com", address: "Quan 2", status: "Active" },
        { id: 3, roleName: "Member", accountName: "duongbang", creationDate: "2024-03-01", userName: "Bang", numberPhone: "0334455667", email: "duongbang194@gmail.com", address: "Quan 2", status: "Active" },
        { id: 4, roleName: "Member", accountName: "hadien", creationDate: "2024-03-01", userName: "Ha Ha", numberPhone: "0334455667", email: "hahaha111@gmail.com", address: "Quan 2555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555", status: "Active" },
        { id: 5, roleName: "Member", accountName: "ngienchuong", creationDate: "2024-03-01", userName: "Chuong", numberPhone: "0334455667", email: "chuongloz@gmail.com", address: "Quan 2", status: "Active" },
    ];
    const limitEmailLength = (email) => {
        const maxLength = 25;
        if (email.length > maxLength) {
            return email.slice(0, maxLength) + "...";
        }
        return email;
    };
    const handleDeleteMember = (id) => {
    };

    const handleEditMember = (id) => {
    };
    return (
        <div className="font-sans h-full w-full ">
            <div className="w-full">
                <div className="text-center py-4">
                    <p className="font-bold text-3xl ">Manage Member</p>
                </div>
                <div className="text-left ml-4 mt-6">
                    <Link to="/admin/addmember">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded">Tạo mới</button>
                    </Link> <br />
                    <input className="mt-2  h-8 placeholder-gray-500 " type="text" name="find" id="find" placeholder="Tìm kiếm theo tên" />
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded ml-2">Tìm kiếm</button>
                </div>
                <table className="w-full">
                    <thead className="my-4">
                        <tr>
                            <th>Role</th>
                            <th>Account Name</th>
                            <th>Create Date</th>
                            <th>User Name</th>
                            <th>Number Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {members.map(member => (
                            <tr key={member.id}>
                                <td className="border-2 w-24">{member.roleName}</td>
                                <td className="border-2 w-32">{member.accountName}</td>
                                <td className="border-2 w-28">{member.creationDate}</td>
                                <td className="border-2 w-28">{member.userName}</td>
                                <td className="border-2 w-32">{member.numberPhone}</td>
                                <td className="border-2 w-28 px-2" title={member.email}>{limitEmailLength(member.email)}</td>
                                <td className="border-2 w-40 max-w-[320px] truncate" title={member.address}>{member.address}</td>
                                <td className="border-2 w-24">{member.status}</td>
                                <td className="border-2 py-2 flex flex-col items-center ">
                                    <Link to="/admin/editmember">
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded w-14 mb-1" onClick={() => handleEditMember(member.id)}>Edit</button>
                                    </Link>
                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded w-14" onClick={() => handleDeleteMember(member.id)}>Delete</button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
