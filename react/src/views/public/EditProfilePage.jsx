import React from "react";
export default function EditProfilePage() {
    // const [userData, setUserData] = useState({
    //     firstName: "",
    //     lastName: "",
    //     address: "",
    //     email: "",
    //     dateOfBirth: ""
    // });

    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setUserData({ ...userData, [name]: value });
    // };

    // const handleSaveChanges = () => {
    //     // Thực hiện xử lý lưu thay đổi ở đây
    //     console.log("Saving changes:", userData);
    // };

    // const handleCancelChanges = () => {
    //     // Đặt lại các giá trị người dùng về trạng thái trước đó
    //     setUserData({
    //         firstName: "",
    //         lastName: "",
    //         address: "",
    //         email: "",
    //         dateOfBirth: ""
    //     });
    // };
    return (
        <div className="font-sans m-0 p-0  bg-white h-screen">
            <div>
                <div className="bg-gray-300 sm:h-1/6 w-full hidden sm:block">
                    <h1 className="text-4xl ">Edit Profile</h1>
                </div>
                <div>
                    <div className="flex flex-col sm:flex-row">
                        <div className="text-center sm:w-2/5">
                            <h2 className="text-2xl m-1.5 text-slate-600">Profile</h2>
                            <div className="flex items-center justify-center"> <img className=" lg:w-48 lg:h-48 sm:w-24 sm:h-24 rounded-full m-2.5 " src="src/assets/public/bg1.jpg" alt="#" /></div>
                            <h2 className="text-2xl md:m-2.5 mt-2">Đừu Mạnh Lam</h2>
                            <h4 className="text-xl md:m-2.5 mt-2  text-slate-600">User</h4>
                            <button className=" bg-green-900 text-white  px-3 py-1  text-lg cursor-pointer rounded-full hover:bg-green-700" type="submit">Upload new avatar</button>
                        </div>
                        <div className="lg:h-80 w-0.5 bg-slate-300	"></div>
                        <div className="sm:w-3/5">
                            <div className="flex justify-between align-middle w-5/6 pt-2 ">
                                <h2 className="text-2xl text-slate-600 ml-10 hidden md:block ">Basic Info</h2>

                            </div>
                            <div className="flex ml-10 mt-2">
                                <div className="sm:w-1/2 ">
                                    <label className="text-base  my-4 block" for="username">FIRST NAME</label>
                                    <input className="text-base w-5/6 pl-2 pb-0.4 border-solid border-2 rounded-xl  text-black" type="text" id="username" name="username" required />
                                </div>
                                <div className="sm:w-1/2">
                                    <label className="text-base my-4  block" for="username">LAST NAME</label>
                                    <input className="text-base w-5/6 pl-2 pb-0.4  border-solid border-2 rounded-xl  text-black" type="text" id="username" name="username" required />
                                </div>
                            </div>
                            <div className=" ml-10">
                                <label className="text-base my-4 block" for="username">ADDRESS</label>
                                <input className="text-base w-11/12 pl-2 pb-0.4 border-solid border-2 rounded-xl  text-black" type="text" id="username" name="username" required />
                            </div>
                            <div className="ml-10">
                                <label className="text-base my-4 block" for="username">EMAIL</label>
                                <input className="text-base w-11/12 pl-2 pb-0.4 border-solid border-2 rounded-xl  text-black" type="text" id="username" name="username" required />
                            </div>
                            <div className="ml-10 mt-6">
                                <label className="">DATE OF BIRTH:</label>
                                <input className="ml-3" type="date" />
                            </div>
                            <div className=" hidden md:block text-right w-11/12 ">
                                <button className="bg-green-900 text-white  px-4 mr-3 py-1 text-lg cursor-pointer rounded-full hover:bg-green-700" type="submit">Cancel</button>
                                <button className=" bg-green-900 text-white  px-4 py-1 text-lg cursor-pointer rounded-full hover:bg-green-700" type="submit">Save</button>
                            </div>
                            <div className=" text-center  md:hidden block  ">
                                <button className="bg-green-900 text-white mb-2 px-3 mr-3 py-0.5 text-lg cursor-pointer rounded-full hover:bg-green-700" type="submit">Cancel</button>
                                {/* onClick={handleCancelChanges} */}
                                <button className=" bg-green-900 text-white  px-3 py-0.5 text-lg cursor-pointer rounded-full hover:bg-green-700" type="submit">Save</button>
                                {/* onClick={handleSaveChanges} */}
                            </div>
                            <div />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}