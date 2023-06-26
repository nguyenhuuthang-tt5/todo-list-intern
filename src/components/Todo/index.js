import styles from "./Todo.scss"
import classNames from "classnames/bind";
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons";
//
import { changeVisibleDetailModal } from "../../redux/visibleLayout";
import { setTodoDetail } from "../../redux/todoDetail";
import { changeCompleteTodo } from "../../redux/todoListSlice";
//
import { useDispatch } from "react-redux";
//


const cx = classNames.bind(styles)

function Todo({ todo }) {
    const dispatch = useDispatch();
    //
    const handleOnclickTodo = () => {
        dispatch(setTodoDetail(todo))
        dispatch(changeVisibleDetailModal())
    }
    //
    const handleOnclickDone = () => {
        dispatch(changeCompleteTodo(todo.id))
    }
    return ( 
        <div className={cx("wrapper-todo")}>
            <div className={cx("status-icon", { 'active': todo.isCompleted })} onClick={handleOnclickDone}>
                <FontAwesomeIcon icon={faCheck} className={cx('check-icon')}/>
            </div>
            <div className={cx("content-wrapper")} onClick={handleOnclickTodo}>
                { todo.content }
                <div className={cx("tag")}>
                    { todo.hastag ? `#${todo.hastag}` : ''}
                </div>
            </div>
        </div>
    );
}

export default Todo;