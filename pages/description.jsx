import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Description.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Description() {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();
    useEffect(()=>{
        if(router.pathname == '/description'){
            setIsExpanded(true);
        }
    },[])
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Container className={styles.container} style={{"paddingTop":"60px"}}>
    <div className={styles.container}>
      <div className={`${styles.content} ${isExpanded ? styles.expanded : ''}`}>
        <h1 className={styles.heading}>Welcome to our website!</h1>
        <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel libero ut elit vehicula faucibus at quis mi. Vestibulum maximus, lorem vitae feugiat mollis, lorem lacus semper nisl, a sodales lacus sapien id risus.</p>
        <p className={styles.paragraph}>Nam vitae felis tellus. Fusce condimentum nibh vitae elit venenatis, at tempor arcu sagittis. Morbi molestie rutrum felis, sit amet bibendum mi pulvinar vitae. Nam sodales, augue nec viverra dictum, purus nisi posuere dolor, vel lacinia lectus nibh sed tellus.</p>
        <Row>
        <h1 className="subHeading" id="sub-heading">Our Company</h1>
        <Col md={6}>
          <img src="/img/description-img.jpg" alt="Description Image" className={styles.img} />
        </Col>
        <Col md={6}>
          <div className={styles.textR}>
            
            <p className={styles.paragraph}>We are a company that specializes in creating innovative and user-friendly websites. Our team is made up of talented designers, developers, and marketers who are passionate about helping businesses and individuals establish a strong online presence.</p>
            <p className={styles.paragraph}>We believe that a website is more than just an online presence. It is a tool that can help businesses grow and connect with their audience. That's why we work closely with our clients to create websites that are tailored to their needs and goals.</p>
            <p className={styles.paragraph}>Whether you're a small business owner or a large corporation, we can help you achieve your online goals. Contact us today to learn more about our services and how we can help you succeed online.</p>
          </div>
        </Col>
      </Row>
      <Row>
      <h1 className="subHeading" id="sub-heading">Our Company</h1>
        <Col md={6}>
          <div className={styles.textL}>
            <p className={styles.paragraph}>We are a company that specializes in creating innovative and user-friendly websites. Our team is made up of talented designers, developers, and marketers who are passionate about helping businesses and individuals establish a strong online presence.</p>
            <p className={styles.paragraph}>We believe that a website is more than just an online presence. It is a tool that can help businesses grow and connect with their audience. That's why we work closely with our clients to create websites that are tailored to their needs and goals.</p>
            <p className={styles.paragraph}>Whether you're a small business owner or a large corporation, we can help you achieve your online goals. Contact us today to learn more about our services and how we can help you succeed online.</p>
          </div>
        </Col>
        <Col md={6}>
          <img src="/img/description-img.jpg" alt="Description Image" className={styles.img} />
        </Col>
      </Row>
      <Row>
      <h1 className="subHeading" id="sub-heading">Our Company</h1>
        <Col md={6}>
          <img src="/img/description-img.jpg" alt="Description Image" className={styles.img} />
        </Col>
        <Col md={6}>
          <div className={styles.textR}>
            <p className={styles.paragraph}>We are a company that specializes in creating innovative and user-friendly websites. Our team is made up of talented designers, developers, and marketers who are passionate about helping businesses and individuals establish a strong online presence.</p>
            <p className={styles.paragraph}>We believe that a website is more than just an online presence. It is a tool that can help businesses grow and connect with their audience. That's why we work closely with our clients to create websites that are tailored to their needs and goals.</p>
            <p className={styles.paragraph}>Whether you're a small business owner or a large corporation, we can help you achieve your online goals. Contact us today to learn more about our services and how we can help you succeed online.</p>
          </div>
        </Col>
      </Row>
        
      </div>
    </div>
    {!(router.pathname=='/description') &&
        <div className={`${!isExpanded ? styles.transbg : styles.notransbg}`}>
            <button className={styles.button} onClick={toggleExpansion}><i className={isExpanded ? "bi bi-caret-up-fill" : "bi bi-caret-down-fill"}></i> {isExpanded ? 'Read Less' : 'Read More'}</button>
        </div>    
    } 
    
    </Container>

  );
}
