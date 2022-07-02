import React from 'react'
import classes from './Layout.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideoCamera } from '@fortawesome/free-solid-svg-icons';

export const Layout = (props) => {
  return (
    <div className={classes.container}>
        <div className={classes.header}>
        <FontAwesomeIcon icon={faVideoCamera} style={{color: "#4b4949"}}/>
          <span style={{marginLeft: "0.5rem"}}>Movie Catalogue</span></div>
        <div style={{display: "flex"}}>{props.children}</div>
    </div>
  )
}
