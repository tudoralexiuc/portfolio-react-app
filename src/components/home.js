import React from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function home() {
  return (
    <div className="home">
      <div className="inner-carousel">
        <div className="item">
          <Link to="/design">
            <svg
              width="671"
              height="453"
              viewBox="0 0 671 453"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="fourth">
                <path
                  id="Vector"
                  opacity="0.4"
                  d="M21.9202 171.98C34.0263 171.98 43.8403 162.166 43.8403 150.059C43.8403 137.953 34.0263 128.139 21.9202 128.139C9.81399 128.139 0 137.953 0 150.059C0 162.166 9.81399 171.98 21.9202 171.98Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_2"
                  opacity="0.4"
                  d="M648.92 182.98C661.026 182.98 670.84 173.166 670.84 161.059C670.84 148.953 661.026 139.139 648.92 139.139C636.814 139.139 627 148.953 627 161.059C627 173.166 636.814 182.98 648.92 182.98Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_3"
                  d="M326.23 301.421H23.2305V452.421H326.23V301.421Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_4"
                  d="M660.23 302.421H357.23V452.421H660.23V302.421Z"
                  fill="#3F3D56"
                />
                <g id="handflower">
                  <path
                    id="Vector_5"
                    d="M251.755 10.9912L250.181 11.1142L258.076 112.167L259.65 112.044L251.755 10.9912Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_6"
                    d="M291.231 73.4214C291.231 103.943 266.757 131.843 266.757 131.843C260.592 114.065 257.391 95.3953 257.284 76.5794C257.284 46.0582 261.525 21.3159 266.757 21.3159C271.99 21.3159 291.231 42.9003 291.231 73.4214Z"
                    fill="#43C07D"
                  />
                  <path
                    id="Vector_7"
                    d="M221.845 87.2816C233.556 115.466 266.862 131.84 266.862 131.84C265.735 113.057 261.526 94.5883 254.405 77.1715C242.694 48.9867 229.283 27.766 224.451 29.7737C219.62 31.7814 210.133 59.0968 221.845 87.2816Z"
                    fill="#43C07D"
                  />
                  <path
                    id="Vector_8"
                    d="M250.968 21.3159C256.636 21.3159 261.231 16.7209 261.231 11.0527C261.231 5.38448 256.636 0.78949 250.968 0.78949C245.3 0.78949 240.705 5.38448 240.705 11.0527C240.705 16.7209 245.3 21.3159 250.968 21.3159Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_9"
                    d="M254.915 9.47374C257.531 9.47374 259.652 7.35297 259.652 4.73687C259.652 2.12077 257.531 0 254.915 0C252.299 0 250.178 2.12077 250.178 4.73687C250.178 7.35297 252.299 9.47374 254.915 9.47374Z"
                    fill="#D9FFE9"
                  />
                </g>
                <g id="groundflower">
                  <path
                    id="Vector_10"
                    d="M471.201 189.18L469.681 189.608L497.173 287.17L498.693 286.742L471.201 189.18Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_11"
                    d="M522.117 242.691C528.082 272.624 509.532 304.769 509.532 304.769C500.011 288.54 493.224 270.855 489.441 252.423C483.476 222.49 482.801 197.396 487.932 196.374C493.063 195.351 516.152 212.759 522.117 242.691Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_12"
                    d="M456.777 269.845C473.771 295.197 509.635 304.746 509.635 304.746C504.858 286.546 497.121 269.255 486.734 253.566C469.74 228.214 452.441 210.023 448.095 212.936C443.748 215.849 439.783 244.492 456.777 269.845Z"
                    fill="#43C07D"
                  />
                  <path
                    id="Vector_13"
                    d="M470.441 199.657C476.109 199.657 480.704 195.062 480.704 189.394C480.704 183.726 476.109 179.131 470.441 179.131C464.773 179.131 460.178 183.726 460.178 189.394C460.178 195.062 464.773 199.657 470.441 199.657Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_14"
                    d="M473.078 187.165C475.694 187.165 477.815 185.045 477.815 182.429C477.815 179.812 475.694 177.692 473.078 177.692C470.462 177.692 468.341 179.812 468.341 182.429C468.341 185.045 470.462 187.165 473.078 187.165Z"
                    fill="#D9FFE9"
                  />
                  <path
                    id="Vector_15"
                    d="M559.114 191.655L514.845 282.838L516.266 283.528L560.535 192.345L559.114 191.655Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_16"
                    d="M563.039 266.167C547.611 292.501 512.391 304.203 512.391 304.203C516.057 285.748 522.733 268.021 532.151 251.731C547.579 225.397 563.746 206.192 568.26 208.837C572.775 211.482 578.467 239.832 563.039 266.167Z"
                    fill="#43C07D"
                  />
                  <path
                    id="Vector_17"
                    d="M496.163 243.052C492.021 273.29 512.483 304.254 512.483 304.254C521.004 287.478 526.708 269.414 529.368 250.787C533.51 220.548 532.666 195.459 527.482 194.749C522.298 194.039 500.305 212.813 496.163 243.052Z"
                    fill="#D9FFE9"
                  />
                  <path
                    id="Vector_18"
                    d="M559.825 202.263C565.493 202.263 570.088 197.668 570.088 192C570.088 186.332 565.493 181.737 559.825 181.737C554.156 181.737 549.561 186.332 549.561 192C549.561 197.668 554.156 202.263 559.825 202.263Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_19"
                    d="M566.423 193.283C569.039 193.283 571.16 191.162 571.16 188.546C571.16 185.93 569.039 183.809 566.423 183.809C563.807 183.809 561.686 185.93 561.686 188.546C561.686 191.162 563.807 193.283 566.423 193.283Z"
                    fill="#D9FFE9"
                  />
                </g>
                <path
                  id="Vector_20"
                  d="M274.804 138.275C274.804 138.275 266.674 115.243 260.804 122.469C254.933 129.695 269.836 141.888 269.836 141.888L274.804 138.275Z"
                  fill="#A0616A"
                />
                <path
                  id="Vector_21"
                  d="M313.191 115.695L308.3 117.507C308.3 117.507 305.965 127.888 306.868 129.695C307.771 131.501 308.223 130.146 306.868 133.759C305.513 137.372 301.449 146.856 300.997 148.211C300.545 149.566 274.803 139.63 274.803 134.662C274.803 134.662 269.384 140.985 266.674 142.34C266.674 142.34 296.481 164.017 300.545 166.727C304.61 169.437 306.868 168.082 310.481 164.921C314.094 161.759 329.449 135.566 329.449 135.566L313.191 115.695Z"
                  fill="#D9FFE9"
                />
                <path
                  id="Vector_22"
                  d="M300.094 276.018C300.094 276.018 300.546 280.985 301.449 281.437C302.352 281.888 309.126 293.179 301.449 295.437C293.771 297.695 289.255 296.792 287.449 297.695C285.642 298.598 254.029 300.405 253.578 295.437C253.126 290.469 268.933 289.566 268.933 289.566C268.933 289.566 283.384 280.082 285.642 275.114C287.9 270.146 300.094 276.018 300.094 276.018Z"
                  fill="#D9FFE9"
                />
                <path
                  id="Vector_23"
                  d="M391.772 285.05C391.772 285.05 402.61 303.566 399.901 305.824C397.191 308.082 370.802 316.311 366.933 316.663C361.965 317.114 358.352 313.05 362.417 310.792C366.481 308.534 375.062 299.05 375.062 295.888V287.759L391.772 285.05Z"
                  fill="#D9FFE9"
                />
                <path
                  id="Vector_24"
                  d="M402.159 164.017C402.159 164.017 411.643 175.759 396.739 194.727L371.901 226.34C371.901 226.34 387.255 250.727 387.707 263.372C388.159 276.018 391.32 273.308 392.223 278.727C393.126 284.147 397.191 281.437 394.03 285.501C390.868 289.566 379.126 293.179 375.513 290.018C374.271 288.881 373.3 287.478 372.675 285.914C372.049 284.351 371.785 282.666 371.901 280.985C371.901 279.179 365.578 268.792 365.126 265.63C364.675 262.469 347.965 236.727 347.965 236.727C347.965 236.727 342.546 221.372 348.868 212.792C355.191 204.211 359.369 192.041 359.369 192.041C359.369 192.041 340.739 214.598 327.642 220.017C327.642 220.017 322.675 220.921 323.578 223.179C324.481 225.437 323.578 226.792 322.223 229.05C320.868 231.308 311.384 257.501 308.223 264.276C305.062 271.05 306.417 275.114 302.804 277.372C299.191 279.631 282.933 277.824 282.933 275.566C282.933 273.308 285.191 267.437 286.546 264.276C287.9 261.114 298.739 224.534 297.836 218.211C296.933 211.888 298.288 203.308 305.062 199.695C311.836 196.082 346.159 166.727 347.965 166.727C349.771 166.727 402.159 164.017 402.159 164.017Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_25"
                  d="M311.384 93.1139C321.86 93.1139 330.352 84.6217 330.352 74.1461C330.352 63.6705 321.86 55.1783 311.384 55.1783C300.909 55.1783 292.417 63.6705 292.417 74.1461C292.417 84.6217 300.909 93.1139 311.384 93.1139Z"
                  fill="#A0616A"
                />
                <path
                  id="Vector_26"
                  d="M326.739 75.9526C326.739 75.9526 332.61 86.3398 339.836 87.6946C347.062 89.0495 320.868 109.824 320.868 109.824C320.868 109.824 314.546 89.9527 309.126 89.0495C303.707 88.1462 326.739 75.9526 326.739 75.9526Z"
                  fill="#A0616A"
                />
                <path
                  id="Vector_27"
                  d="M308.223 118.404C308.223 124.275 325.836 140.985 325.836 140.985L342.546 154.985C342.546 154.985 342.997 159.953 344.804 160.404C346.61 160.856 348.868 160.856 347.062 163.566C345.255 166.275 340.739 172.146 344.804 173.05C346.029 173.236 347.264 173.354 348.502 173.402C349.586 173.465 350.86 173.524 352.291 173.578C355.633 173.695 359.815 173.772 364.345 173.741C365.632 173.736 366.942 173.721 368.274 173.695C385.349 173.357 405.13 171.392 403.513 164.921C400.804 154.082 402.61 150.469 396.739 144.598C390.868 138.727 381.384 118.404 381.384 118.404C381.384 118.404 362.417 86.3398 346.61 86.3398L343.327 85.4772C341.801 85.0753 340.188 85.1635 338.715 85.7292C337.243 86.2949 335.985 87.3096 335.121 88.6295C331.951 93.4572 326.951 100.71 324.029 103.049C319.513 106.662 318.809 104.07 318.809 104.07C318.809 104.07 308.223 112.533 308.223 118.404Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_28"
                  d="M348.417 187.05C348.417 187.05 335.32 207.372 343.449 210.985C351.578 214.598 356.094 189.759 356.094 189.759L348.417 187.05Z"
                  fill="#A0616A"
                />
                <path
                  id="Vector_29"
                  d="M323.784 72.0037C323.056 71.9119 322.826 70.9933 322.703 70.2699C322.047 66.3958 319.16 62.7222 315.281 62.0968C313.798 61.8996 312.291 62.0211 310.859 62.4532C308.807 63.0161 306.882 63.9639 305.184 65.2462C304.354 66.0053 303.393 66.6085 302.349 67.0268C301.637 67.2358 298.615 68.5794 297.909 68.8067C296.356 69.3065 295.072 70.9314 293.473 70.6097C291.943 70.3019 291.362 68.4547 291.116 66.9139C290.556 63.4036 292.566 58.1659 294.563 55.2256C296.079 52.9944 298.645 51.7102 301.21 50.8748C304.214 49.9627 307.302 49.3492 310.427 49.0433C314.646 48.545 319.016 48.2806 323.059 49.5847C327.102 50.8888 330.784 54.079 331.539 58.2598C331.696 59.1306 331.725 60.0226 331.918 60.8864C332.388 62.9934 333.782 64.7645 334.595 66.7644C335.182 68.2331 335.455 69.8084 335.395 71.3889C335.336 72.9693 334.946 74.5198 334.25 75.9402C333.124 78.2049 331.166 80.3811 331.588 82.8748L328.103 80.1268C327.6 79.8406 327.209 79.3904 326.998 78.8512C326.786 78.3121 326.766 77.7167 326.94 77.1643L327.447 72.8005C327.622 72.0099 327.543 71.1841 327.221 70.4412C325.672 67.7354 324.998 72.1569 323.784 72.0037Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_30"
                  opacity="0.1"
                  d="M356.546 155.888L352.291 173.578C356.582 173.731 362.258 173.813 368.274 173.695C369.791 169.143 371.241 164.397 372.352 159.953C376.417 143.695 369.642 118.856 366.029 107.114C362.417 95.372 353.384 92.2107 353.384 92.2107C349.681 93.5129 346.184 95.3379 342.997 97.6301C337.126 101.695 356.546 155.888 356.546 155.888Z"
                  fill="black"
                />
                <path
                  id="Vector_31"
                  opacity="0.1"
                  d="M352.933 154.985L348.502 173.402C349.586 173.465 350.86 173.524 352.291 173.578C355.633 173.695 359.815 173.772 364.345 173.741C365.975 168.904 367.551 163.801 368.739 159.05C372.804 142.791 366.029 117.953 362.417 106.211C358.804 94.4688 350.9 107.34 350.9 107.34C350.9 107.34 354.062 99.6623 348.191 103.727C342.32 107.791 352.933 154.985 352.933 154.985Z"
                  fill="black"
                />
                <path
                  id="Vector_32"
                  d="M351.578 91.3075C351.578 91.3075 360.61 94.4688 364.223 106.211C367.836 117.953 374.61 142.791 370.546 159.05C366.481 175.308 357.9 195.63 357.9 195.63C357.9 195.63 349.32 189.308 346.158 190.663L354.739 154.985C354.739 154.985 335.32 100.791 341.191 96.7268C344.377 94.4346 347.875 92.6097 351.578 91.3075Z"
                  fill="#D9FFE9"
                />
                <path
                  id="Vector_33"
                  d="M313.275 302.083C300.272 299.88 287.767 297.988 275.759 296.407L280.506 287.204C278.905 286.648 271.873 291.918 271.873 291.918L278.103 265.203C270.052 266.174 265.959 293.452 265.959 293.452L256.965 284.229L261.32 294.598C229.733 290.779 197.952 288.779 166.136 288.607L170.199 280.73C168.598 280.174 161.566 285.445 161.566 285.445L167.795 258.73C159.745 259.7 155.652 286.978 155.652 286.978L146.658 277.756L151.27 288.738C132.979 289.04 114.716 290.28 96.5527 292.455C100.662 280.183 114.622 268.513 114.622 268.513C103.961 271.683 98.3686 276.996 95.4465 281.95C95.1854 256.63 99.3955 231.463 107.883 207.607C107.883 207.607 85.8473 255.559 88.6591 287.746L88.9954 293.462C70.314 296.137 62.9646 302.421 62.9646 302.421L313.275 302.083Z"
                  fill="#43C07D"
                />
              </g>
            </svg>
          </Link>
        </div>
        <div className="item">
          <Link to="/tooling">
            <svg
              width="672"
              height="448"
              viewBox="0 0 672 448"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="fifth">
                <path
                  id="Vector"
                  opacity="0.4"
                  d="M649.69 173.84C661.796 173.84 671.61 164.026 671.61 151.92C671.61 139.814 661.796 130 649.69 130C637.584 130 627.77 139.814 627.77 151.92C627.77 164.026 637.584 173.84 649.69 173.84Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_2"
                  d="M658 297.282H355V447.282H658V297.282Z"
                  fill="#3F3D56"
                />
                <g id="groundflower">
                  <path
                    id="Vector_3"
                    d="M468.971 184.041L467.451 184.469L494.942 282.031L496.462 281.602L468.971 184.041Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_4"
                    d="M519.887 237.552C525.851 267.485 507.302 299.63 507.302 299.63C497.781 283.4 490.993 265.716 487.211 247.284C481.246 217.351 480.57 192.257 485.702 191.234C490.833 190.212 513.922 207.62 519.887 237.552Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_5"
                    d="M454.547 265.115C471.541 290.467 507.404 300.016 507.404 300.016C502.628 281.816 494.891 264.525 484.504 248.836C467.51 223.484 450.21 205.293 445.864 208.206C441.518 211.12 437.553 239.762 454.547 265.115Z"
                    fill="#43C07D"
                  />
                  <path
                    id="Vector_6"
                    d="M468.211 194.518C473.879 194.518 478.474 189.923 478.474 184.255C478.474 178.587 473.879 173.992 468.211 173.992C462.543 173.992 457.948 178.587 457.948 184.255C457.948 189.923 462.543 194.518 468.211 194.518Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_7"
                    d="M470.848 182.026C473.464 182.026 475.585 179.905 475.585 177.289C475.585 174.673 473.464 172.552 470.848 172.552C468.232 172.552 466.111 174.673 466.111 177.289C466.111 179.905 468.232 182.026 470.848 182.026Z"
                    fill="#D9FFE9"
                  />
                  <path
                    id="Vector_8"
                    d="M556.884 186.516L512.615 277.699L514.035 278.388L558.304 187.206L556.884 186.516Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_9"
                    d="M560.808 261.437C545.38 287.771 510.16 299.473 510.16 299.473C513.826 281.018 520.502 263.291 529.921 247.001C545.349 220.667 561.515 201.462 566.03 204.107C570.544 206.752 576.236 235.102 560.808 261.437Z"
                    fill="#43C07D"
                  />
                  <path
                    id="Vector_10"
                    d="M493.933 238.322C489.791 268.561 510.252 299.524 510.252 299.524C518.773 282.748 524.478 264.685 527.138 246.057C531.28 215.818 530.435 190.73 525.251 190.019C520.068 189.309 498.075 208.083 493.933 238.322Z"
                    fill="#D9FFE9"
                  />
                  <path
                    id="Vector_11"
                    d="M557.594 197.124C563.262 197.124 567.857 192.529 567.857 186.861C567.857 181.193 563.262 176.598 557.594 176.598C551.926 176.598 547.331 181.193 547.331 186.861C547.331 192.529 551.926 197.124 557.594 197.124Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_12"
                    d="M564.193 188.143C566.809 188.143 568.93 186.023 568.93 183.407C568.93 180.79 566.809 178.67 564.193 178.67C561.577 178.67 559.456 180.79 559.456 183.407C559.456 186.023 561.577 188.143 564.193 188.143Z"
                    fill="#D9FFE9"
                  />
                </g>
                <path
                  id="Vector_13"
                  opacity="0.4"
                  d="M31.2479 184.496C48.5057 184.496 62.4958 170.506 62.4958 153.248C62.4958 135.99 48.5057 122 31.2479 122C13.9902 122 0 135.99 0 153.248C0 170.506 13.9902 184.496 31.2479 184.496Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_14"
                  d="M327.726 296.534H24.7263V446.534H327.726V296.534Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_15"
                  d="M174.251 181.104L172.677 181.227L180.571 282.28L182.146 282.157L174.251 181.104Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_16"
                  d="M213.727 239.534C213.727 270.055 189.253 297.956 189.253 297.956C183.088 280.178 179.887 261.508 179.78 242.692C179.78 212.171 184.021 187.429 189.253 187.429C194.485 187.429 213.727 209.013 213.727 239.534Z"
                  fill="#D9FFE9"
                />
                <path
                  id="Vector_17"
                  d="M144.341 253.394C156.052 281.579 189.358 297.953 189.358 297.953C188.231 279.17 184.022 260.701 176.901 243.284C165.19 215.1 151.779 193.879 146.947 195.886C142.116 197.894 132.629 225.21 144.341 253.394Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_18"
                  d="M173.464 191.429C179.132 191.429 183.727 186.834 183.727 181.165C183.727 175.497 179.132 170.902 173.464 170.902C167.796 170.902 163.201 175.497 163.201 181.165C163.201 186.834 167.796 191.429 173.464 191.429Z"
                  fill="#3F3D56"
                />
                <path
                  id="Vector_19"
                  d="M177.411 179.587C180.027 179.587 182.148 177.466 182.148 174.85C182.148 172.234 180.027 170.113 177.411 170.113C174.795 170.113 172.674 172.234 172.674 174.85C172.674 177.466 174.795 179.587 177.411 179.587Z"
                  fill="#D9FFE9"
                />
                <path
                  id="Vector_20"
                  d="M314.771 300.196C301.768 297.993 289.263 296.101 277.255 294.52L282.002 285.317C280.401 284.761 273.369 290.031 273.369 290.031L279.598 263.316C271.548 264.287 267.455 291.565 267.455 291.565L258.461 282.342L262.815 292.711C231.229 288.892 199.448 286.892 167.632 286.72L171.695 278.843C170.094 278.287 163.062 283.558 163.062 283.558L169.291 256.842C161.241 257.813 157.148 285.091 157.148 285.091L148.154 275.869L152.766 286.851C134.475 287.153 116.212 288.393 98.0486 290.567C102.158 278.296 116.118 266.625 116.118 266.625C105.457 269.796 99.8644 275.109 96.9423 280.063C96.6812 254.743 100.891 229.576 109.379 205.72C109.379 205.72 87.3432 253.672 90.1549 285.859L90.4913 291.575C71.8099 294.249 64.4604 300.534 64.4604 300.534L314.771 300.196Z"
                  fill="#43C07D"
                />
                <g id="handflower">
                  <path
                    id="Vector_21"
                    d="M404.378 10.9912L405.952 11.1142L398.057 112.167L396.483 112.044L404.378 10.9912Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_22"
                    d="M364.902 73.4214C364.902 103.943 389.375 131.843 389.375 131.843C395.541 114.065 398.742 95.3953 398.849 76.5794C398.849 46.0582 394.608 21.3159 389.375 21.3159C384.143 21.3159 364.902 42.9003 364.902 73.4214Z"
                    fill="#43C07D"
                  />
                  <path
                    id="Vector_23"
                    d="M434.288 87.2816C422.576 115.466 389.27 131.84 389.27 131.84C390.398 113.057 394.607 94.5883 401.727 77.1715C413.439 48.9867 426.85 27.766 431.681 29.7737C436.513 31.7814 445.999 59.0968 434.288 87.2816Z"
                    fill="#43C07D"
                  />
                  <path
                    id="Vector_24"
                    d="M405.165 21.3159C399.497 21.3159 394.902 16.7209 394.902 11.0527C394.902 5.38448 399.497 0.78949 405.165 0.78949C410.833 0.78949 415.428 5.38448 415.428 11.0527C415.428 16.7209 410.833 21.3159 405.165 21.3159Z"
                    fill="#3F3D56"
                  />
                  <path
                    id="Vector_25"
                    d="M401.217 9.47374C398.601 9.47374 396.481 7.35297 396.481 4.73687C396.481 2.12077 398.601 0 401.217 0C403.834 0 405.954 2.12077 405.954 4.73687C405.954 7.35297 403.834 9.47374 401.217 9.47374Z"
                    fill="#D9FFE9"
                  />
                </g>
                <path
                  id="Vector_26"
                  d="M381.329 138.275C381.329 138.275 389.458 115.243 395.329 122.469C401.2 129.695 386.297 141.888 386.297 141.888L381.329 138.275Z"
                  fill="#A0616A"
                />
                <path
                  id="Vector_27"
                  d="M342.942 115.695L347.832 117.507C347.832 117.507 350.168 127.888 349.265 129.695C348.362 131.501 347.91 130.146 349.265 133.759C350.62 137.372 354.684 146.856 355.136 148.211C355.587 149.566 381.329 139.63 381.329 134.662C381.329 134.662 386.749 140.985 389.458 142.34C389.458 142.34 359.652 164.017 355.587 166.727C351.523 169.437 349.265 168.082 345.652 164.92C342.039 161.759 326.684 135.566 326.684 135.566L342.942 115.695Z"
                  fill="#D9FFE9"
                />
                <path
                  id="Vector_28"
                  d="M356.039 276.017C356.039 276.017 355.587 280.985 354.684 281.437C353.781 281.888 347.007 293.179 354.684 295.437C362.361 297.695 366.878 296.792 368.684 297.695C370.49 298.598 402.103 300.405 402.555 295.437C403.007 290.469 387.2 289.566 387.2 289.566C387.2 289.566 372.748 280.082 370.49 275.114C368.232 270.146 356.039 276.017 356.039 276.017Z"
                  fill="#D9FFE9"
                />
                <path
                  id="Vector_29"
                  d="M264.361 285.05C264.361 285.05 253.523 303.566 256.232 305.824C258.942 308.082 285.331 316.311 289.2 316.663C294.168 317.114 297.781 313.05 293.716 310.792C289.652 308.534 281.071 299.05 281.071 295.889V287.76L264.361 285.05Z"
                  fill="#D9FFE9"
                />
                <path
                  id="Vector_30"
                  d="M253.974 164.017C253.974 164.017 244.49 175.759 259.394 194.727L284.232 226.34C284.232 226.34 268.877 250.727 268.426 263.372C267.974 276.018 264.813 273.308 263.91 278.727C263.006 284.147 258.942 281.437 262.103 285.501C265.265 289.566 277.006 293.179 280.619 290.018C281.862 288.881 282.833 287.478 283.458 285.914C284.084 284.351 284.348 282.666 284.232 280.985C284.232 279.179 290.555 268.792 291.007 265.63C291.458 262.469 308.168 236.727 308.168 236.727C308.168 236.727 313.587 221.372 307.265 212.792C300.942 204.211 296.764 192.041 296.764 192.041C296.764 192.041 315.394 214.598 328.49 220.017C328.49 220.017 333.458 220.921 332.555 223.179C331.652 225.437 332.555 226.792 333.91 229.05C335.265 231.308 344.749 257.501 347.91 264.276C351.071 271.05 349.716 275.114 353.329 277.372C356.942 279.631 373.2 277.824 373.2 275.566C373.2 273.308 370.942 267.437 369.587 264.276C368.232 261.114 357.394 224.534 358.297 218.211C359.2 211.888 357.845 203.308 351.071 199.695C344.297 196.082 309.974 166.727 308.168 166.727C306.361 166.727 253.974 164.017 253.974 164.017Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_31"
                  d="M344.749 93.1139C334.273 93.1139 325.781 84.6217 325.781 74.1461C325.781 63.6705 334.273 55.1783 344.749 55.1783C355.224 55.1783 363.716 63.6705 363.716 74.1461C363.716 84.6217 355.224 93.1139 344.749 93.1139Z"
                  fill="#A0616A"
                />
                <path
                  id="Vector_32"
                  d="M329.394 75.9526C329.394 75.9526 323.523 86.3398 316.297 87.6946C309.071 89.0495 335.265 109.824 335.265 109.824C335.265 109.824 341.587 89.9527 347.007 89.0495C352.426 88.1462 329.394 75.9526 329.394 75.9526Z"
                  fill="#A0616A"
                />
                <path
                  id="Vector_33"
                  d="M347.91 118.404C347.91 124.275 330.297 140.985 330.297 140.985L313.587 154.985C313.587 154.985 313.136 159.953 311.329 160.404C309.523 160.856 307.265 160.856 309.071 163.566C310.878 166.275 315.394 172.146 311.329 173.05C310.104 173.236 308.869 173.354 307.631 173.402C306.547 173.465 305.273 173.524 303.841 173.578C300.5 173.695 296.318 173.772 291.788 173.741C290.501 173.736 289.191 173.721 287.859 173.695C270.783 173.357 251.003 171.392 252.619 164.921C255.329 154.082 253.523 150.469 259.394 144.598C265.265 138.727 274.749 118.404 274.749 118.404C274.749 118.404 293.716 86.3398 309.523 86.3398L312.806 85.4772C314.332 85.0753 315.945 85.1635 317.418 85.7292C318.89 86.2949 320.148 87.3096 321.012 88.6295C324.182 93.4572 329.182 100.71 332.103 103.049C336.62 106.662 337.324 104.07 337.324 104.07C337.324 104.07 347.91 112.533 347.91 118.404Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_34"
                  d="M307.716 187.05C307.716 187.05 320.813 207.372 312.684 210.985C304.555 214.598 300.039 189.759 300.039 189.759L307.716 187.05Z"
                  fill="#A0616A"
                />
                <path
                  id="Vector_35"
                  d="M332.349 72.0037C333.077 71.9119 333.307 70.9933 333.429 70.2699C334.085 66.3958 336.973 62.7222 340.852 62.0968C342.334 61.8996 343.842 62.0211 345.274 62.4532C347.325 63.0161 349.251 63.9639 350.948 65.2462C351.779 66.0053 352.739 66.6085 353.784 67.0268C354.496 67.2358 357.518 68.5794 358.224 68.8067C359.776 69.3065 361.061 70.9314 362.66 70.6097C364.19 70.3019 364.77 68.4547 365.016 66.9139C365.576 63.4036 363.567 58.1659 361.57 55.2256C360.054 52.9944 357.488 51.7102 354.923 50.8748C351.918 49.9627 348.831 49.3492 345.706 49.0433C341.487 48.545 337.117 48.2806 333.074 49.5847C329.031 50.8888 325.349 54.079 324.594 58.2598C324.437 59.1306 324.407 60.0226 324.215 60.8864C323.745 62.9934 322.351 64.7645 321.537 66.7644C320.951 68.2331 320.678 69.8084 320.738 71.3889C320.797 72.9693 321.187 74.5198 321.883 75.9402C323.009 78.2049 324.967 80.3811 324.545 82.8748L328.03 80.1268C328.533 79.8406 328.923 79.3904 329.135 78.8512C329.347 78.3121 329.367 77.7167 329.193 77.1643L328.686 72.8005C328.511 72.0099 328.59 71.1841 328.912 70.4412C330.461 67.7354 331.135 72.1569 332.349 72.0037Z"
                  fill="#43C07D"
                />
                <path
                  id="Vector_36"
                  opacity="0.1"
                  d="M299.587 155.888L303.841 173.578C299.551 173.731 293.874 173.813 287.859 173.695C286.341 169.143 284.892 164.397 283.781 159.953C279.716 143.695 286.49 118.856 290.103 107.114C293.716 95.372 302.749 92.2107 302.749 92.2107C306.451 93.5129 309.949 95.3379 313.136 97.6301C319.007 101.695 299.587 155.888 299.587 155.888Z"
                  fill="black"
                />
                <path
                  id="Vector_37"
                  opacity="0.1"
                  d="M303.2 154.985L307.631 173.402C306.547 173.465 305.273 173.524 303.841 173.578C300.5 173.695 296.318 173.772 291.788 173.741C290.158 168.904 288.581 163.801 287.394 159.05C283.329 142.791 290.103 117.953 293.716 106.211C297.329 94.4688 305.232 107.34 305.232 107.34C305.232 107.34 302.071 99.6623 307.942 103.727C313.813 107.791 303.2 154.985 303.2 154.985Z"
                  fill="black"
                />
                <path
                  id="Vector_38"
                  d="M304.555 91.3075C304.555 91.3075 295.523 94.4688 291.91 106.211C288.297 117.953 281.523 142.791 285.587 159.05C289.652 175.308 298.232 195.63 298.232 195.63C298.232 195.63 306.813 189.308 309.974 190.663L301.394 154.985C301.394 154.985 320.813 100.791 314.942 96.7269C311.756 94.4347 308.258 92.6097 304.555 91.3075Z"
                  fill="#D9FFE9"
                />
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default home;
