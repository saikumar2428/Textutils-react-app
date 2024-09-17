import React from 'react'
import { Link } from 'react-router-dom'

export default function N() {

    let navBox = {
        padding: '10px',
        margin: '20px',
        textAlign: 'center'
    }

  return (
    <div style={navBox}>
        <Link to='/'>H</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/A'>A</Link>&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  )
}
