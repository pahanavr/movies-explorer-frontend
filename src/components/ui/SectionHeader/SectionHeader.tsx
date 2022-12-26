import styles from './SectionHeader.module.css';
import cx from 'classnames';

type Props = {
  children?: string;
  className?: string;
}

export const SectionHeader = ({
  children,
  className,
}: Props) => {
  return (
    <div className={cx(styles.sectionHeader, className)}>
      <h2 className={styles.sectionHeader__title}>
        {children}
      </h2>
    </div>
  )
}