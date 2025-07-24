import React from "react";
import Svg, { Path } from "react-native-svg";

type DateIconProps = React.ComponentProps<typeof Svg>;

export default function DateIcon(props: DateIconProps) {
    return (
        <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" {...props}>
            <Path
                d="M5.33334 1.66336V3.66336"
                stroke="#667085"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M10.6667 1.66336V3.66336"
                stroke="#667085"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M2.33334 6.39001H13.6667"
                stroke="#667085"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M14 5.99669V11.6634C14 13.6634 13 14.9967 10.6667 14.9967H5.33333C3 14.9967 2 13.6634 2 11.6634V5.99669C2 3.99669 3 2.66336 5.33333 2.66336H10.6667C13 2.66336 14 3.99669 14 5.99669Z"
                stroke="#667085"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M10.4631 9.46337H10.4691"
                stroke="#667085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M10.4631 11.4634H10.4691"
                stroke="#667085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M7.997 9.46337H8.00299"
                stroke="#667085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M7.997 11.4634H8.00299"
                stroke="#667085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M5.52953 9.46337H5.53552"
                stroke="#667085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M5.52953 11.4634H5.53552"
                stroke="#667085"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
