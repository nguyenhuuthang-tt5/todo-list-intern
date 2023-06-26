import { useEffect, useState } from "react";
//
import styles from "./DetailModal.scss"
import classNames from "classnames/bind";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faCalendar, faXmark, faCheck, faArrowLeftLong, faPlus } from "@fortawesome/free-solid-svg-icons";
//
import { changeVisibleDetailModal, changeVisibleEditlHastag } from "../../../redux/visibleLayout";
import { updateTodo, deleteTodo } from "../../../redux/todoListSlice";
//
import { useDispatch, useSelector } from "react-redux";

const cx = classNames.bind(styles)

function DetailModal({ hastagEdit, setHastagEdit }) {
    const [ content, setContent ] = useState("");
    const dispatch = useDispatch();
    const todoDetail = useSelector(state => state.todoDetail.value)
    //
    useEffect(() => {
        setContent(todoDetail.content)
        setHastagEdit(todoDetail.hastag)
    }, [todoDetail])
    //
    const handleOnchange = (e) => {
        setContent(e.target.value)
    }
    //
    const handleTurnBackClick = () => {
        dispatch(changeVisibleDetailModal())
    }
    //
    const handleEditPopupClick = () => {
        dispatch(changeVisibleEditlHastag())
    }
    //
    const handleUpdateTodo = () => {
        dispatch(updateTodo({
            id: todoDetail.id,
            content: content,
            hastag: hastagEdit
        }))
        dispatch(changeVisibleDetailModal());
    }
    //
    const handleDeleteTodo = () => {
        dispatch(deleteTodo(todoDetail.id))
        dispatch(changeVisibleDetailModal());
    }
    return ( 
        <div className={cx("wrapper-modal")}>
            <div className={cx("arrow-turn-back")} onClick={handleTurnBackClick}>
                <FontAwesomeIcon icon={faArrowLeftLong}></FontAwesomeIcon>
            </div>
            <div className={cx("text-field")}>
                <p>To-do</p>
            </div>
            <div className={cx("content-input")}>
                <input spellCheck="false" value={content} onChange={handleOnchange}/>
            </div>
            <div className={cx("text-field")}>
                <p>Tags</p>
            </div>
            <div className={cx("hastag-detail")}>
                <div className={cx("hastag-content")}>
                    <p>{ hastagEdit ? `#${hastagEdit}` : '' }</p>
                </div>
                {
                    hastagEdit ?
                    <div className={cx("add-tag-wrapper-detail")} onClick={handleEditPopupClick}>
                        <div className={"icon-wrapper"}>
                            <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>     
                        </div>
                        <div>
                            <p>Edit tags</p>
                        </div>
                    </div>
                    :
                    <div className={cx("add-tag-wrapper-detail")} onClick={handleEditPopupClick}>
                        <div className={"icon-wrapper"}>
                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>    
                        </div>
                        <div>
                            <p>Add tag</p>
                        </div>
                    </div>
                }
            </div>
            <div className={cx("text-field")}>
                <p>Deadline</p>
            </div>
            <div className={cx("deadline")}>
                <FontAwesomeIcon icon={faCalendar} className={cx("calendar-icon")}></FontAwesomeIcon>
                <span>Today</span>
            </div>
            <div className={cx("btn-wrapper")}>
                <div className={cx("delete-btn")} onClick={handleDeleteTodo}>
                    <FontAwesomeIcon icon={faXmark} className={cx("calendar-icon")}></FontAwesomeIcon>
                </div>
                <div className={cx("done-btn")} onClick={handleUpdateTodo}>
                    <FontAwesomeIcon icon={faCheck} className={cx("calendar-icon")}></FontAwesomeIcon>
                </div>
            </div>
        </div>
     );
}

export default DetailModal;