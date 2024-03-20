import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
export default function EditProfilePage() {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        dateOfBirth: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
    
        // Kiểm tra và xác thực dữ liệu đầu vào tại đây
        if (name === 'email') {
            if (!isValidEmail(value)) {
                // Hiển thị thông báo lỗi cho người dùng
                alert('Please enter a valid email address');
                return;
            }
        }
    
        setUserData({ ...userData, [name]: value });
    };
    ;

    const handleSaveChanges = async () => {
        try {
            // Gửi dữ liệu người dùng đã thay đổi đến máy chủ
            const response = await fetch('https://your-api-endpoint.com/profile', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            if (!response.ok) {
                throw new Error('Failed to save changes');
            }
    
            // Hiển thị thông báo thành công cho người dùng
            alert('Changes saved successfully');
        } catch (error) {
            // Xử lý lỗi và hiển thị thông báo cho người dùng
            console.error('Error saving changes:', error);
            alert('Failed to save changes. Please try again later.');
        }
    };
    

    const handleCancelChanges = () => {
        // Chuyển hướng người dùng ra trang khác, ví dụ: trang danh sách hồ sơ
        history.push("/profile");
    };
    const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('avatar', file);
    
        // Gửi tệp hình ảnh lên máy chủ
        fetch('https://your-api-endpoint.com/avatar', {
            method: 'POST',
            body: formData,
        })
        .then(response => response.json())
        .then(data => {
            // Lưu đường dẫn của hình ảnh vào trạng thái hoặc cơ sở dữ liệu
            setAvatar(data.avatarUrl);
        })
        .catch(error => {
            console.error('Error uploading avatar:', error);
            alert('Failed to upload avatar. Please try again later.');
        });
    };
    

    return (
        <div className="font-sans m-0 p-0 bg-white h-screen">
            <div>
                <div className="bg-gray-300 sm:h-1/6 w-full hidden sm:block">
                    <h1 className="text-4xl">Edit Profile</h1>
                </div>
                <div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="text-center sm:w-2/5">
                            <h2 className="text-2xl m-1.5 text-slate-600">Profile</h2>
                            <div className="flex items-center justify-center">
                                <img className="lg:w-48 lg:h-48 sm:w-24 sm:h-24 rounded-full m-2.5" src={avatar} alt="#" />
                            </div>
                            <h2 className="text-2xl md:m-2.5 mt-2">Đừu Mạnh Lam</h2>
                            <h4 className="text-xl md:m-2.5 mt-2 text-slate-600">User</h4>
                            <input type="file" accept="image/*" onChange={handleAvatarChange} style={{ display: "none" }} id="avatarInput" />
                            <label htmlFor="avatarInput" className="bg-green-900 text-white px-3 py-1 text-lg cursor-pointer rounded-full hover:bg-green-700">Upload new avatar</label></div>
                        <div className="sm:w-3/5">
                            <div className="flex justify-between align-middle w-5/6 pt-2">
                                <h2 className="text-2xl text-slate-600 ml-10 hidden md:block">Basic Info</h2>
                            </div>
                            <div className="flex ml-10 mt-2">
                                <div className="sm:w-1/2">
                                    <label className="text-base my-4 block" htmlFor="firstName">FIRST NAME</label>
                                    <input className="text-base w-5/6 pl-2 pb-0.4 border-solid border-2 rounded-xl text-black" type="text" id="firstName" name="firstName" value={userData.firstName} onChange={handleInputChange} required />
                                </div>
                                <div className="sm:w-1/2">
                                    <label className="text-base my-4 block" htmlFor="lastName">LAST NAME</label>
                                    <input className="text-base w-5/6 pl-2 pb-0.4 border-solid border-2 rounded-xl text-black" type="text" id="lastName" name="lastName" value={userData.lastName} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="ml-10">
                                <label className="text-base my-4 block" htmlFor="address">ADDRESS</label>
                                <input className="text-base w-11/12 pl-2 pb-0.4 border-solid border-2 rounded-xl text-black" type="text" id="address" name="address" value={userData.address} onChange={handleInputChange} required />
                            </div>
                            <div className="ml-10">
                                <label className="text-base my-4 block" htmlFor="email">EMAIL</label>
                                <input className="text-base w-11/12 pl-2 pb-0.4 border-solid border-2 rounded-xl text-black" type="text" id="email" name="email" value={userData.email} onChange={handleInputChange} required />
                            </div>
                            <div className="ml-10 mt-6">
                                <label className="">DATE OF BIRTH:</label>
                                <input className="ml-3" type="date" id="dateOfBirth" name="dateOfBirth" value={userData.dateOfBirth} onChange={handleInputChange} />
                            </div>
                            <div className="hidden md:block text-right w-11/12">
                                <button className="bg-green-900 text-white px-4 mr-3 py-1 text-lg cursor-pointer rounded-full hover:bg-green-700" type="button" onClick={handleCancelChanges}>Cancel</button>
                                <button className="bg-green-900 text-white px-4 py-1 text-lg cursor-pointer rounded-full hover:bg-green-700" type="button" onClick={handleSaveChanges}>Save</button>
                            </div>
                            <div className="text-center md:hidden block">
                                <button className="bg-green-900 text-white mb-2 px-3 mr-3 py-0.5 text-lg cursor-pointer rounded-full hover:bg-green-700" type="button" onClick={handleCancelChanges}>Cancel</button>
                                <button className="bg-green-900 text-white px-3 py-0.5 text-lg cursor-pointer rounded-full hover:bg-green-700" type="button" onClick={handleSaveChanges}>Save</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
