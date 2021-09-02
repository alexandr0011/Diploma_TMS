import PropTypes from 'prop-types';
import './NewTask.scss'

export const NewTask = (props) => {
    return(
        <div className={'taskContainer'}>
            <div>
                <div>{props.title}</div>
                <div>{props.message}</div>
            </div>
            <div>
                <input type="checkbox" checked={props.status}/>
                <button>Delete</button>
            </div>
        </div>
    )
}

NewTask.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    status: PropTypes.bool
}