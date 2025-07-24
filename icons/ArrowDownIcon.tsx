import React from "react";
import Svg, { Path } from "react-native-svg";

type ArrowDownIconProps = React.ComponentProps<typeof Svg>;

export default function ArrowDownIcon(props: ArrowDownIconProps) {
    return (
        <Svg width="16" height="17" viewBox="0 0 16 17" fill="none" {...props}>
            <Path
                d="M13.28 6.29669L8.93333 10.6434C8.42 11.1567 7.58 11.1567 7.06667 10.6434L2.72 6.29669"
                stroke="#667085"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
