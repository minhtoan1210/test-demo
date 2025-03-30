import { Outlet } from "react-router-dom";
interface Props {
  children?: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div>
      {children}
      <Outlet />
    </div>
  );
}
export default MainLayout;
