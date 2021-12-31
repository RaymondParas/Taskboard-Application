import PropTypes from 'prop-types'

const Button = ({ className, text, onClick }) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}

Button.defaultProps = {
    className: 'btn',
    text: 'Button'
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button