import styles from "./AudioBar.module.scss";
import { NavButton } from "../Buttons/NavButton";
import { LeftArrowSVG } from "../Svgs/AudioBar/Left arrow/LeftArrowSVG";
import { RightArrowSVG } from "../Svgs/AudioBar/Right arrow/RightArrowSVG";
import { PauseSVG } from "../Svgs/AudioBar/Pause";
import { PlaySVG } from "../Svgs/AudioBar/Play/PlaySVG";

export const AudioBar = ({
  onPrevClick,
  onNextClick,
  onPlayStart,
  onPlayPause,
  preface,
  isPaused
}) => {

  return (
    <section className={styles.audioBarContainer}>
      <NavButton onClick={onPrevClick}>
        <LeftArrowSVG variant={styles.iconStyle} />
      </NavButton>
      {!preface && (
        isPaused ?
          <NavButton onClick={onPlayStart}>
            <PlaySVG variant={styles.pauseplayIcon} />
          </NavButton> :
          <NavButton onClick={onPlayPause}>
            <PauseSVG variant={styles.pauseplayIcon} />
          </NavButton>
      )}
      <NavButton onClick={onNextClick}>
        <RightArrowSVG variant={styles.iconStyle} />
      </NavButton>
    </section>
  )
}