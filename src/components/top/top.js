import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux-router5'

const Top = ({ name, navigateTo }) => {
  return (
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='navbar-header'>
        <a className='navbar-brand' href='/oppsett'>Tempo</a>
      </div>
      <ul className='nav navbar-nav'>
        <li className={name === 'oppsett' ? 'active' : ''}><a href='/ritt'>Ritt</a></li>
      </ul>
    </nav>
    )
}
Top.propTypes = {
  name: PropTypes.string.isRequired,
  navigateTo: PropTypes.func.isRequired
}
function mapStateToProps (state) {
  return {
    name: state.router.route.name
  }
}
export default connect(mapStateToProps,
  {
    navigateTo: actions.navigateTo
  })(Top)
