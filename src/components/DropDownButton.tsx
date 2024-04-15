import ChevronDown from '../assets/jsx/ChevronDown';
import ChevronUp from '../assets/jsx/ChevronUp';

type Props = {
  clase: string;
  titleButton: string;
  setIsShow: (arg0: boolean) => void;
  isShow: boolean;
};

export const DropDownButton = (props: Props) => {
  const { clase, titleButton, setIsShow, isShow } = props;

  return (
    <button className={clase} onClick={() => setIsShow(!isShow)}>
      <div className="flex flex-col items-center">
        <div>{titleButton}</div>
        <div>{isShow ? <ChevronUp /> : <ChevronDown />}</div>
      </div>
    </button>
  );
};
