
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import MenuBar from "./components/public/MenuBar";
import HomePage from "./views/public/HomePage";
import Footer from "./components/public/footer";
import LoginPage from "./views/public/LoginPage";
import RegisterPage from "./views/public/RegisterPage";
import ProfilePage from "./views/public/ProfilePage";
import EditProfilePage from "./views/public/EditProfilePage";
import ProductPage from "./views/public/ProductPage";
import CategoryPage from "./views/public/CategoryPage";
import ProductDetailPage from "./views/public/ProductDetailPage";
import AboutUsPage from "./views/public/AboutUsPage";
import CartPage from "./views/public/CartPage";
import CreateAddress from "./views/public/CreateAddress";
import ComfirmationOrder from "./views/public/ComfirmationOrder";
import PaymentMethods from "./views/public/PaymentMethods";
import ContactUs from "./views/public/ContactUs";
import OrderHistory from "./views/public/OrderHistory";
import Error404 from "./views/public/Error404";
import SideBar from "./components/admin/SideBar";
import ManageOrder from "./components/admin/ManageOrder";
import ManageProduct from "./components/admin/ManageProduct";
import CreateProduct from "./components/admin/CreateProduct";
import ManageMember from "./components/admin/ManageMember";
import AddMember from "./components/admin/AddMember";
import EditProduct from "./components/admin/EditProduct";
import EditMember from "./components/admin/EditMember";
import ManageUser from "./components/admin/ManageUser";
// import Navbar from "./components/admin/Navbar";

const User = () => {
    return (
        <div>
            <MenuBar />
            <Outlet />
            <Footer />
        </div>
    );
};

const Admin = () => {
    return (
        <div className="flex flex-col h-screen relative ">
            <div className="flex flex-grow">
                <div className="hidden md:block md:w-auto static left-0 bottom-0">
                    <SideBar />
                </div>
                <Outlet />
            </div>
        </div>
    );
};
ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            {/* ERROR 404 */}
            <Route path="*" element={<Error404 />} />

            {/* PUBLIC */}
            <Route path="/" element={<User />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/edit-profile" element={<EditProfilePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/category/:id" element={<CategoryPage />} />
                <Route path="/product-detail" element={<ProductDetailPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/cart-page" element={<CartPage />} />
                <Route path="/cre-add" element={<CreateAddress />} />
                <Route path="/payment-methods" element={<PaymentMethods />} />
                <Route path="/confirmation-order" element={<ComfirmationOrder />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/order-history" element={<OrderHistory />} />
            </Route>

            <Route path="/admin" element={<Admin />}>
                <Route index element={<div>ADMIN</div>} />
                <Route path="manageorder" element={<ManageOrder />} />
                <Route path="manageproduct" element={<ManageProduct />} />
                <Route path="createproduct" element={<CreateProduct />} />
                <Route path="managemember" element={<ManageMember />} />
                <Route path="addmember" element={<AddMember />} />
                <Route path="editproduct" element={<EditProduct />} />
                <Route path="editmember" element={<EditMember />} />
                <Route path="manageuser" element={<ManageUser />} />
                
            </Route>
        </Routes>
    </BrowserRouter>
);
