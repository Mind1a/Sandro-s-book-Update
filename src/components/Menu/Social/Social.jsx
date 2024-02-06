import styles from "./Social.module.scss";
import { AnchorNavButton } from "../../Buttons/AnchorNavButton";

export const Social = () => {

  return (
    <div className={styles.socialContainer}>
      <AnchorNavButton
        variant={styles.socialAnchor}
        target={"_blank"}
        href={"https://www.instagram.com/sandrosbooks/"}
      >
        <img src="/assets/svgs/social-links/button_instagram.svg" alt="instagram" />
      </AnchorNavButton>
      <AnchorNavButton
        variant={styles.socialAnchor}
        target={"_blank"}
        href={"https://www.facebook.com/sandro.asatiani"}
      >
        <img src="/assets/svgs/social-links/button_facebook.svg" alt="facebook" />
      </AnchorNavButton>
      <AnchorNavButton
        variant={styles.socialAnchor}
        target={"_blank"}
        href={"https://sandroasatiani.com"}
      >
        <img src="/assets/svgs/social-links/button_web.svg" alt="web" />
      </AnchorNavButton>
    </div>
  )
}