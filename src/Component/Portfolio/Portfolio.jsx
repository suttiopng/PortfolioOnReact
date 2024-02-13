import React from 'react'
import styles from './Portfolio.module.css'
import Tilt from "react-parallax-tilt";

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}></h3>
      <div className={styles.poer_list}>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </Tilt>
          <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
          <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
            <img
              src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </Tilt>
          <p>Project Title</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio
