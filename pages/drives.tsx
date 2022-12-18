import React from 'react'
import PropTypes from 'prop-types'
import { GetStaticProps } from 'next'


export const getStaticProps : GetStaticProps = async () => {

    return {
        props: {}
    }

}

const Drives = (props : any) => {
  
  const myProps = props
  
    return (
    <div> 
        <h1>Drives</h1>
    </div>
  )
}

Drives.propTypes = {}

export default Drives
