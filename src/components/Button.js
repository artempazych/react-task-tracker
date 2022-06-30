import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (
        <button onClick={onClick} className='btn' style={{ backgroundColor: color }}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color: 'steelblue',
}

Button.protoTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onclick: PropTypes.func.isRequired
}

export default Button
