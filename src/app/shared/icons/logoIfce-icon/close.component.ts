import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo-ifce-login-icon',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 298 101"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M98.075 50L94.728 39.0117H77.8982L74.5512 50H64.005L80.298 3.64714H92.2651L108.621 50H98.075ZM92.3914 30.8021L89.0444 20.0664C88.8339 19.3507 88.5497 18.435 88.1919 17.3193C87.8551 16.1826 87.5077 15.0354 87.1499 13.8776C86.8131 12.6988 86.5394 11.6778 86.3289 10.8148C86.1184 11.6778 85.8237 12.7514 85.4448 14.0355C85.0869 15.2985 84.7396 16.4984 84.4028 17.6351C84.066 18.7718 83.8239 19.5822 83.6766 20.0664L80.3611 30.8021H92.3914ZM114.991 50L101.539 14.6986H111.612L118.432 34.8122C118.811 35.991 119.106 37.233 119.316 38.5381C119.548 39.8432 119.706 41.0115 119.79 42.043H120.043C120.106 40.9273 120.253 39.738 120.485 38.4749C120.737 37.2119 121.064 35.991 121.464 34.8122L128.252 14.6986H138.325L124.874 50H114.991ZM145.926 14.6986V50H136.295V14.6986H145.926ZM141.126 0.868492C142.558 0.868492 143.789 1.2053 144.821 1.87891C145.852 2.53147 146.368 3.76291 146.368 5.57324C146.368 7.36252 145.852 8.60449 144.821 9.29916C143.789 9.97277 142.558 10.3096 141.126 10.3096C139.674 10.3096 138.432 9.97277 137.4 9.29916C136.39 8.60449 135.885 7.36252 135.885 5.57324C135.885 3.76291 136.39 2.53147 137.4 1.87891C138.432 1.2053 139.674 0.868492 141.126 0.868492ZM173.577 39.5169C173.577 41.9167 173.009 43.948 171.872 45.611C170.756 47.2529 169.083 48.5054 166.852 49.3685C164.62 50.2105 161.842 50.6315 158.516 50.6315C156.053 50.6315 153.937 50.4736 152.169 50.1579C150.422 49.8421 148.654 49.3159 146.864 48.5791V40.6221C148.78 41.4851 150.832 42.2008 153.021 42.7692C155.232 43.3165 157.168 43.5902 158.831 43.5902C160.705 43.5902 162.042 43.3165 162.841 42.7692C163.662 42.2008 164.073 41.4641 164.073 40.5589C164.073 39.9695 163.904 39.4433 163.568 38.9801C163.252 38.496 162.557 37.9592 161.484 37.3698C160.41 36.7593 158.726 35.9699 156.432 35.0016C154.221 34.0754 152.4 33.1387 150.969 32.1914C149.559 31.2441 148.506 30.1285 147.811 28.8444C147.138 27.5393 146.801 25.8868 146.801 23.887C146.801 20.6242 148.064 18.1719 150.59 16.5299C153.137 14.867 156.537 14.0355 160.789 14.0355C162.978 14.0355 165.062 14.2565 167.041 14.6986C169.041 15.1406 171.093 15.8458 173.198 16.8141L170.293 23.7607C168.546 23.0029 166.894 22.3819 165.336 21.8978C163.799 21.4136 162.231 21.1716 160.631 21.1716C159.221 21.1716 158.158 21.361 157.442 21.7399C156.726 22.1188 156.368 22.6977 156.368 23.4766C156.368 24.0449 156.547 24.5501 156.905 24.9922C157.284 25.4342 158 25.9289 159.052 26.4762C160.126 27.0025 161.694 27.6866 163.757 28.5286C165.757 29.3496 167.494 30.2127 168.967 31.1178C170.441 32.002 171.577 33.1071 172.377 34.4333C173.177 35.7384 173.577 37.4329 173.577 39.5169ZM206.059 32.2861C206.059 35.2332 205.66 37.8434 204.86 40.1169C204.081 42.3903 202.934 44.3164 201.418 45.8952C199.923 47.4529 198.113 48.6317 195.987 49.4316C193.882 50.2316 191.503 50.6315 188.851 50.6315C186.367 50.6315 184.083 50.2316 181.999 49.4316C179.936 48.6317 178.136 47.4529 176.6 45.8952C175.084 44.3164 173.905 42.3903 173.063 40.1169C172.242 37.8434 171.832 35.2332 171.832 32.2861C171.832 28.3708 172.526 25.0553 173.916 22.3398C175.305 19.6244 177.284 17.5614 179.852 16.151C182.42 14.7407 185.483 14.0355 189.04 14.0355C192.345 14.0355 195.271 14.7407 197.818 16.151C200.386 17.5614 202.397 19.6244 203.849 22.3398C205.323 25.0553 206.059 28.3708 206.059 32.2861ZM181.652 32.2861C181.652 34.6017 181.904 36.5488 182.409 38.1276C182.915 39.7064 183.704 40.8957 184.778 41.6956C185.851 42.4956 187.251 42.8955 188.977 42.8955C190.682 42.8955 192.061 42.4956 193.114 41.6956C194.187 40.8957 194.966 39.7064 195.45 38.1276C195.955 36.5488 196.208 34.6017 196.208 32.2861C196.208 29.9495 195.955 28.0129 195.45 26.4762C194.966 24.9185 194.187 23.7502 193.114 22.9714C192.04 22.1925 190.64 21.8031 188.914 21.8031C186.367 21.8031 184.514 22.6767 183.357 24.4238C182.22 26.171 181.652 28.7918 181.652 32.2861ZM231.532 39.5169C231.532 41.9167 230.964 43.948 229.827 45.611C228.711 47.2529 227.038 48.5054 224.807 49.3685C222.575 50.2105 219.797 50.6315 216.471 50.6315C214.008 50.6315 211.892 50.4736 210.124 50.1579C208.377 49.8421 206.608 49.3159 204.819 48.5791V40.6221C206.735 41.4851 208.787 42.2008 210.976 42.7692C213.187 43.3165 215.123 43.5902 216.786 43.5902C218.66 43.5902 219.997 43.3165 220.796 42.7692C221.617 42.2008 222.028 41.4641 222.028 40.5589C222.028 39.9695 221.859 39.4433 221.523 38.9801C221.207 38.496 220.512 37.9592 219.439 37.3698C218.365 36.7593 216.681 35.9699 214.387 35.0016C212.176 34.0754 210.355 33.1387 208.924 32.1914C207.514 31.2441 206.461 30.1285 205.766 28.8444C205.093 27.5393 204.756 25.8868 204.756 23.887C204.756 20.6242 206.019 18.1719 208.545 16.5299C211.092 14.867 214.492 14.0355 218.744 14.0355C220.933 14.0355 223.017 14.2565 224.996 14.6986C226.996 15.1406 229.048 15.8458 231.153 16.8141L228.248 23.7607C226.501 23.0029 224.849 22.3819 223.291 21.8978C221.754 21.4136 220.186 21.1716 218.586 21.1716C217.176 21.1716 216.113 21.361 215.397 21.7399C214.681 22.1188 214.323 22.6977 214.323 23.4766C214.323 24.0449 214.502 24.5501 214.86 24.9922C215.239 25.4342 215.955 25.9289 217.007 26.4762C218.081 27.0025 219.649 27.6866 221.712 28.5286C223.712 29.3496 225.449 30.2127 226.922 31.1178C228.396 32.002 229.532 33.1071 230.332 34.4333C231.132 35.7384 231.532 37.4329 231.532 39.5169ZM20.302 100L9.1874 63.7829H8.90322C8.94532 64.6459 9.00847 65.9511 9.09267 67.6982C9.19792 69.4244 9.29265 71.2663 9.37685 73.224C9.46105 75.1816 9.50315 76.9499 9.50315 78.5286V100H0.756734V53.8366H14.0816L25.0067 89.138H25.1962L36.7844 53.8366H50.1093V100H40.9839V78.1497C40.9839 76.6973 41.005 75.0238 41.0471 73.1292C41.1102 71.2347 41.1839 69.4349 41.2681 67.7298C41.3523 66.0037 41.4155 64.7091 41.4576 63.846H41.1734L29.2694 100H20.302ZM68.3511 63.9723C73.0874 63.9723 76.7186 65.0038 79.2446 67.0667C81.7707 69.1297 83.0337 72.2662 83.0337 76.4762V100H76.3081L74.4452 95.2005H74.1925C73.1821 96.4635 72.1507 97.495 71.0981 98.2949C70.0456 99.0948 68.8352 99.6842 67.467 100.063C66.0987 100.442 64.4357 100.632 62.478 100.632C60.394 100.632 58.5206 100.232 56.8576 99.4316C55.2157 98.6317 53.9211 97.4108 52.9738 95.7689C52.0265 94.1059 51.5529 92.0009 51.5529 89.4538C51.5529 85.7068 52.8685 82.9492 55.4998 81.181C58.1311 79.3917 62.0781 78.4023 67.3407 78.2129L73.4663 78.0234V76.4762C73.4663 74.6238 72.9822 73.2661 72.0138 72.403C71.0455 71.5399 69.6983 71.1084 67.9722 71.1084C66.2671 71.1084 64.5936 71.3505 62.9517 71.8346C61.3097 72.3188 59.6678 72.9293 58.0259 73.666L54.8368 67.1615C56.7102 66.1721 58.8047 65.3932 61.1203 64.8249C63.4569 64.2565 65.8671 63.9723 68.3511 63.9723ZM73.4663 83.6439L69.7404 83.7702C66.6249 83.8544 64.4568 84.4122 63.2358 85.4437C62.036 86.4752 61.436 87.8329 61.436 89.5169C61.436 90.9905 61.8676 92.043 62.7306 92.6745C63.5937 93.2849 64.7199 93.5902 66.1092 93.5902C68.1721 93.5902 69.9088 92.9797 71.3192 91.7588C72.7506 90.5379 73.4663 88.8012 73.4663 86.5488V83.6439ZM105.57 64.0355C106.054 64.0355 106.612 64.0671 107.243 64.1302C107.896 64.1723 108.422 64.2355 108.822 64.3197L108.096 73.3503C107.78 73.245 107.327 73.1713 106.738 73.1292C106.17 73.0661 105.675 73.0345 105.254 73.0345C104.012 73.0345 102.802 73.1924 101.623 73.5081C100.465 73.8239 99.4231 74.3396 98.4969 75.0553C97.5706 75.75 96.8339 76.6762 96.2866 77.834C95.7603 78.9707 95.4972 80.3706 95.4972 82.0335V100H85.8667V64.6986H93.1606L94.5815 70.6348H95.0551C95.7498 69.4349 96.6129 68.3403 97.6443 67.3509C98.6968 66.3405 99.8862 65.5406 101.212 64.9512C102.56 64.3407 104.012 64.0355 105.57 64.0355ZM122.58 63.9723C127.316 63.9723 130.948 65.0038 133.474 67.0667C136 69.1297 137.263 72.2662 137.263 76.4762V100H130.537L128.674 95.2005H128.422C127.411 96.4635 126.38 97.495 125.327 98.2949C124.275 99.0948 123.064 99.6842 121.696 100.063C120.328 100.442 118.665 100.632 116.707 100.632C114.623 100.632 112.75 100.232 111.087 99.4316C109.445 98.6317 108.15 97.4108 107.203 95.7689C106.256 94.1059 105.782 92.0009 105.782 89.4538C105.782 85.7068 107.098 82.9492 109.729 81.181C112.36 79.3917 116.307 78.4023 121.57 78.2129L127.695 78.0234V76.4762C127.695 74.6238 127.211 73.2661 126.243 72.403C125.275 71.5399 123.927 71.1084 122.201 71.1084C120.496 71.1084 118.823 71.3505 117.181 71.8346C115.539 72.3188 113.897 72.9293 112.255 73.666L109.066 67.1615C110.939 66.1721 113.034 65.3932 115.349 64.8249C117.686 64.2565 120.096 63.9723 122.58 63.9723ZM127.695 83.6439L123.969 83.7702C120.854 83.8544 118.686 84.4122 117.465 85.4437C116.265 86.4752 115.665 87.8329 115.665 89.5169C115.665 90.9905 116.097 92.043 116.96 92.6745C117.823 93.2849 118.949 93.5902 120.338 93.5902C122.401 93.5902 124.138 92.9797 125.548 91.7588C126.98 90.5379 127.695 88.8012 127.695 86.5488V83.6439ZM154.431 100.632C150.937 100.632 147.958 100 145.495 98.737C143.032 97.4529 141.159 95.4742 139.875 92.8008C138.591 90.1274 137.949 86.7067 137.949 82.5387C137.949 78.2234 138.675 74.708 140.127 71.9925C141.601 69.256 143.632 67.2457 146.221 65.9616C148.832 64.6775 151.852 64.0355 155.284 64.0355C157.725 64.0355 159.83 64.2776 161.599 64.7617C163.388 65.2248 164.946 65.7827 166.272 66.4352L163.43 73.887C161.914 73.2766 160.504 72.7819 159.199 72.403C157.894 72.003 156.589 71.8031 155.284 71.8031C153.6 71.8031 152.2 72.203 151.084 73.0029C149.968 73.7818 149.137 74.9606 148.59 76.5394C148.042 78.1182 147.769 80.0969 147.769 82.4756C147.769 84.8122 148.063 86.7488 148.653 88.2855C149.242 89.8222 150.095 90.9694 151.21 91.7272C152.326 92.464 153.684 92.8324 155.284 92.8324C157.283 92.8324 159.062 92.5692 160.62 92.043C162.178 91.4957 163.693 90.7378 165.167 89.7695V98.0107C163.693 98.937 162.146 99.6 160.525 100C158.925 100.421 156.894 100.632 154.431 100.632ZM180.725 63.9723C185.461 63.9723 189.092 65.0038 191.618 67.0667C194.144 69.1297 195.407 72.2662 195.407 76.4762V100H188.682L186.819 95.2005H186.566C185.556 96.4635 184.524 97.495 183.472 98.2949C182.419 99.0948 181.209 99.6842 179.84 100.063C178.472 100.442 176.809 100.632 174.852 100.632C172.768 100.632 170.894 100.232 169.231 99.4316C167.589 98.6317 166.295 97.4108 165.347 95.7689C164.4 94.1059 163.926 92.0009 163.926 89.4538C163.926 85.7068 165.242 82.9492 167.873 81.181C170.505 79.3917 174.452 78.4023 179.714 78.2129L185.84 78.0234V76.4762C185.84 74.6238 185.356 73.2661 184.387 72.403C183.419 71.5399 182.072 71.1084 180.346 71.1084C178.641 71.1084 176.967 71.3505 175.325 71.8346C173.683 72.3188 172.041 72.9293 170.399 73.666L167.21 67.1615C169.084 66.1721 171.178 65.3932 173.494 64.8249C175.83 64.2565 178.241 63.9723 180.725 63.9723ZM185.84 83.6439L182.114 83.7702C178.998 83.8544 176.83 84.4122 175.609 85.4437C174.409 86.4752 173.81 87.8329 173.81 89.5169C173.81 90.9905 174.241 92.043 175.104 92.6745C175.967 93.2849 177.093 93.5902 178.483 93.5902C180.546 93.5902 182.282 92.9797 183.693 91.7588C185.124 90.5379 185.84 88.8012 185.84 86.5488V83.6439ZM218.291 64.0355C222.059 64.0355 225.09 65.067 227.384 67.1299C229.679 69.1718 230.826 72.4556 230.826 76.9814V100H221.196V79.3812C221.196 76.8551 220.732 74.9501 219.806 73.666C218.901 72.3819 217.47 71.7399 215.512 71.7399C212.565 71.7399 210.555 72.7398 209.481 74.7396C208.407 76.7394 207.871 79.6233 207.871 83.3913V100H198.24V64.6986H205.597L206.892 69.2139H207.429C208.186 67.9929 209.123 67.0036 210.239 66.2458C211.376 65.488 212.628 64.9301 213.996 64.5723C215.386 64.2144 216.817 64.0355 218.291 64.0355ZM248.089 63.9723C252.825 63.9723 256.457 65.0038 258.983 67.0667C261.509 69.1297 262.772 72.2662 262.772 76.4762V100H256.046L254.183 95.2005H253.931C252.92 96.4635 251.889 97.495 250.836 98.2949C249.784 99.0948 248.573 99.6842 247.205 100.063C245.837 100.442 244.174 100.632 242.216 100.632C240.132 100.632 238.259 100.232 236.596 99.4316C234.954 98.6317 233.659 97.4108 232.712 95.7689C231.764 94.1059 231.291 92.0009 231.291 89.4538C231.291 85.7068 232.607 82.9492 235.238 81.181C237.869 79.3917 241.816 78.4023 247.079 78.2129L253.204 78.0234V76.4762C253.204 74.6238 252.72 73.2661 251.752 72.403C250.783 71.5399 249.436 71.1084 247.71 71.1084C246.005 71.1084 244.332 71.3505 242.69 71.8346C241.048 72.3188 239.406 72.9293 237.764 73.666L234.575 67.1615C236.448 66.1721 238.543 65.3932 240.858 64.8249C243.195 64.2565 245.605 63.9723 248.089 63.9723ZM253.204 83.6439L249.478 83.7702C246.363 83.8544 244.195 84.4122 242.974 85.4437C241.774 86.4752 241.174 87.8329 241.174 89.5169C241.174 90.9905 241.606 92.043 242.469 92.6745C243.332 93.2849 244.458 93.5902 245.847 93.5902C247.91 93.5902 249.647 92.9797 251.057 91.7588C252.489 90.5379 253.204 88.8012 253.204 86.5488V83.6439ZM298.001 64.6986V100H290.612L289.318 95.4847H288.813C288.055 96.6846 287.108 97.6634 285.971 98.4212C284.834 99.179 283.582 99.7369 282.213 100.095C280.845 100.453 279.424 100.632 277.951 100.632C275.425 100.632 273.225 100.189 271.351 99.3053C269.478 98.4002 268.015 97.0003 266.962 95.1058C265.931 93.2113 265.415 90.7484 265.415 87.7171V64.6986H275.046V85.3174C275.046 87.8434 275.498 89.7485 276.403 91.0326C277.309 92.3166 278.751 92.9587 280.729 92.9587C282.687 92.9587 284.224 92.5166 285.339 91.6325C286.455 90.7273 287.234 89.4117 287.676 87.6855C288.139 85.9384 288.371 83.8123 288.371 81.3073V64.6986H298.001ZM294.244 50.458V51.1211C293.633 51.7105 292.833 52.4367 291.844 53.2998C290.854 54.1629 289.791 55.068 288.655 56.0153C287.518 56.9415 286.402 57.8362 285.308 58.6992C284.213 59.5412 283.255 60.2464 282.434 60.8148H276.025V59.9622C276.719 59.1623 277.519 58.2151 278.424 57.1204C279.35 56.0048 280.266 54.8575 281.171 53.6787C282.076 52.4999 282.834 51.4263 283.445 50.458H294.244Z"
        fill="white" />
    </svg>
  `,
  styleUrls: ['logoifce.component.scss'],
})
export class LogoIfceLoginIconComponent {
  @Input() width = '298';
  @Input() height = '101';
}
