import { useState, useEffect } from "react";
//
import styles from "./EditPopup.scss"
import classNames from "classnames/bind";
//
import { useDispatch } from "react-redux";
//
import { changeVisibleEditlHastag } from "../../../redux/visibleLayout";

const cx = classNames.bind(styles);

function EditPopup({ hastagEdit, setHastagEdit, hastag, setHastag }) {
    const [hastagEditPopup, setHastagEditPopup] = useState("");
    //
    useEffect(() => {
        if(hastag && setHastag) {
            setHastagEditPopup(hastag)
        } else {
            setHastagEditPopup(hastagEdit);
        }
    }, [hastagEdit, hastag])
    //
    const dispatch = useDispatch();
    //
    const handleRemoveClick = () => {
        hastag ? setHastag("") : setHastagEdit("");
        dispatch(changeVisibleEditlHastag())
    }
    //
    const handleSaveClick = () => {
        dispatch(changeVisibleEditlHastag())
        hastag ? setHastag(hastagEditPopup) : setHastagEdit(hastagEditPopup);
    }
    return ( 
        <div className={cx("wrapper-popup")}>
            <div className={cx("popup-field")}>
                <div className={cx("text-header")}>
                    Edit Tags
                </div>
                <div className={cx("input-tag-wrapper")}>
                    <input placeholder="" value={hastagEditPopup} onChange={(e) => setHastagEditPopup(e.target.value)}/>
                </div>
                <div className={cx("wrapper-btn-tag")}>
                    <div className={cx("remove-tag-btn")} onClick={handleRemoveClick}>
                        Remove
                    </div>
                    <div className={cx("save-tag-btn")} onClick={handleSaveClick}>
                        Save
                    </div>
                </div>
            </div>
        </div>
     );
}

export default EditPopup;