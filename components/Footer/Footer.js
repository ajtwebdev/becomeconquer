import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Container } from "../layoutComponents";
import { FaPhone, FaRegClock } from "react-icons/fa";
import { MdLocationOn, MdOutlineEmail } from "react-icons/md";
import FormFooter from "../Forms/FormFooter";
import Map from "../map";
import InstagramFeed from "../instagramFeed";
import { ButtonInline } from "../buttons";
import styles from "./Footer.module.scss";
import { StyleRegistry } from "styled-jsx";

const IconStyle = {
  color: "var(--clr-accent)",
};

export default function Footer() {
  return (
    <footer>
      <div className={styles.footerWrapperTop}>
        <div className={styles.container}>
          <div className="container spacing">
            <center>
              <div className="spacing">
                <Image
                  width={300}
                  height={70}
                  src="/bc-logo.svg"
                  alt="edmonton mindset coach logo"
                />
              </div>
            </center>
            <hr />
            <div className={styles.flex}>
              <div className={styles.flex}>
                <div className="">
                  <div className="">
                    <h4 className="subheader">contact us</h4>
                    <ul>
                      <li>
                        <a
                          className={styles.contactLink}
                          href="tel: 403-257-4059"
                        >
                          <div>
                            <FaPhone style={IconStyle} />
                          </div>
                          403-257-4059
                        </a>
                      </li>
                      <li>
                        <a
                          className={styles.contactLink}
                          href="mailto: office@projectlandscape.ca"
                        >
                          <div>
                            <MdOutlineEmail style={IconStyle} />
                          </div>
                          office@projectlandscape.ca
                        </a>
                      </li>
                      <li>
                        <a
                          className={styles.contactLink}
                          href="https://www.google.com/search?q=project%20landscape&oq=project+landscape&aqs=chrome..69i57j69i64j69i60l3.2120j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=AJOqlzVRUU_ZaNptPsOjzHtILa57paj9uQ:1676341266052&rflfq=1&num=10&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg&ved=2ahUKEwjnu73t-ZP9AhVKGzQIHdw6BLIQvS56BAgWEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcg;mv:[[50.997355899999995,-113.98204679999999],[50.9522124,-114.01662379999999]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                          target="_blank"
                        >
                          <div>
                            <MdLocationOn style={IconStyle} />
                          </div>
                          3511 64 Ave Calgary, AB
                        </a>
                      </li>
                      <li>
                        <a className={styles.contactLink} href="#">
                          <div>
                            <FaRegClock style={IconStyle} />
                          </div>
                          9 AM - 5 PM Mon - Fri <br /> 9 AM - 3 PM Sat
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={styles.socials}>
                    <h4 className="subheader">let's connect!</h4>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.facebook.com/profile.php?id=100063556661393&ref=aymt_homepage_panel"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/socials/facebook.svg"
                          alt="calgary landscaping company facebook"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/project__landscape/?hl=en"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/socials/instagram.svg"
                          alt="calgary landscaping company instagram"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.youtube.com/@projectlandscapeltd.9811"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/socials/youtube.svg"
                          alt="calgary landscaping company youtube"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.pinterest.ca/projectland0734/"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/socials/pinterest.svg"
                          alt="calgary landscaping company pinterest"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.houzz.com/professionals/landscape-architects-and-landscape-designers/project-landscape-ltd-pfvwus-pf~816279347/__public"
                      >
                        <Image
                          width={100}
                          height={100}
                          src="/socials/houzz.svg"
                          alt="calgary landscaping company"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.google.com/search?q=project%20landscape&rlz=1C1JZAP_enCA1008CA1008&oq=project+landscape&aqs=chrome..69i57j69i59j69i64j69i65j69i60l2j69i65.4202j0j9&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:14&tbm=lcl&sxsrf=APwXEde42p-FOu2e0riecHHuoBMahO47kQ:1682655163573&rflfq=1&num=10&serdesk=1&rldimm=11747008283103314784&lqi=ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcqoBORABMh4QASIaKaI3Foxmm9yUEJWVyMjPvBmgI2VvlzimO9cyFRACIhFwcm9qZWN0IGxhbmRzY2FwZQ&ved=2ahUKEwiBlLf62sv-AhUXITQIHeg0D40QvS56BAgVEAE&sa=X&rlst=f#rlfi=hd:;si:11747008283103314784,l,ChFwcm9qZWN0IGxhbmRzY2FwZUi-z42FnKuAgAhaGxAAEAEYABgBIhFwcm9qZWN0IGxhbmRzY2FwZXoHQ2FsZ2FyeZIBEmxhbmRzY2FwZV9kZXNpZ25lcqoBORABMh4QASIaKaI3Foxmm9yUEJWVyMjPvBmgI2VvlzimO9cyFRACIhFwcm9qZWN0IGxhbmRzY2FwZQ;mv:[[51.0443109,-113.9770916],[50.992142799999996,-114.1041654]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:14"
                      >
                        <Image
                          width={100}
                          height={300}
                          src="/socials/calgary-landscaping-pros-trusted.svg"
                          alt="calgary landscaping company"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pageLinks}>
                <ul>
                  <h3 className="subheader">Quick Links</h3>
                  <li>
                    <Link className={styles.styledLink} href="/">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/">
                      about
                    </Link>
                  </li>
                  <li>
                    <Link className={styles.styledLink} href="/">
                      about
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="subheader">email us</h4>
                <FormFooter />
              </div>
            </div>
            <hr />

            <div className={styles.copyright}>
              <ul>
                <li>Copyright&#169; 2023</li>
                <li>Become Conquer</li>
                <li>All Rights Reserved</li>
                <li>
                  <Link className={styles.a} href="/terms-of-use">
                    terms of use
                  </Link>
                </li>
                <li>
                  <Link className={styles.a} href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.author}>
              <div className="container">
                <div>
                  <p>website by: </p>
                  <a target="_blank" href="https://www.aarontonner.com">
                    <Image
                      className="img"
                      src="/aaron-tonner-web-solutions-logo-white-white.svg"
                      alt="aaron tonner web solutions logo"
                      width={100}
                      height={100}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
