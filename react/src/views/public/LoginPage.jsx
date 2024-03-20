import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogInForm = () => {
    // const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLoginFormSubmit = async (e) => {
        e.preventDefault();
        // Gọi API hoặc xử lý xác thực ở đây
        // Ví dụ:
        // try {
        //     const response = await fetch('https://your-api-endpoint.com/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(formData),
        //     });
        //     if (response.ok) {
        //         // Xử lý đăng nhập thành công
        //         history.push("/dashboard"); // Chuyển hướng tới trang sau khi đăng nhập thành công
        //     } else {
        //         // Xử lý đăng nhập thất bại
        //         alert('Invalid credentials. Please try again.');
        //     }
        // } catch (error) {
        //     console.error('Error logging in:', error);
        //     alert('Failed to log in. Please try again later.');
        // }

        // Đoạn mã trên sẽ được thay thế bằng API thực sự và xử lý dựa trên kết quả trả về từ máy chủ
        // Bây giờ, chúng ta sẽ sử dụng mô phỏng đăng nhập giả để chuyển hướng sang trang dashboard
        history.push("/dashboard"); // Đây là chuyển hướng giả định sau khi đăng nhập thành công
    };

    return (
        <div className="font-sans m-0 p-0 flex items-center justify-center bg-white h-screen">
            <div className="w-96 p-20px rounded-lg shadow-lg shadow-neutral-950 z-10">
                <h2 className="text-2xl font-bold mb-4 text-center mt-4">
                    Log In
                </h2>
                <form onSubmit={handleLoginFormSubmit}>
                    <div className="mr-25px mb-20px rounded-sm">
                        <label
                            className="text-base ml-8 my-1.5 block"
                            htmlFor="username"
                        >
                            User name
                        </label>
                        <input
                            className="text-base w-80 pl-2 pb-0.4 ml-8 border-solid outline rounded-xl"
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mr-25px mb-20px rounded-sm">
                        <label
                            className="text-base my-1.5 ml-8 block"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="text-base w-80 pl-2 pb-0.4 ml-8 border-solid outline rounded-xl"
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            style={{ border: "solid 2px #3A6F62" }}
                            className="transition bg-green-900 text-white px-[2rem] py-1 mt-3 text-lg cursor-pointer rounded-full hover:bg-white hover:text-green-800 transition-colors duration-300 ease-in-out"
                            type="submit"
                        >
                            Log in
                        </button>
                    </div>
                    <div className="pt-3 pb-3 text-center shadow.md">
                        Don't have an account?{" "}
                        <Link to="/register" className="text-green-800">
                            Register
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LogInForm;
