import CloseMenu from '../assets/jsx/CloseMenu';
import MenuBurger from '../assets/jsx/MenuBurger';

type Props = {
  setIsShowMenu: (arg0: boolean) => void;
  isShowMenu: boolean;
};

export const MenuFunction = (props: Props) => {
  const { isShowMenu, setIsShowMenu } = props;

  return (
    <>
      {isShowMenu ? (
        <div className="absolute">
          <button
            className="absolute right-0 w-[35px] h-[35px] mr-8 mt-4"
            onClick={() => setIsShowMenu(!isShowMenu)}
          >
            <div>
              <CloseMenu />
            </div>
          </button>
          <div className="w-[300px] h-screen bg-gradient-to-r from-transparent to-gray-700 pt-5">
            <h3 className="text-2xl text-center py-5 px-3"></h3>
            <ul>
              {/* TODO: Crear un componente para el menu */}
              <a
                className="block py-5 text-center text-black text-lg transition-colors duration-500 hover:text-slate-200 hover:scale-110"
                href="#"
              >
                Home
              </a>

              <a
                className="block py-5 text-center text-black text-lg transition-colors duration-500 hover:text-slate-200 hover:scale-110"
                href="#"
              >
                Proyectos
              </a>

              <a
                className="block py-5 text-center text-black text-lg transition-colors duration-500 hover:text-slate-200 hover:scale-110"
                href="#"
              >
                About Us
              </a>
            </ul>
          </div>
        </div>
      ) : (
        <button
          className="absolute w-[35px] h-[35px] mr-8 mt-4"
          onClick={() => setIsShowMenu(!isShowMenu)}
        >
          <div>
            <MenuBurger />
          </div>
        </button>
      )}
    </>
  );
};
