import React from "react";
import { Container, Row, Col, } from "react-bootstrap";
import { BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
import Image from 'next/image'
import styles from '../footer/Page.module.css'
import Link from  "next/link"


const Footer = () => {
  return (
    <footer className={styles.bg_footer}>
        <Container className="text-white">
          <Row>
            <Col lg={3} xs={6} className="text-left py-3">
              <h5>Company</h5>
              <Link href="/" className={styles.text_a}> About Us</Link>
              <br />
              <Link className={styles.text_a}  href="/services">
                Our Services{" "}
              </Link>
              <br />
              <Link className={styles.text_a}  href="/gallery">
                Gallery{" "}
              </Link>
              <br />
            </Col>
            <Col lg={3} xs={6} className="py-3">
              <h5>Students</h5>
              <Link className={styles.text_a}  href="/about">
                Student Review{" "}
              </Link>
              <br />
              <Link className={styles.text_a}  href="/services">
                Get Started{" "}
              </Link>
              <br />
            </Col>
            <Col className="py-3 jx">
              <h5>Explore</h5>
              <Link className={styles.text_a}  href="/about">
                Tech News{" "}
              </Link>
              <br />
              <Link className={styles.text_a}  href="/services">
                Tech Careers{" "}
              </Link>
              <br />
              <Link className={styles.text_a}  href="/gallery">
                Courses{" "}
              </Link>
            </Col>
            <Col className="py-3">
              <h5>Legal & Help</h5>
              <Link className={styles.text_a}  href="/about">
                Privacy Policy{" "}
              </Link>
              <br />
              <Link className={styles.text_a}  href="/services">
                Terms & Condition{" "}
              </Link>
              <br />
              <Link className={styles.text_a}  href="/gallery">
                Contact Us{" "}
              </Link>
            </Col>
          </Row>
        </Container>
        <Container>
          <div>
            <hr className="border-white" />
          </div>
        </Container>
        <Container className="pt-4">
          <Row>
            <Col className="text-center text-white">
              <Image
                src="/assets/logo.png"
                width="100"
                height="50"
                className="d-inline-block align-top"
                alt="Code-Geeks-Logo"
              />
              <p
                style={{
                  letterSpacing: ".3em",
                  fontWeight: "bold",
                }}
              >
                CODE GEEKS 9JA
              </p>
              <p
                style={{
                  fontSize: "12px",
                  lineHeight: "1px",
                }}
              >
                Copyright © 2023, Code Geeks 9ja. - All Rights Reserved
              </p>

              <div className="container d-flex justify-content-center gap-3 text-center pb-5">
                <div className={styles.socialIcons}>
                <Link href="/">
                  <BsInstagram size={20} color="white"/>
                </Link>
                </div>
                <div className={styles.socialIcons}>
                <Link href="/">
                  <BsTwitter size={20} color="white"/>
                </Link>
                </div>
                <div className={styles.socialIcons}>
                <Link href="/">
                  <BsLinkedin size={20} color="white"/>
                </Link>
                </div>
              
                
              </div>
            </Col>
          </Row>
        </Container> 
     </footer>
  );
};

export default Footer;
