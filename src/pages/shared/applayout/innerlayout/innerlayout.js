import React, { useContext, useState } from 'react';
import { List } from 'react-bootstrap-icons';
import Navbar from '../../../../shared/components/navbar/NavbarProfile';
import Sidebar from '../../../../shared/components/sidebar/sidebar';
import InitialContext from '../../../../shared/context/initialcontext';
// import Navbar from '../../../../shared/components/navbar/navbar';

function InnerLayout({ Component, ...props }) {
  const { mobileToggleMenu } = useContext(InitialContext);

  const defaultCols = {
    sidebarCol: 'col-2half',
    mainCol: 'col-9half',
  };
  const [cols, setCols] = useState(defaultCols);

  const moreProps = {
    defaultCols,
    setCols,
  };

  return (
    <div className=" h100 w100">
      <div className={`${cols.sidebarCol} ${mobileToggleMenu && 'toggle'}`}>
        <Sidebar {...props} {...moreProps} />
      </div>
      <div className={`${cols.mainCol} ${mobileToggleMenu ? 'toggle' : 'p-0'}`}>
        {/* <List size={22} style={{ position: 'absolute' }} /> */}
        {/* <Navbar openSidebar={null} sidebarOpen={null} /> */}
        <Component {...props} />
      </div>
    </div>
  );
}

export default InnerLayout;
