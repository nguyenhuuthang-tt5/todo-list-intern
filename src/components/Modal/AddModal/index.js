import styles from "./AddModal.scss"
import classNames from "classnames/bind";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faCalendar, faArrowLeftLong, faPen } from "@fortawesome/free-solid-svg-icons";
//
import { changeVisibleAddModal, changeVisibleAddHastag, changeVisibleEditlHastag } from "../../../redux/visibleLayout";
import { addTodo } from "../../../redux/todoListSlice";
//
import { useDispatch } from "react-redux";
import { useState } from "react";
//
import { v4 } from "uuid";

const cx = classNames.bind(classNames)

function AddModal({ hastag, setHastag }) {
    const [content, setContent] = useState("");
    const dispatch = useDispatch()
    //
    const handleOnArrowClick = () => {
        setHastag("");
        dispatch(changeVisibleAddModal())
    }
    //
    const handleAddTagClick = () => {
        dispatch(changeVisibleAddHastag())
    }
    //
    const handleEditTagClick = () => {
        dispatch(changeVisibleEditlHastag())
    }
    //
    const handleOnSaveBtnClick = () => {
        dispatch(addTodo({
            id: v4(),
            content: content,
            hastag: hastag,
            isCompleted: false
        }))
        setHastag('');
        dispatch(changeVisibleAddModal())
    }
    return ( 
        <div className={cx("wrapper-modal")}>
            <div className={cx("arrow-turn-back")} onClick={handleOnArrowClick}>
                <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </div>
            <div className={cx("text-field")}>
                <p>To-do</p>
            </div>
            <div className={cx("content-input")}>
                <input spellCheck="false" value={content} onChange={(e) => setContent(e.target.value)}/>
            </div>
            <div className={cx("text-field")}>
                <p>Tags</p>
                <span>{ hastag ? `#${hastag}` : '' }</span>
            </div>
            {
                hastag ? 
                <div className={cx("hastag")} onClick={handleEditTagClick}>
                    <div className={cx("add-tag-wrapper")}>
                        <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                    </div>
                    <span>Edit tags</span>
                </div>
                :
                <div className={cx("hastag")} onClick={handleAddTagClick}>
                    <div className={cx("add-tag-wrapper")}>
                        <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                    </div>
                    <span>Add tags</span>
                </div>
            }
            <div className={cx("text-field")}>
                <p>Deadline</p>
            </div>
            <div className={cx("deadline")}>
                <FontAwesomeIcon icon={faCalendar} className={cx("calendar-icon")}></FontAwesomeIcon>
                <span>Today</span>
            </div>
            <div className={cx("btn-save")} onClick={handleOnSaveBtnClick}>Save</div>
        </div>
     );
}

export default AddModal;