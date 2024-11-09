import React from 'react'
import { IIcon } from '@/types'

const AlienIcon = ({ className, sizeX, sizeY, color = 'white' }: IIcon) => {
  return (
    <svg
      width={sizeX}
      height={sizeY}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          d="M9.50469 1.50397C9.54011 1.50377 9.57553 1.50357 9.61201 1.50336C9.68693 1.50303 9.76184 1.5028 9.83676 1.50267C9.94843 1.50233 10.0601 1.50124 10.1717 1.50013C10.8087 1.49683 11.4358 1.55517 12.0565 1.69535C12.0894 1.70266 12.1224 1.70998 12.1564 1.71751C13.9612 2.13249 15.4969 3.09378 16.4763 4.60392C16.7998 5.11845 17.0277 5.67286 17.1953 6.24904C17.206 6.28569 17.206 6.28569 17.217 6.32309C17.2668 6.49598 17.3073 6.66976 17.3432 6.84567C17.3488 6.87196 17.3544 6.89825 17.3601 6.92534C17.5601 7.91431 17.5378 9.05161 17.3432 10.0394C17.3361 10.0775 17.3289 10.1156 17.3215 10.1549C16.8494 12.6318 15.6849 15.1333 13.9655 17.0583C13.9196 17.1104 13.8745 17.1632 13.8299 17.2164C13.6203 17.465 13.3947 17.6944 13.1568 17.9184C13.1382 17.936 13.1195 17.9537 13.1003 17.9718C12.817 18.239 12.5305 18.4911 12.2021 18.7081C12.1822 18.7215 12.1623 18.7349 12.1418 18.7487C11.3173 19.3004 10.3911 19.6211 9.37394 19.457C8.6269 19.3092 7.93901 18.9172 7.35688 18.4624C7.32542 18.438 7.32542 18.438 7.29331 18.413C6.82424 18.0465 6.40139 17.6525 6.02538 17.1989C5.99184 17.1601 5.95822 17.1213 5.92453 17.0826C5.49809 16.5896 5.1084 16.0688 4.77409 15.5153C4.72639 15.4368 4.67763 15.359 4.62885 15.2811C3.69179 13.7727 3.04443 12.1127 2.68735 10.3969C2.67824 10.3535 2.66912 10.31 2.65972 10.2652C2.53816 9.66015 2.49757 9.06868 2.50011 8.4535C2.50019 8.4187 2.50027 8.38391 2.50035 8.34806C2.50222 7.84134 2.51152 7.34323 2.62263 6.84567C2.63017 6.81161 2.63772 6.77755 2.64549 6.74246C3.02718 5.0763 3.92925 3.60463 5.45082 2.65554C6.49128 2.02874 7.62223 1.69998 8.83634 1.5462C8.88068 1.54013 8.92503 1.53407 8.97071 1.52783C9.1487 1.50696 9.32552 1.50478 9.50469 1.50397ZM4.69387 10.9519C4.48597 11.7832 4.66318 12.6834 5.10996 13.4187C5.71202 14.3037 6.53856 14.8603 7.622 15.0821C8.0843 15.1611 8.56375 15.1631 9.02127 15.0581C9.25944 14.1965 9.02095 13.2904 8.57223 12.5302C8.46451 12.3668 8.33938 12.2212 8.20757 12.075C8.17935 12.0395 8.15112 12.004 8.12204 11.9675C7.51268 11.3355 6.58771 10.9214 5.68703 10.8779C5.34911 10.8669 5.02399 10.8746 4.69387 10.9519ZM12.1281 11.724C12.0907 11.7508 12.0534 11.7776 12.0149 11.8052C11.3482 12.3839 10.9101 13.2639 10.8665 14.1197C10.8557 14.4404 10.8582 14.7459 10.9446 15.0581C11.8259 15.2604 12.8092 15.0875 13.5791 14.6417C14.448 14.1133 15.0453 13.3471 15.272 12.3908C15.3725 11.9128 15.3911 11.4282 15.272 10.9519C14.1659 10.693 12.9797 11.0329 12.1281 11.724Z"
          className={color}
        />
      </g>
    </svg>
  )
}

export default AlienIcon
