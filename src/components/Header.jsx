import PropTypes from "prop-types"
function Header(props) {
    return (
        <header >
            <h2>{props.text}</h2>
        </header>
    )
}

Header.defaultProps = {
    text: 'default props.text if none is provided',
    anotherUselessProp: 'I wont be used',
    fakeNumberProp: 23,
    fakeBooleanProp: false
}
Header.propTypes = {
    text: PropTypes.string,
    anotherUselessProp:  PropTypes.string,
    fakeNumberProp: PropTypes.number,
    fakeBooleanProp:  PropTypes.bool


}

export default Header
