import React from "react";
import Svg, { Path } from "react-native-svg";

type AnalyticsIconProps = React.ComponentProps<typeof Svg> & {
    active?: boolean;
};

export default function AnalyticsIcon({
    active = false,
    ...props
}: AnalyticsIconProps) {
    const strokeColor = active ? "#005EE8" : "#667085";
    return (
        <Svg width="25" height="24" viewBox="0 0 25 24" fill="none" {...props}>
            <Path
                d="M9.56091 22H15.5609C20.5609 22 22.5609 20 22.5609 15V9C22.5609 4 20.5609 2 15.5609 2H9.56091C4.56091 2 2.56091 4 2.56091 9V15C2.56091 20 4.56091 22 9.56091 22Z"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M16.0609 18.5C17.1609 18.5 18.0609 17.6 18.0609 16.5V7.5C18.0609 6.4 17.1609 5.5 16.0609 5.5C14.9609 5.5 14.0609 6.4 14.0609 7.5V16.5C14.0609 17.6 14.9509 18.5 16.0609 18.5Z"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <Path
                d="M9.06091 18.5C10.1609 18.5 11.0609 17.6 11.0609 16.5V13C11.0609 11.9 10.1609 11 9.06091 11C7.96091 11 7.06091 11.9 7.06091 13V16.5C7.06091 17.6 7.95091 18.5 9.06091 18.5Z"
                stroke={strokeColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    );
}
