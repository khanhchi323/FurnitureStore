import React from "react";

export default function ManageOrder() {
    // Danh sách đơn hàng
    const orders = [
        {
            id: 1,
            username: "user1",
            recipientName: "Duong Bang",
            email: "duongbang@gmail.com",
            phone: "0334455667",
            address: "Van Chung st",
            creationDate: "2024-03-01",
            status: "Pending",
        },
        {
            id: 2,
            username: "user2",
            recipientName: "Manh Luu",
            email: "manhluu@gmail.com",
            phone: "0122334455",
            address: "Binh Quoi st",
            creationDate: "2024-03-02",
            status: "Delivered",
        },
        {
            id: 3,
            username: "user3",
            recipientName: "Nghien Chung",
            email: "nghienchuong@gmail.com",
            phone: "0422334455",
            address: "Le Van Sy st",
            creationDate: "2024-03-02",
            status: "Delivered",
        },
        {
            id: 4,
            username: "user4",
            recipientName: "Hai Ha",
            email: "haiha@gmail.com",
            phone: "042***4455",
            address: "No given",
            creationDate: "2024-03-02",
            status: "Cancel",
        },
        {
            id: 5,
            username: "user5",
            recipientName: "Chi",
            email: "chi@gmail.com",
            phone: "092***4455",
            address: "No given",
            creationDate: "2024-03-02",
            status: "Cancel",
        },
    ];

    // Giới hạn độ dài email
    const limitEmailLength = (email) => {
        const maxLength = 25;
        if (email.length > maxLength) {
            return email.slice(0, maxLength) + "...";
        }
        return email;
    };

    return (
        <div className="font-sans h-full w-full">
            <div className="text-center py-4">
                <b className="text-3xl">Manage Orders</b>
                <table className="w-full mt-4">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Username</th>
                            <th className="px-4 py-2">Recipient Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Phone</th>
                            <th className="px-4 py-2">Address</th>
                            <th className="px-4 py-2">Creation date</th>
                            <th className="px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td className="border px-4 py-2">
                                    {order.username}
                                </td>
                                <td className="border px-4 py-2">
                                    {order.recipientName}
                                </td>
                                <td className="border px-4 py-2">
                                    {limitEmailLength(order.email)}
                                </td>
                                <td className="border px-4 py-2">
                                    {order.phone}
                                </td>
                                <td className="border px-4 py-2 w-32">
                                    {order.address}
                                </td>
                                <td className="border px-4 py-2">
                                    {order.creationDate}
                                </td>
                                <td className="border px-4 py-2">
                                    {order.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
