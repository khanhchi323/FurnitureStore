import React from "react";
export default function ManageUser() {
    // const [searchTerm, setSearchTerm] = useState(""); // State để lưu giá trị từ khóa tìm kiếm
    // const [filteredUsers, setFilteredUsers] = useState([]); // State để lưu trữ danh sách người dùng được lọc
    // const [users, setUsers] = useState([ thay thế hàng dưới khi set đc useState
    const users = [
        { id: 1, username: "cunmini", creationDate: "2024-03-01", firstName: "Khanh", lastName: "Chi", phoneNumber: "0334455667", email: "chosupermini123@gmail.com", address: "Quan 2", status: "Active" },
        { id: 2, username: "duumanhlam", creationDate: "2024-03-01", firstName: "Manh", lastName: "Luu", phoneNumber: "0334455667", email: "luuvippro123@gmail.com", address: "Quan 2222222222 2222222 222222 222222 2222 222225 5555555555", status: "Active" },
        { id: 3, username: "duumanhlam", creationDate: "2024-03-01", firstName: "Manh", lastName: "Luu", phoneNumber: "0334455667", email: "luuvippro123@gmail.com", address: "Quan 2222222222 2222222 222222 222222 2222 222225 5555555555", status: "Active" },
        { id: 4, username: "duumanhlam", creationDate: "2024-03-01", firstName: "Manh", lastName: "Luu", phoneNumber: "0334455667", email: "luuvippro123@gmail.com", address: "Quan 2222222222 2222222 222222 222222 2222 222225 5555555555", status: "Active" },
        // Thêm thông tin người dùng khác ở đây...
    ];

    const limitEmailLength = (email) => {
        const maxLength = 20;
        if (email.length > maxLength) {
            return email.slice(0, maxLength) + "...";
        }
        return email;
    };

    const handleDeleteUser = (id) => {
        const updatedUsers = users.filter(user => user.id !== id);
        setUsers(updatedUsers);
        // Xử lý xóa người dùng ở đây
    };
    const handleSearch = (event) => {
        const searchTerm = event.target.value; // Lấy từ khóa tìm kiếm từ sự kiện onChange
        // setSearchTerm(searchTerm);
//     const filteredUsers = users.filter(user =>
//         user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredUsers(filteredUsers); // Cập nhật state với danh sách người dùng được lọc
};

    return (
        <div className="font-sans h-full w-full ">
            <div className="w-full">
                <div className="text-center py-4">
                    <p className="font-bold text-3xl ">Manage User</p>
                </div>
                <div className="text-left ml-4 mt-6">
                    <input className="mt-2  h-8 placeholder-gray-500 " type="text" name="find" id="find" placeholder="Tìm kiếm theo tên" onChange={handleSearch} />
                    <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded ml-2">Tìm kiếm</button>
                </div>
                <table className="w-full mt-3">
                    <thead className="my-4">
                        <tr>
                            <th className="w-2/12 border-2">Username</th>
                            <th className="w border-2">Create Date</th>
                            <th className="w-1/12 border-2">First Name</th>
                            <th className="w-1/12 border-2">Last Name</th>
                            <th className="w-/12 border-2">Phone Number</th>
                            <th className="border-2">Email</th>
                            <th className="w-3/12 border-2">Address</th>
                            <th className=" border-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="border-2 ">{user.username}</td>
                                <td className="border-2 ">{user.creationDate}</td>
                                <td className="border-2 ">{user.firstName}</td>
                                <td className="border-2 ">{user.lastName}</td>
                                <td className="border-2 px-1">{user.phoneNumber}</td>
                                <td className="border-2 px-1" title={user.email}>{limitEmailLength(user.email)}</td>
                                <td className="border-2 whitespace-normal break-words" title={user.address}>{user.address}</td>
                                <td className="border-2 ">{user.status}</td>
                                <td className="border-2 py-2 flex flex-col items-center ">

                                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded w-14" onClick={() => handleDeleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
