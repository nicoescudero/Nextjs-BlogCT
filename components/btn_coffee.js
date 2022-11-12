import style from '../styles/Post.module.css';
import Image from 'next/image';
import coffee from '../public/bmc-button.png';

export default function ButtonCoffee() {
  return (
    <div className={style.btn_coffee}>
      <a href="https://www.buymeacoffee.com/nicoDeveloper">
        <Image src={coffee} alt="buy me a coffe widget" />
      </a>
    </div>
  );
};
