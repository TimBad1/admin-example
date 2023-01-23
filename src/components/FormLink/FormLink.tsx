import style from './formlink.module.scss';

interface IFormLink {
  value: string
}

export function FormLink({value}: IFormLink) {
  return (
    <a className={style.link} href="/">{value}</a>
  );
}
