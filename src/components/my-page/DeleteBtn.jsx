import classes from './DeleteBtn.module.css';
import ICON_DELETE from '../../assets/icon_delete.svg';

const DeleteBtn = ({ onClick }) => {
  return (
    <button className={classes.DeleteBtn} onClick={onClick}>
      <img
        className={classes.deleteBtnImg}
        src={ICON_DELETE}
        alt="삭제하기 버튼"
      />
    </button>
  );
};

export default DeleteBtn;
