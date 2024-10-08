import React from 'react';

const styles = {
  container: {
    backgroundColor: '#f0f0f0',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    color: '#00698f',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  subheading: {
    color: '#666',
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ccc',
    transition: 'background-color 0.2s ease',
  },
};

function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Inventory Management System - MERN CRUD App
      </h1>
      <h5 style={styles.subheading}>
        -By Pratham
      </h5>
      <p>
        This is a simple inventory management system built with MERN stack. It
        has CRUD operations for products.
        <br />
        <b>Features:</b>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            Insert Product
          </li>
          <li style={styles.listItem}>
            Update Product
          </li>
          <li style={styles.listItem}>
            Delete Product
          </li>
        </ul>
      </p>
    </div>
  );
}

export default About;