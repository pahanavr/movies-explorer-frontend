import { Clickable } from '../Clickable/Clickable'
import { links } from '../variables/variables';
import styles from './Account.module.css';
import profileIcon from '../../../images/profile_icon.svg';

export const Account = () => {
  return (
    <div className={styles.account}>
      <Clickable
        href={links.profile.link}
        className={styles.account__profileButton}
      >
        <p className={styles.account__profileTitle}>{links.profile.title}</p>
        <div className={styles.account__profileIconBox}>
          <img className={styles.account__profileIcon} src={profileIcon} alt='profileIcon' />
        </div>
      </Clickable>
    </div>
  )
}