import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
// import chevronDown from "./chevron-down.svg";
import styles from "./styles.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";

/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        {/* <img className={styles.chevron} src={""} alt=">" /> */}
        <MdKeyboardArrowDown className={styles.chevron} />
      </>
    }
    className={styles.item}
    buttonProps={{
      className: ({ isEnter }) =>
        `${styles.itemBtn} ${isEnter && styles.itemBtnExpanded}`,
    }}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
);

export default function AccordionComponent() {
  return (
    <div>
      <div className={styles.accordion}>
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={250}>
          <AccordionItem
            header={
              <p className={styles.accordianItemhead}>What is Lorem Ipsum?</p>
            }
            initialEntered
          >
            <div>
              <div className="Professional-accordionSection-content-card-div">
                <h1 className="heading-1">Innovation Hacks AI Pvt. Ltd. </h1>
                <div>
                  <div className="professional-accordion-disply-flex-row">
                    <h4 className="heading-3">
                      Product Marketing & Management
                    </h4>{" "}
                    <div>
                      <h4 className="heading-3">Feb. 2022 - Present</h4>{" "}
                    </div>
                  </div>
                  <div className="professional-accordion-disply-flex-row">
                    <h4 className="heading-3">Marketing Executive</h4>{" "}
                    <div>
                      <h4 className="heading-3">Aug. 2022 - Jan. 2022</h4>{" "}
                    </div>
                  </div>
                </div>
                <div>
                  <p className="primary-para">
                    <span className="heading-3">Overview:</span> A
                    Product/Service based Artificial intelligence startup with a
                    uniqueness of better understanding of data. Specialized in
                    data science, cloud computing, modern applications, and
                    comprehensive data services such as data warehousing.
                    Flagship Products: DataWise and MarketWatcher.
                  </p>
                </div>
                <div className="profession-section-my-role-content">
                  <div>
                    <h4 className="heading-3 professional-accordion-secton-my-role-text">
                      My Role:
                    </h4>
                  </div>
                  <div>
                    <h4 className="heading-3">
                      Product Marketing and Management | Fulltime (Feb. 2023 –
                      Present)
                    </h4>

                    <ul className="primary-para professional-accordion-secton-my-role-ul">
                      <li>
                        Develop and execute product marketing strategies to
                        drive awareness, generate leads, and increase product
                        adoption.
                      </li>
                      <li>
                        Analyze and track product performance, including key
                        metrics and market trends, to inform strategic decisions
                        and optimize marketing campaigns.
                      </li>
                      <li>
                        Conduct market research and competitor analysis to
                        identify market opportunities, understand customer
                        needs, and differentiate products.
                      </li>
                      <li>
                        Manage the product lifecycle from ideation to launch,
                        including pricing, positioning, and go-to-market
                        strategies.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>

          <AccordionItem
            header={
              <p className={styles.accordianItemhead}>What is Lorem Ipsum?</p>
            }
          >
            Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
            erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae.
          </AccordionItem>

          <AccordionItem
            header={
              <p className={styles.accordianItemhead}>What is Lorem Ipsum?</p>
            }
          >
            Suspendisse massa risus, pretium id interdum in, dictum sit amet
            ante. Fusce vulputate purus sed tempus feugiat.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
