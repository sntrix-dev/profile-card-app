import { FC } from "react";

interface IconProps {
  size?: number;
  color?: string;
}

export const ShareIcon: FC<IconProps> = ({
  size = 16,
  color = "currentColor",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 36 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <ellipse
      cx="18"
      cy="18.05"
      rx="18"
      ry="18.05"
      fill="white"
      fill-opacity="0.4"
    />
    <mask
      id="mask0_2_276"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="6"
      y="6"
      width="24"
      height="24"
    >
      <rect x="6" y="6" width="24" height="24" fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_2_276)">
      <path
        d="M23.3333 29C22.5926 29 21.963 28.6792 21.4444 28.0375C20.9259 27.3958 20.6667 26.6167 20.6667 25.7C20.6667 25.5717 20.6741 25.4386 20.6889 25.3007C20.7037 25.1636 20.7259 25.04 20.7556 24.93L14.4889 20.42C14.237 20.695 13.9556 20.9102 13.6444 21.0657C13.3333 21.2219 13.0074 21.3 12.6667 21.3C11.9259 21.3 11.2963 20.9792 10.7778 20.3375C10.2593 19.6958 10 18.9167 10 18C10 17.0833 10.2593 16.3042 10.7778 15.6625C11.2963 15.0208 11.9259 14.7 12.6667 14.7C13.0074 14.7 13.3333 14.7777 13.6444 14.9332C13.9556 15.0894 14.237 15.305 14.4889 15.58L20.7556 11.07C20.7259 10.96 20.7037 10.8364 20.6889 10.6993C20.6741 10.5614 20.6667 10.4283 20.6667 10.3C20.6667 9.38333 20.9259 8.60417 21.4444 7.9625C21.963 7.32083 22.5926 7 23.3333 7C24.0741 7 24.7037 7.32083 25.2222 7.9625C25.7407 8.60417 26 9.38333 26 10.3C26 11.2167 25.7407 11.9958 25.2222 12.6375C24.7037 13.2792 24.0741 13.6 23.3333 13.6C22.9926 13.6 22.6667 13.5219 22.3556 13.3657C22.0444 13.2102 21.763 12.995 21.5111 12.72L15.2444 17.23C15.2741 17.34 15.2963 17.4636 15.3111 17.6007C15.3259 17.7386 15.3333 17.8717 15.3333 18C15.3333 18.1283 15.3259 18.2611 15.3111 18.3982C15.2963 18.5361 15.2741 18.66 15.2444 18.77L21.5111 23.28C21.763 23.005 22.0444 22.7894 22.3556 22.6332C22.6667 22.4777 22.9926 22.4 23.3333 22.4C24.0741 22.4 24.7037 22.7208 25.2222 23.3625C25.7407 24.0042 26 24.7833 26 25.7C26 26.6167 25.7407 27.3958 25.2222 28.0375C24.7037 28.6792 24.0741 29 23.3333 29Z"
        fill={color}
      />
    </g>
  </svg>
);

export const StarIcon: FC<IconProps> = () => (
  <svg
    width="46"
    height="46"
    viewBox="0 0 46 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_2_321)">
      <path
        d="M23 46C35.7025 46 46 35.7025 46 23C46 10.2975 35.7025 0 23 0C10.2975 0 0 10.2975 0 23C0 35.7025 10.2975 46 23 46Z"
        fill="url(#paint0_linear_2_321)"
        fill-opacity="0.2"
      />
    </g>
    <path
      d="M23 32.4507L29.7921 36.7444C30.0639 36.9221 30.3787 37.0106 30.6974 36.999C31.016 36.9874 31.3244 36.8762 31.5843 36.6791C31.8441 36.4821 32.0439 36.208 32.1588 35.8908C32.2737 35.5737 32.2987 35.2275 32.2306 34.8953L30.4302 26.8185L36.4363 21.374C36.6791 21.1544 36.8547 20.8625 36.9407 20.5356C37.0267 20.2088 37.019 19.8619 36.9187 19.5398C36.8184 19.2176 36.63 18.9348 36.3777 18.7277C36.1255 18.5206 35.8209 18.3987 35.5032 18.3777L27.5987 17.6758L24.5055 10.0396C24.3753 9.72993 24.1639 9.46704 23.8968 9.28259C23.6297 9.09814 23.3182 9 23 9C22.6818 9 22.3704 9.09814 22.1032 9.28259C21.8361 9.46704 21.6247 9.72993 21.4945 10.0396L18.4013 17.6581L10.4968 18.36C10.1791 18.381 9.87451 18.5029 9.62227 18.71C9.37003 18.9171 9.18164 19.1999 9.08132 19.522C8.98099 19.8442 8.97332 20.191 9.05929 20.5179C9.14526 20.8447 9.32094 21.1367 9.56375 21.3562L15.5698 26.8008L13.7694 34.8813C13.7011 35.2135 13.7259 35.5599 13.8407 35.8772C13.9555 36.1945 14.1553 36.4688 14.4152 36.666C14.6751 36.8631 14.9836 36.9744 15.3023 36.9861C15.6211 36.9977 15.936 36.9091 16.2079 36.7313L23 32.4507Z"
      fill="white"
    />
    <defs>
      <filter
        id="filter0_b_2_321"
        x="-34"
        y="-34"
        width="114"
        height="114"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="17" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2_321"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2_321"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_2_321"
        x1="23"
        y1="0"
        x2="23"
        y2="46"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="white" stop-opacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const ShareAltIcon: FC<IconProps> = () => (
  <svg
    width="24"
    height="26"
    viewBox="0 0 24 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2_4499)">
      <g filter="url(#filter0_b_2_4499)">
        <rect
          x="-0.142578"
          y="0.466797"
          width="24"
          height="25.2347"
          rx="8"
          fill="white"
          fill-opacity="0.22"
        />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.237 14.8007C10.0444 14.8897 7.46405 15.8248 5.58368 18.5411C5.4525 18.7637 5.10261 18.5856 5.14633 18.3185C6.10848 13.5986 8.99498 9.81363 13.2372 9.94726V7.18642C13.2372 6.96381 13.4996 6.83018 13.6308 7.00834L18.7913 12.218C18.8787 12.3071 18.8787 12.4852 18.7913 12.5743L13.6308 17.8285C13.4996 17.962 13.2372 17.873 13.2372 17.6504L13.237 14.8007Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_b_2_4499"
        x="-10.1426"
        y="-9.5332"
        width="44"
        height="45.2347"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_2_4499"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_2_4499"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_2_4499">
        <rect
          width="24"
          height="25.2347"
          fill="white"
          transform="translate(0 0.617188)"
        />
      </clipPath>
    </defs>
  </svg>
);
