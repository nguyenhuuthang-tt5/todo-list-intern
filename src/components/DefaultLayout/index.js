import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//
import styles from "./DefaultLayout.scss"
import classNames from "classnames/bind";
//
import Todo from "../Todo";
import AddModal from "../Modal/AddModal";
import DetailModal from "../Modal/DetailModal";
import AddPopup from "../Popup/AddPopup";
import EditPopup from "../Popup/EditPopup";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
//
import { changeVisibleAddModal } from "../../redux/visibleLayout";
const cx = classNames.bind(styles)

function DefaultLayout() {
    const [hastag, setHastag] = useState("");
    const [hastagEdit, setHastagEdit] = useState("");

    const dispatch = useDispatch();
    const visibleAddModal = useSelector(state => state.visibleLayout.visibleAddModal);
    const visibleDetailModal = useSelector(state => state.visibleLayout.visibleDetailModal);
    const visibleAddHastag = useSelector(state => state.visibleLayout.visibleAddHastag);
    const visibleEditHastag = useSelector(state => state.visibleLayout.visibleEditHastag)
    const todoList = useSelector(state => state.todoList.value);
    //
    const [dateString, setDateString] = useState("");
    const [listCount, setListCount] = useState("");
    //
    useEffect(() => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const current = new Date();
        const date = `${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`
        setDateString(date);
    }, [])
    //
    useEffect(() => {
        if(todoList.length > 0) {
            if(todoList.length === 1) {
                setListCount(`${todoList.length} Task`);
            } else {
                setListCount(`${todoList.length} Tasks`);
            }
        } else {
            setListCount("");
        }
    }, [todoList])
    //
    const handleOnclick = () => {
        dispatch(changeVisibleAddModal())
    }
    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("date")}>
                <p>{ dateString }</p>
            </div>
            <div className={cx("task-count")}>{ listCount }</div>
            <div className={cx("list-wrapper")}>
                {
                    todoList.map((todo) => {
                        return <Todo key={todo.id} todo={todo} />
                    })
                }
            </div>
            <div className="add-btn-wrapper" onClick={handleOnclick}>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </div>
            {visibleAddModal &&  <AddModal hastag={hastag} setHastag={setHastag}/>}
            {visibleDetailModal && <DetailModal hastagEdit={hastagEdit} setHastagEdit={setHastagEdit} />}
            {visibleAddHastag && <AddPopup setHastag={setHastag}/>}
            {visibleEditHastag && <EditPopup hastagEdit={hastagEdit} setHastagEdit={setHastagEdit} hastag={hastag} setHastag={setHastag} />}
        </div>
    );
}

export default DefaultLayout;