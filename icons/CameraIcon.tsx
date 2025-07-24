import React from "react";
import Svg, { Path } from "react-native-svg";

type CameraIconProps = React.ComponentProps<typeof Svg>;

export default function CameraIcon(props: CameraIconProps) {
    return (
        <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" {...props}>
            <Path
                d="M5.63333 18.6633H14.3667C16.6667 18.6633 17.5833 17.255 17.6917 15.5383L18.125 8.65501C18.2417 6.85501 16.8083 5.33001 15 5.33001C14.4917 5.33001 14.025 5.03834 13.7917 4.58834L13.1917 3.38001C12.8083 2.62167 11.8083 1.99667 10.9583 1.99667H9.05C8.19166 1.99667 7.19166 2.62167 6.80833 3.38001L6.20833 4.58834C5.975 5.03834 5.50833 5.33001 5 5.33001C3.19166 5.33001 1.75833 6.85501 1.875 8.65501L2.30833 15.5383C2.40833 17.255 3.33333 18.6633 5.63333 18.6633Z"
                stroke="#101828"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M8.75 6.99667H11.25"
                stroke="#101828"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M10 15.33C11.4917 15.33 12.7084 14.1134 12.7084 12.6217C12.7084 11.13 11.4917 9.91336 10 9.91336C8.50835 9.91336 7.29169 11.13 7.29169 12.6217C7.29169 14.1134 8.50835 15.33 10 15.33Z"
                stroke="#101828"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
