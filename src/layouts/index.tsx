import { Outlet } from "react-router-dom";
interface Props {
  children?: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <div>
      {/* <Header /> */}
      {children}
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
export default MainLayout;
