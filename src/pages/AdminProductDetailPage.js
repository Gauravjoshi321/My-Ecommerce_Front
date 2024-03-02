import NavBar from "../features/navbar/NavBar";
import AdminProductDetail from "../features/admin/components/AdminProductDetails";

function AdminProductDetailPage() {
  return (
    <div>
      <NavBar>
        <AdminProductDetail></AdminProductDetail>
      </NavBar>
    </div>
  );
}

export default AdminProductDetailPage;