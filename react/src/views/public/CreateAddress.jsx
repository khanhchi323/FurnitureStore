import React from "react";
export default function CreateAddress() {
    // const [fullName, setFullName] = useState("");
    // const [phoneNumber, setPhoneNumber] = useState("");
    // const [email, setEmail] = useState("");
    // const [addressDetail, setAddressDetail] = useState("");

    // const handleCancel = () => {
    //     // Xử lý logic khi nhấn nút Hủy bỏ
    //     console.log("Cancel button clicked");
    // };

    // const handleUpdate = () => {
    //     // Xử lý logic khi nhấn nút Cập nhật
    //     console.log("Update button clicked");
    // };
    return (
        <div className="font-sans m-0 p-0 h-full px-8 flex items-center justify-center bg-gray-100">
            <div className="lg:w-1/2 md:w-1/2 sm:w-3/4 shadow-2xl p-4 my-2 bg-white ">
                <p className="lg:text-2xl text-center font-bold text-lg">Tạo địa chỉ mới</p>
                <div className="bg-gray-400	 w-full h-px"></div>
                <div className="flex flex-col">
                    <label className="text-base py-1.5 pt-4 font-bold lg:text-lg" for="username">
                        Họ tên đầy đủ
                    </label>
                    <input
                        className="text-base border-solid border-2 border-gray-500 p-1 "
                        type="text"
                        id="username"
                        name="username"
                        required
                        placeholder="Họ tên đầy đủ"
                    />
                </div>
                <div className="flex flex-col mt-1">
                    <label className="text-base py-1.5 font-bold lg:text-lg " for="username">
                        Điện thoại
                    </label>
                    <input
                        className="text-base border-solid border-2 border-gray-500 p-1 	 "
                        type="text"
                        id="numberphone"
                        name="numberphone"
                        required
                        placeholder="Điện thoại"
                    />
                    <p className="text-xs mt-2 text-gray-600	">CCHLB sẽ cần liên hệ theo số điện thoại này để xác nhận hoặc thông báo hẹn thời gian giao hàng / thu tiền trước</p>
                </div>
                <div className="flex flex-col mt-1">
                    <label className="text-base py-1.5 font-bold lg:text-lg" for="username">
                        Email
                    </label>
                    <input
                        className="text-base  border-solid border-2 border-gray-500 p-1 "
                        type="text"
                        id="email"
                        name="mail"
                        required
                        placeholder="Email"
                    />
                    <p className="text-xs mt-2 text-justify text-gray-600"><b className="text-gray">Dùng để tạo tài khoản và đặt hàng:</b> CCHLB sẽ tự động khởi tạo và gửi mail thông tin đăng nhập tài khoản cho Quý khách. Mọi thông tin, trạng thái của đơn hàng sẽ được thông báo, cập nhật liên tục qua email này.</p>
                </div>
                <div className="flex flex-col mt-1">
                    <label className="text-base py-1.5" for="multiline-input">
                        <p className=" lg:text-lg text-base font-bold"> Địa chỉ cụ thể</p>
                        <p className="text-xs text-gray-600">  (Nhập chi tiết và chính xác địa chỉ để đảm bảm đơn hàng được giao đúng hẹn)</p>
                    </label>
                    <textarea
                        className="text-base  border-solid border-2 border-gray-500 h-28 p-1"
                        type="text"
                        id="multiline-input"
                        name="multiline-input"
                        required
                        placeholder="Số nhà, Tên đường, Phường, Quận, Thành Phố. VD: 72 Văn Chung,P13..."
                    />
                </div>
                <div className="w-full flex px-4">
                    <button className="text-start w-full mt-4">Hủy bỏ</button>
                    {/* onClick={handleCancel} */}
                    <div className="w-full text-end">
                        <button className="bg-black text-blue-50 rounded-2xl py-1 px-4 mt-4   text-end ">Cập nhật
                            {/* onClick={handleUpdate} */}
                        </button>
                    </div>
                </div>
            </div>

        </div>

    );
}
