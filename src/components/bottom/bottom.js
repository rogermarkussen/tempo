import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { footerStyle, progressInfo } from './bottom.styles'

const Bottom = ({ name }) => {
  return (
    <div style={footerStyle}>
      <div style={progressInfo}>
        Dette er footeren, ikke sant {name}?
      </div>
    </div>
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
