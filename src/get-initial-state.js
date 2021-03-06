import db from 'localforage'

const initialState = {
  tempo: {
    temporitt: {
      navn: null,
      distanse: null,
      dato: null,
      startTid: null,
      deltagere: [],
      sluttTider: []
    },
    deltagere: {}
  }
}

const init = () => {
  db.config({
    name: 'Tempo'
  })
  db.setItem('data', initialState)
}

export default function (done) {
  db.getItem('data', (err, data) => {
    if (err) window.alert(`Fikk ikke lest data fra lokal database! Feilmelding: ${err}`)
    else if (!data) {
      init()
      done(initialState)
    } else {
      done(data)
    }
  })
}
