import { PropsWithChildren, useState } from 'react';
import ArrowDown from 'components/ArrowDown';
import styles from './Dropdown.module.scss';

interface IDropdownItem extends PropsWithChildren {
  title: string;
  style?: React.CSSProperties;
  className?: string;
}
const defaultProps = { style: undefined, className: '' };
export default function DropdownItem({
  title,
  children,
  style,
  className,
}: IDropdownItem) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  const isChildrenTrue = !!children;
  return (
    <div style={style}>
      <button
        type="button"
        onClick={handleClick}
        className={`${styles.button} ${className}`}
      >
        <span className={styles.title}>{title}</span>
        <span
          style={
            isChildrenTrue ? { transform: `rotate(${open ? 180 : 0}deg)` } : {}
          }
          className={styles.icon}
        >
          <ArrowDown />
        </span>
      </button>
      {open && children ? (
        <ul className="dropdown__content">{children}</ul>
      ) : null}
    </div>
  );
}
DropdownItem.defaultProps = defaultProps;
