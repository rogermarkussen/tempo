import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { actions } from 'redux-router5'

const Top = ({ name, navigateTo }) => {
  return (
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <a style={{ cursor: 'pointer' }} className='navbar-brand' onClick={() => navigateTo('oppsett')}>Tempo</a>
        </div>
        <ul className='nav navbar-nav'>
          <li className={name === 'oppsett' ? 'active' : ''}>
            <a style={{ cursor: 'pointer' }} onClick={() => navigateTo('oppsett')}>Oppsett</a>
          </li>
          <li className={name === 'ritt' ? 'active' : ''}>
            <a style={{ cursor: 'pointer' }} onClick={() => navigateTo('ritt')}>Ritt</a>
          </li>
          <li className={name === 'resultater' ? 'active' : ''}>
            <a style={{ cursor: 'pointer' }} onClick={() => navigateTo('resultater')}>Resultater</a>
          </li>
        </ul>
      </div>
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
