import React from 'react'
import "./index.css"

const Footer = () => {
  const webUrl = window.origin
  return (
    <>
      <div className='footer-desktop'>
        <div className='footer-main-container '>
          <div className='middle-width-container footer-div-container '>
            <div>
              <div>
                <img className='footer-img-logo' alt="header-logo" src="/images/header-logo.png" />
              </div>
              <p className='footer-questions-para'>Questions or Feedback? <br /> I would love to hear from you!</p>
              <div className='footer-social-media-logos'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M28.3333 10.3926H5C3.67392 10.3926 2.40215 10.9194 1.46447 11.857C0.526784 12.7947 0 14.0665 0 15.3926V32.0592C0 33.3853 0.526784 34.6571 1.46447 35.5948C2.40215 36.5325 3.67392 37.0592 5 37.0592H28.3333C29.6594 37.0592 30.9312 36.5325 31.8689 35.5948C32.8066 34.6571 33.3333 33.3853 33.3333 32.0592V15.3926C33.3333 14.0665 32.8066 12.7947 31.8689 11.857C30.9312 10.9194 29.6594 10.3926 28.3333 10.3926ZM28.3333 13.7259L17.5 21.1759C17.2466 21.3222 16.9592 21.3992 16.6667 21.3992C16.3741 21.3992 16.0867 21.3222 15.8333 21.1759L5 13.7259H28.3333Z" fill="#545454" />
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                  <g clip-path="url(#clip0_789_1618)">
                    <path d="M20.4166 22.9476H24.0624L25.5208 17.1143H20.4166V14.1976C20.4166 12.6955 20.4166 11.2809 23.3333 11.2809H25.5208V6.38092C25.0453 6.31822 23.2501 6.17676 21.3543 6.17676C17.3949 6.17676 14.5833 8.59322 14.5833 13.0309V17.1143H10.2083V22.9476H14.5833V35.3434H20.4166V22.9476Z" fill="#545454" />
                  </g>
                  <defs>
                    <clipPath id="clip0_789_1618">
                      <rect width="35" height="35" fill="white" />
                    </clipPath>
                  </defs>
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <path d="M10.9884 11.4563C10.9879 12.2962 10.6539 13.1015 10.0597 13.695C9.46559 14.2886 8.65997 14.6218 7.82011 14.6214C6.98026 14.621 6.17497 14.287 5.58141 13.6928C4.98784 13.0986 4.65461 12.293 4.65503 11.4532C4.65545 10.6133 4.98948 9.80803 5.58364 9.21446C6.17781 8.62089 6.98343 8.28767 7.82328 8.28809C8.66313 8.28851 9.46842 8.62254 10.062 9.2167C10.6556 9.81086 10.9888 10.6165 10.9884 11.4563ZM11.0834 16.9663H4.75003V36.7897H11.0834V16.9663ZM21.09 16.9663H14.7884V36.7897H21.0267V26.3872C21.0267 20.5922 28.5792 20.0538 28.5792 26.3872V36.7897H34.8334V24.2338C34.8334 14.4647 23.655 14.8288 21.0267 19.6263L21.09 16.9663Z" fill="#545454" />
                </svg><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <g clip-path="url(#clip0_789_1620)">
                    <path d="M20.6277 6.708C21.7831 6.70357 22.9385 6.71518 24.0936 6.74284L24.4008 6.75392C24.7554 6.76659 25.1054 6.78242 25.5281 6.80142C27.2128 6.88059 28.3623 7.14659 29.3709 7.53767C30.4159 7.93984 31.2962 8.4845 32.1765 9.36484C32.9814 10.1559 33.6044 11.1128 34.0021 12.1689C34.3932 13.1775 34.6592 14.3286 34.7384 16.0133C34.7574 16.4344 34.7732 16.7859 34.7859 17.1406L34.7954 17.4478C34.8235 18.6023 34.8356 19.7572 34.8318 20.9121L34.8334 22.0933V24.1674C34.8373 25.3228 34.8251 26.4783 34.7969 27.6333L34.7874 27.9405C34.7748 28.2952 34.7589 28.6451 34.7399 29.0678C34.6608 30.7525 34.3916 31.902 34.0021 32.9106C33.6057 33.9679 32.9826 34.9255 32.1765 35.7163C31.3848 36.5211 30.4274 37.144 29.3709 37.5418C28.3623 37.9329 27.2128 38.1989 25.5281 38.2781C25.1054 38.2971 24.7554 38.3129 24.4008 38.3256L24.0936 38.3351C22.9385 38.3632 21.7831 38.3754 20.6277 38.3715L19.4465 38.3731H17.3739C16.2185 38.377 15.0631 38.3649 13.908 38.3367L13.6009 38.3272C13.225 38.3135 12.8492 38.2977 12.4735 38.2797C10.7889 38.2005 9.63935 37.9313 8.62918 37.5418C7.5726 37.145 6.61556 36.5219 5.8251 35.7163C5.01926 34.925 4.39571 33.9676 3.99794 32.9106C3.60685 31.902 3.34085 30.7525 3.26168 29.0678C3.24405 28.6921 3.22822 28.3164 3.21419 27.9405L3.20627 27.6333C3.17708 26.4783 3.16388 25.3229 3.16669 24.1674V20.9121C3.16227 19.7572 3.17388 18.6023 3.20152 17.4478L3.2126 17.1406C3.22527 16.7859 3.2411 16.4344 3.2601 16.0133C3.33927 14.327 3.60527 13.1791 3.99635 12.1689C4.39436 11.1122 5.01913 10.1556 5.82669 9.36642C6.6166 8.56011 7.57304 7.93599 8.62918 7.53767C9.63935 7.14659 10.7873 6.88059 12.4735 6.80142L13.6009 6.75392L13.908 6.746C15.0626 6.71683 16.2174 6.70363 17.3724 6.70642L20.6277 6.708ZM19 14.6247C17.9511 14.6098 16.9096 14.8036 15.9362 15.1948C14.9628 15.5859 14.0769 16.1666 13.3299 16.9032C12.5828 17.6397 11.9897 18.5174 11.5848 19.4851C11.1799 20.4529 10.9714 21.4915 10.9714 22.5405C10.9714 23.5896 11.1799 24.6282 11.5848 25.596C11.9897 26.5637 12.5828 27.4414 13.3299 28.1779C14.0769 28.9144 14.9628 29.4952 15.9362 29.8863C16.9096 30.2775 17.9511 30.4713 19 30.4564C21.0996 30.4564 23.1133 29.6223 24.5979 28.1377C26.0826 26.653 26.9167 24.6394 26.9167 22.5398C26.9167 20.4401 26.0826 18.4265 24.5979 16.9418C23.1133 15.4572 21.0996 14.6247 19 14.6247ZM19 17.7913C19.631 17.7797 20.2579 17.8939 20.8443 18.1273C21.4306 18.3607 21.9646 18.7086 22.4149 19.1507C22.8653 19.5928 23.223 20.1202 23.4673 20.702C23.7116 21.2839 23.8374 21.9087 23.8375 22.5397C23.8376 23.1708 23.712 23.7956 23.4679 24.3776C23.2239 24.9595 22.8663 25.487 22.416 25.9293C21.9658 26.3715 21.432 26.7196 20.8457 26.9531C20.2595 27.1867 19.6326 27.3012 19.0016 27.2898C17.7418 27.2898 16.5336 26.7893 15.6428 25.8985C14.752 25.0077 14.2516 23.7995 14.2516 22.5398C14.2516 21.28 14.752 20.0718 15.6428 19.181C16.5336 18.2902 17.7418 17.7898 19.0016 17.7898L19 17.7913ZM27.3125 12.2497C26.8017 12.2701 26.3187 12.4874 25.9645 12.856C25.6103 13.2247 25.4125 13.716 25.4125 14.2273C25.4125 14.7385 25.6103 15.2298 25.9645 15.5985C26.3187 15.9671 26.8017 16.1844 27.3125 16.2048C27.8374 16.2048 28.3408 15.9963 28.712 15.6252C29.0832 15.254 29.2917 14.7506 29.2917 14.2257C29.2917 13.7008 29.0832 13.1974 28.712 12.8262C28.3408 12.455 27.8374 12.2465 27.3125 12.2465V12.2497Z" fill="#545454" />
                  </g>
                  <defs>
                    <clipPath id="clip0_789_1620">
                      <rect width="38" height="38" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='footer-location-logo-para'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="31" viewBox="0 0 23 31" fill="none">
                  <path d="M11.2727 14.725C10.205 14.725 9.18095 14.3167 8.42594 13.59C7.67092 12.8633 7.24676 11.8777 7.24676 10.85C7.24676 9.82229 7.67092 8.83666 8.42594 8.10996C9.18095 7.38326 10.205 6.975 11.2727 6.975C12.3405 6.975 13.3645 7.38326 14.1195 8.10996C14.8745 8.83666 15.2987 9.82229 15.2987 10.85C15.2987 11.3589 15.1946 11.8628 14.9922 12.3329C14.7899 12.803 14.4934 13.2302 14.1195 13.59C13.7457 13.9499 13.3019 14.2353 12.8134 14.43C12.325 14.6248 11.8014 14.725 11.2727 14.725ZM11.2727 0C8.28302 0 5.41575 1.14312 3.30171 3.17789C1.18766 5.21266 0 7.9724 0 10.85C0 18.9875 11.2727 31 11.2727 31C11.2727 31 22.5455 18.9875 22.5455 10.85C22.5455 7.9724 21.3578 5.21266 19.2438 3.17789C17.1297 1.14312 14.2624 0 11.2727 0Z" fill="#545454" />
                </svg>
                <p>Cranfield, Wharley End, Bedford <br /> MK43 0AL, United Kingdom</p>
              </div>
            </div>
            <div className='ul-items-div footer-box-1'>
              <b>Home</b>
              <ul>
                <li>Introduction</li>
                <li>About me</li>
                <li>Professional Experience</li>
                <li>Skills</li>
                <li>Education</li>
                <li>Certifications</li>
              </ul>
            </div>

            <div className='ul-items-div footer-box-2'>
              <b>Get in Touch</b>
              <ul>
                <li>Download resume
                </li>
                <li>Contact me
                </li>
              </ul>
            </div>
            <div className='ul-items-div'>
              <b>Resources</b>
              <ul>
                <li>Blogs
                </li>
                <li>
                  Newsletter</li>
              </ul>
            </div>
          </div>

          <div>
            <p className='footer-copy-text'>Copyright &copy; 2023 Abhijeet Patil</p></div>
        </div>

      </div>

      {/* mobile page */}

      <div className='footer-mobile'>
        <div className='footer-main-container '>
          <div className='middle-width-container '>
            <div className='footer-loho-div-class'>
              <div>
                <img className='footer-img-logo' alt="header-logo" src="/images/header-logo.png" />
              </div>
              <div>
                <p className='footer-questions-para'>Questions or Feedback? <br /> I would love to hear from you!</p>
                <div className='footer-social-media-logos'>
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 22 17" fill="none">
                    <path d="M18.0625 0H3.1875C2.34212 0 1.53137 0.335825 0.933598 0.933597C0.335825 1.53137 0 2.34212 0 3.1875V13.8125C0 14.6579 0.335825 15.4686 0.933598 16.0664C1.53137 16.6642 2.34212 17 3.1875 17H18.0625C18.9079 17 19.7186 16.6642 20.3164 16.0664C20.9142 15.4686 21.25 14.6579 21.25 13.8125V3.1875C21.25 2.34212 20.9142 1.53137 20.3164 0.933597C19.7186 0.335825 18.9079 0 18.0625 0ZM18.0625 2.125L11.1563 6.87438C10.9947 6.96763 10.8115 7.01672 10.625 7.01672C10.4385 7.01672 10.2553 6.96763 10.0938 6.87438L3.1875 2.125H18.0625Z" fill="#545454" />
                  </svg></a>
                  <a> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18" fill="none">
                    <path d="M6.3 10.35H8.55L9.45 6.75H6.3V4.95C6.3 4.023 6.3 3.15 8.1 3.15H9.45V0.126C9.1566 0.0873001 8.0487 0 6.8787 0C4.4352 0 2.7 1.4913 2.7 4.23V6.75H0V10.35H2.7V18H6.3V10.35Z" fill="#545454" />
                  </svg></a>
                  <a href='https://www.linkedin.com/in/abhijeetpatil03/' target='_blank'> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <path d="M3.77757 1.88973C3.77732 2.39067 3.57808 2.87099 3.22369 3.22502C2.8693 3.57906 2.38878 3.77782 1.88784 3.77757C1.3869 3.77732 0.906583 3.57808 0.552544 3.22369C0.198506 2.8693 -0.000250232 2.38878 2.36439e-07 1.88784C0.000250705 1.3869 0.199487 0.906583 0.55388 0.552544C0.908273 0.198506 1.38879 -0.000250232 1.88973 2.36439e-07C2.39067 0.000250705 2.87099 0.199487 3.22502 0.55388C3.57906 0.908273 3.77782 1.38879 3.77757 1.88973ZM3.83423 5.17621H0.0566637V17H3.83423V5.17621ZM9.80279 5.17621H6.04411V17H9.76501V10.7953C9.76501 7.33887 14.2698 7.01778 14.2698 10.7953V17H18.0001V9.51097C18.0001 3.68407 11.3327 3.90128 9.76501 6.76279L9.80279 5.17621Z" fill="#545454" />
                  </svg></a>
                  <a href='https://www.instagram.com/abhiiijeetpatil/' target='_blank' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.82256 0.000984283C9.40633 -0.00125582 9.9901 0.00461127 10.5737 0.0185837L10.7289 0.0241835C10.9081 0.0305833 11.0849 0.038583 11.2985 0.0481827C12.1497 0.0881813 12.7304 0.222577 13.24 0.42017C13.768 0.623363 14.2128 0.898554 14.6576 1.34334C15.0643 1.74301 15.379 2.22647 15.5799 2.76009C15.7775 3.26967 15.9119 3.85125 15.9519 4.70242C15.9615 4.91522 15.9695 5.09281 15.9759 5.27201L15.9807 5.4272C15.9949 6.01053 16.0011 6.59404 15.9991 7.17754L15.9999 7.77432V8.82228C16.0019 9.40605 15.9958 9.98982 15.9815 10.5734L15.9767 10.7286C15.9703 10.9078 15.9623 11.0846 15.9527 11.2982C15.9127 12.1494 15.7767 12.7302 15.5799 13.2397C15.3797 13.7739 15.0648 14.2578 14.6576 14.6573C14.2576 15.0639 13.7738 15.3787 13.24 15.5797C12.7304 15.7772 12.1497 15.9116 11.2985 15.9516C11.0849 15.9612 10.9081 15.9692 10.7289 15.9756L10.5737 15.9804C9.9901 15.9947 9.40633 16.0008 8.82256 15.9988L8.22578 15.9996H7.17862C6.59485 16.0016 6.01108 15.9955 5.42748 15.9812L5.27228 15.9764C5.08238 15.9696 4.89251 15.9616 4.7027 15.9524C3.85153 15.9124 3.27075 15.7764 2.76037 15.5797C2.22653 15.3791 1.74299 15.0643 1.34362 14.6573C0.936466 14.2575 0.62142 13.7738 0.420447 13.2397C0.222854 12.7302 0.0884586 12.1494 0.0484599 11.2982C0.0395505 11.1084 0.0315508 10.9185 0.0244608 10.7286L0.020461 10.5734C0.00571235 9.98983 -0.000954805 9.40606 0.000461585 8.82228V7.17754C-0.00177111 6.59404 0.00409598 6.01054 0.018061 5.4272L0.0236608 5.27201C0.0300606 5.09281 0.0380603 4.91522 0.04766 4.70242C0.0876587 3.85045 0.222054 3.27047 0.419647 2.76009C0.620739 2.2262 0.936401 1.74288 1.34442 1.34414C1.74352 0.936754 2.22676 0.621421 2.76037 0.42017C3.27075 0.222577 3.85073 0.0881813 4.7027 0.0481827L5.27228 0.0241835L5.42748 0.0201838C6.01081 0.00544252 6.59431 -0.00122464 7.17782 0.000184368L8.82256 0.000984283ZM8.00019 4.00085C7.47021 3.99335 6.94403 4.09126 6.45222 4.28889C5.96042 4.48652 5.51279 4.77992 5.13536 5.15205C4.75794 5.52418 4.45823 5.96761 4.25367 6.45657C4.0491 6.94554 3.94376 7.47028 3.94376 8.00031C3.94376 8.53034 4.0491 9.05509 4.25367 9.54405C4.45823 10.033 4.75794 10.4764 5.13536 10.8486C5.51279 11.2207 5.96042 11.5141 6.45222 11.7117C6.94403 11.9094 7.47021 12.0073 8.00019 11.9998C9.06102 11.9998 10.0784 11.5784 10.8285 10.8282C11.5786 10.0781 12.0001 9.06074 12.0001 7.99991C12.0001 6.93908 11.5786 5.9217 10.8285 5.17158C10.0784 4.42146 9.06102 4.00085 8.00019 4.00085ZM8.00019 5.60079C8.31899 5.59492 8.63576 5.65263 8.932 5.77055C9.22824 5.88848 9.49801 6.06425 9.72556 6.28761C9.9531 6.51096 10.1339 6.77742 10.2573 7.07142C10.3807 7.36541 10.4443 7.68106 10.4443 7.9999C10.4444 8.31875 10.3809 8.63442 10.2576 8.92846C10.1343 9.22249 9.9536 9.48901 9.72613 9.71244C9.49866 9.93587 9.22894 10.1117 8.93274 10.2298C8.63654 10.3478 8.31979 10.4056 8.00099 10.3998C7.36449 10.3998 6.75406 10.147 6.30399 9.69691C5.85392 9.24684 5.60107 8.63641 5.60107 7.99991C5.60107 7.36341 5.85392 6.75299 6.30399 6.30291C6.75406 5.85284 7.36449 5.59999 8.00099 5.59999L8.00019 5.60079ZM12.2 2.80089C11.942 2.81122 11.6979 2.92101 11.519 3.10726C11.34 3.29351 11.2401 3.54177 11.2401 3.80006C11.2401 4.05834 11.34 4.3066 11.519 4.49285C11.6979 4.6791 11.942 4.78889 12.2 4.79922C12.4653 4.79922 12.7196 4.69387 12.9071 4.50634C13.0947 4.31881 13.2 4.06446 13.2 3.79925C13.2 3.53405 13.0947 3.2797 12.9071 3.09217C12.7196 2.90464 12.4653 2.79929 12.2 2.79929V2.80089Z" fill="#545454" />
                  </svg></a>
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path d="M6.32411 7.6C5.72509 7.6 5.15061 7.38929 4.72703 7.01421C4.30346 6.63914 4.0655 6.13043 4.0655 5.6C4.0655 5.06957 4.30346 4.56086 4.72703 4.18579C5.15061 3.81071 5.72509 3.6 6.32411 3.6C6.92314 3.6 7.49762 3.81071 7.92119 4.18579C8.34477 4.56086 8.58273 5.06957 8.58273 5.6C8.58273 5.86264 8.52431 6.12272 8.4108 6.36537C8.29729 6.60802 8.13093 6.8285 7.92119 7.01421C7.71146 7.19993 7.46247 7.34725 7.18845 7.44776C6.91442 7.54827 6.62072 7.6 6.32411 7.6ZM6.32411 0C4.64685 0 3.03829 0.589998 1.85229 1.6402C0.666288 2.69041 0 4.11479 0 5.6C0 9.8 6.32411 16 6.32411 16C6.32411 16 12.6482 9.8 12.6482 5.6C12.6482 4.11479 11.9819 2.69041 10.7959 1.6402C9.60994 0.589998 8.00137 0 6.32411 0Z" fill="#545454" />
                  </svg></a>
                </div>
                <div className='footer-location-logo-para'>

                  <p>Cranfield, Wharley End, Bedford <br /> MK43 0AL, United Kingdom</p>
                </div>
              </div>
            </div>
            <hr className='footer-hr-line-color' />
            <div className='footer-div-container'>
              <div className='ul-items-div footer-box-1'>
                <b>Home</b>
                <ul>
                  <li><a href=''>Introduction</a></li>
                  <li><a href={`${webUrl}/#AboutMe`}>About me</a></li>
                  <li><a href={`${webUrl}/#ProfessionalExperience`}>Professional Experience</a></li>
                  <li><a href={`${webUrl}/#Skills`}>Skills</a></li>
                  <li><a href={`${webUrl}/#Education`}>Education</a></li>
                  <li><a href={`${webUrl}/#Certifications`}>Certifications</a></li>
                </ul>
              </div>
              <div>
                <div className='ul-items-div footer-box-2'>
                  <b>Get in Touch</b>
                  <ul>
                    <li><a href=''>Download resume</a>
                    </li>
                    <li><a href=''>Contact me</a></li>
                  </ul>
                </div>
                <div className='ul-items-div'>
                  <b>Resources</b>
                  <ul>
                    <li><a href=''>Blogs</a>
                    </li>
                    <li><a href=''>Newsletter</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=''>
            <hr className='footer-hr-line footer-hr-line-color' />
            <p className='footer-copy-text'>Copyright &copy; 2023 Abhijeet Patil</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer