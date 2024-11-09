import React from 'react'
import { IIcon } from '@/shared/types'

const InfinityIcon = ({ className, sizeX, sizeY, color = 'white' }: IIcon) => {
  return (
    <svg
      className={className}
      width={sizeX}
      height={sizeY}
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.83935 0.189454C4.86159 0.194712 4.88382 0.199971 4.90672 0.20539C5.50964 0.354032 6.09068 0.662329 6.54176 1.09596C6.6041 1.15551 6.66737 1.21216 6.73235 1.26865C6.87152 1.39176 7.00218 1.5222 7.13232 1.65496C7.15623 1.67921 7.18013 1.70347 7.20476 1.72846C7.28021 1.80506 7.35556 1.88177 7.4309 1.95848C7.4824 2.01081 7.53391 2.06313 7.58543 2.11544C7.71093 2.2429 7.83635 2.37046 7.9617 2.49809C8.06306 2.45308 8.12968 2.39864 8.2071 2.31895C8.23036 2.29518 8.25362 2.27141 8.27759 2.24692C8.31496 2.20829 8.31496 2.20829 8.35309 2.16887C8.37912 2.14225 8.40516 2.11564 8.43199 2.08822C8.54323 1.97452 8.6541 1.86046 8.76499 1.74641C9.3566 1.13876 9.3566 1.13876 9.64776 0.916832C9.6896 0.883528 9.6896 0.883528 9.73228 0.849551C10.5275 0.221234 11.6173 -0.0112112 12.6061 0.110514C12.7354 0.129853 12.862 0.157191 12.9887 0.189454C13.0089 0.194544 13.0291 0.199635 13.05 0.20488C13.7363 0.384622 14.3211 0.738748 14.8309 1.23308C14.8545 1.25506 14.8782 1.27703 14.9026 1.29967C15.5294 1.90066 15.9445 2.83631 15.9916 3.70716C16.0139 4.92618 15.7484 5.9583 14.8933 6.86236C14.8719 6.886 14.8506 6.90965 14.8285 6.93401C14.2159 7.59004 13.267 8.02301 12.3794 8.0681C11.9598 8.07986 11.556 8.06654 11.1465 7.96924C11.1243 7.96398 11.102 7.95872 11.0791 7.9533C10.4762 7.80466 9.89516 7.49636 9.44408 7.06273C9.38174 7.00318 9.31847 6.94653 9.25349 6.89004C9.11432 6.76693 8.98366 6.63649 8.85352 6.50373C8.82961 6.47948 8.80571 6.45522 8.78108 6.43023C8.70563 6.35363 8.63028 6.27692 8.55494 6.20021C8.50344 6.14788 8.45193 6.09556 8.40041 6.04325C8.2749 5.91579 8.14949 5.78823 8.02414 5.6606C7.92277 5.70561 7.85616 5.76006 7.77874 5.83974C7.75548 5.86351 7.73222 5.88728 7.70825 5.91177C7.68334 5.93753 7.65842 5.96329 7.63275 5.98983C7.60672 6.01644 7.58068 6.04305 7.55385 6.07047C7.44261 6.18417 7.33174 6.29823 7.22085 6.41228C6.62923 7.01993 6.62923 7.01993 6.33808 7.24186C6.31019 7.26406 6.2823 7.28627 6.25356 7.30914C5.4583 7.93746 4.36856 8.1699 3.37978 8.04818C3.25048 8.02884 3.12389 8.0015 2.99717 7.96924C2.97694 7.96415 2.9567 7.95906 2.93585 7.95381C2.24954 7.77407 1.66472 7.41994 1.15499 6.92561C1.13132 6.90364 1.10766 6.88166 1.08327 6.85902C0.456409 6.25803 0.0412936 5.32238 -0.00580446 4.45154C-0.0280741 3.23251 0.237412 2.20039 1.09254 1.29633C1.11391 1.27269 1.13529 1.24904 1.15731 1.22468C2.07739 0.239358 3.55754 -0.115113 4.83935 0.189454ZM2.50577 2.90699C2.18597 3.31042 2.06313 3.7906 2.09828 4.30159C2.15751 4.68704 2.31536 5.01446 2.56004 5.31273C2.5763 5.33315 2.59256 5.35357 2.60932 5.37462C2.82819 5.62262 3.17994 5.80479 3.49675 5.88198C3.53098 5.89054 3.53098 5.89054 3.5659 5.89927C4.04171 5.97768 4.52144 5.89651 4.92528 5.62364C5.11381 5.48475 5.27483 5.32248 5.43845 5.15485C5.46818 5.12462 5.49793 5.0944 5.52769 5.06419C5.60523 4.98541 5.68258 4.90645 5.7599 4.82743C5.83912 4.74654 5.91852 4.66583 5.99791 4.5851C6.15311 4.42723 6.3081 4.26917 6.46297 4.11097C6.41644 4.00173 6.35496 3.92982 6.27277 3.84538C6.24638 3.81815 6.21999 3.79091 6.1928 3.76285C6.16415 3.73366 6.13549 3.70447 6.10598 3.6744C6.07608 3.64384 6.04619 3.61327 6.01631 3.58271C5.95356 3.51863 5.89068 3.4547 5.82772 3.39083C5.74778 3.3097 5.66835 3.22806 5.58904 3.14628C5.5274 3.0829 5.4654 3.01988 5.4033 2.95695C5.35978 2.91267 5.31662 2.86803 5.27347 2.82337C4.88109 2.42871 4.4192 2.23608 3.87171 2.23736C3.3198 2.24595 2.87262 2.49451 2.50577 2.90699ZM10.5474 3.00384C10.5177 3.03408 10.4879 3.06429 10.4582 3.0945C10.3806 3.17328 10.3033 3.25225 10.2259 3.33126C10.1467 3.41215 10.0673 3.49286 9.98793 3.57359C9.83273 3.73146 9.67774 3.88952 9.52287 4.04772C9.56943 4.15718 9.63107 4.2289 9.71356 4.31331C9.74006 4.34054 9.76655 4.36778 9.79384 4.39584C9.82259 4.42503 9.85134 4.45422 9.88096 4.4843C9.91093 4.51485 9.9409 4.54542 9.97085 4.57598C10.0337 4.64005 10.0967 4.70399 10.1598 4.76786C10.24 4.84905 10.3197 4.93067 10.3994 5.01241C10.4612 5.07574 10.5233 5.13878 10.5855 5.20174C10.6292 5.24607 10.6725 5.29069 10.7159 5.33532C10.9331 5.55371 11.1604 5.72781 11.4529 5.82861C11.4801 5.83827 11.5074 5.84794 11.5354 5.85789C12.0121 6.00251 12.5095 5.92436 12.9477 5.70211C13.3815 5.44785 13.6784 5.05234 13.8356 4.57312C13.9503 4.09336 13.8857 3.63551 13.6756 3.19384C13.6005 3.0702 13.5173 2.95753 13.4258 2.84597C13.4014 2.81533 13.4014 2.81533 13.3765 2.78407C13.1576 2.53607 12.8059 2.3539 12.4891 2.27671C12.4663 2.27101 12.4435 2.2653 12.4199 2.25942C11.6408 2.13102 11.0767 2.46159 10.5474 3.00384Z"
        fill={color}
      />
    </svg>
  )
}

export default InfinityIcon