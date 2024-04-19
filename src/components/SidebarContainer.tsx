import { useState } from 'react';
import { MenuFunction } from './MenuFunction';

export const SidebarContainer = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="lg:hidden block">
      <header className="z-50 flex justify-end relative ">
        <MenuFunction isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      </header>
    </div>
  );
};
