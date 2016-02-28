import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Main = ({ name }) => {
  return (
    <div>Dette er Main med {name}</div>
    )
}
Main.propTypes = {
  name: PropTypes.string.isRequired
}
function mapStateToProps (state) {
  return {
    name: state.router.route.name
  }
}
export default connect(mapStateToProps, {})(Main)
