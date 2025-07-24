import React from "react";
import Svg, { Path } from "react-native-svg";

type HomeIconProps = React.ComponentProps<typeof Svg> & {
    active?: boolean;
};

export default function HomeIcon({ active = false, ...props }: HomeIconProps) {
    const strokeColor = active ? "#005EE8" : "#667085";
    return (
        <Svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                d="M21.2694 8.01L14.7194 2.77C13.4394 1.75 11.4394 1.74 10.1694 2.76L3.61936 8.01C2.67936 8.76 2.10936 10.26 2.30936 11.44L3.56936 18.98C3.85936 20.67 5.42935 22 7.13935 22H17.7394C19.4294 22 21.0294 20.64 21.3194 18.97L22.5794 11.43C22.7594 10.26 22.1894 8.76 21.2694 8.01ZM13.1894 18C13.1894 18.41 12.8494 18.75 12.4394 18.75C12.0294 18.75 11.6894 18.41 11.6894 18V15C11.6894 14.59 12.0294 14.25 12.4394 14.25C12.8494 14.25 13.1894 14.59 13.1894 15V18Z"
                fill={strokeColor}
            />
        </Svg>
    );
}
