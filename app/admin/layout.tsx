import React, { ReactNode } from "react";

interface Props {
    children: ReactNode
}
const AdminPage = ({children}: Props) => {
  return (
    <div className="flex">
        <div className="p-5 bg-slate-400">Admin Sidebar</div>
        <div className="p-5">{children}</div>
      
    </div>
  );
};

export default AdminPage;
