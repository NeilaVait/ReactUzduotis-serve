import logo1 from '../../../assets/Сгруппировать 568.svg';
import logo2 from '../../../assets/Сгруппировать 569.svg';
import logo3 from '../../../assets/Сгруппировать 738.svg';
import logo4 from '../../../assets/Сгруппировать 739.svg';
import logo5 from '../../../assets/Сгруппировать 540.svg';
import logo6 from '../../../assets/Сгруппировать 531.svg';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

function FunctionItem() {
  return (
    <div>
      {logos.map((logo) => (
        <img src={logo} alt="" />
      ))}
    </div>
  );
}

export default FunctionItem;
