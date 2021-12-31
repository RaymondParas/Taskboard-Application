import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <h1>
            {title}
        </h1>
    )
}

Header.defaultProps = {
    title: 'Default'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header