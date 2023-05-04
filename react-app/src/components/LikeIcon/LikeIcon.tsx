import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import styles from "./LikeIcon.module.css";

interface Props {
  ID: string;
  isLiked: boolean;
  size: number;
  onClick: (ID: string, isLiked: boolean) => void;
}

const LikeIcon = ({ ID, size, isLiked, onClick }: Props) => {
  const [iconIsLiked, setIconLiked] = useState(isLiked);
  const toggleLike = () => {
    setIconLiked(!iconIsLiked);
    onClick(ID, !iconIsLiked);
  };

  if (iconIsLiked)
    return (
      <AiFillHeart
        size={size}
        className={[styles.likeIcon, styles.likeIconLiked].join(" ")}
        onClick={toggleLike}
      />
    );
  return (
    <AiOutlineHeart
      className={styles.likeIcon}
      size={size}
      onClick={toggleLike}
    />
  );
};

export default LikeIcon;
