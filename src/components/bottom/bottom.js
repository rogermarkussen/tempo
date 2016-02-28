import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Bottom = ({ name }) => {
  return (
    <div>Nå er vi på {name}</div>
    )
}
Bottom.propTypes = {
  name: PropTypes.string.isRequired
}
function mapStateToProps (state) {
  return {
    name: state.router.route.name
  }
}
export default connect(mapStateToProps, {})(Bottom)
