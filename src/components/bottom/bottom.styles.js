export const starFilter = (isActive) => {
  return {
    color: isActive ? 'orange' : 'grey'
  }
}

export const footerStyle = {
  position: 'fixed',
  height: '60px',
  borderTop: 'solid 1px black',
  width: '100%',
  bottom: '0',
  backgroundColor: 'white'
}

export const logoStyle = {
  float: 'left',
  height: '10px',
  marginTop: '25px',
  marginLeft: '25px',
  paddingRight: '25px',
  marginRight: '25px'
}

export const progressInfo = {
  margin: '15px',
  fontSize: '1.2em',
  lineHeight: '30px'
}

export const progressGroup = {
  float: 'left',
  display: 'inline',
  paddingLeft: '10px',
  borderLeft: '1px solid black',
  marginRight: '10px'
}

export const progressLabel = {
  fontWeight: 'bold',
  marginRight: '5px'
}

export const rightButtons = {
  marginRight: '5px'
}
