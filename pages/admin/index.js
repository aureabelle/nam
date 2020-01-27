import { Fragment } from "react";

import AdminLayout from "../../components/admin/layout";

const Admin = ({ apiUrl }) => {
  return (
    <Fragment>
      <AdminLayout>
        <div className="admin-home">
          <h1>Admin Home</h1>
        </div>
      </AdminLayout>

      <style jsx global>{`
        .admin-home {
          background: #fff;
          min-height: 360px;
          padding: 24px;
        }
      `}</style>
    </Fragment>
  );
};

export default Admin;
