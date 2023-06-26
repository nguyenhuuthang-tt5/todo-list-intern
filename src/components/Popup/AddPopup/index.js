import { useState } from "react";
//
import styles from "./AddPopup.scss"
import classNames from "classnames/bind";
//
import { changeVisibleAddHastag } from "../../../redux/visibleLayout";
//
import { useDispatch } from "react-redux";

const cx = classNames.bind(styles);

function AddPopup({ setHastag }) {
    const [hastagPopup, setHastagPopup] = useState("");
    const dispatch = useDispatch();
    //
    const handleAddBtnClick = () => {
        dispatch(changeVisibleAddHastag())
        setHastag(hastagPopup);
    }
    return ( 
        <div className={cx("wrapper-popup")}>
            <div className={cx("popup-field")}>
                <div className={cx("text-header")}>
                    Add Tags
                </div>
                <div className={cx("input-tag-wrapper")}>
                    <input placeholder="Add tags" value={hastagPopup} onChange={(e) => setHastagPopup(e.target.value)}/>
                </div>
                <div className={cx("add-tag-btn")} onClick={handleAddBtnClick}>
                    Add
                </div>
            </div>
        </div>
     );
}

export default AddPopup;