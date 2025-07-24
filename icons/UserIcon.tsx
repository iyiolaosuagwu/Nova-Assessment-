import React from "react";
import Svg, { Path } from "react-native-svg";

type UserIconProps = React.ComponentProps<typeof Svg>;

export default function UserIcon(props: UserIconProps) {
    return (
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
            <Path
                d="M12 12.33C14.7614 12.33 17 10.0914 17 7.32996C17 4.56853 14.7614 2.32996 12 2.32996C9.23858 2.32996 7 4.56853 7 7.32996C7 10.0914 9.23858 12.33 12 12.33Z"
                fill="white"
            />
            <Path
                d="M12 14.8301C6.99003 14.8301 2.91003 18.1901 2.91003 22.3301C2.91003 22.6101 3.13003 22.8301 3.41003 22.8301H20.59C20.87 22.8301 21.09 22.6101 21.09 22.3301C21.09 18.1901 17.01 14.8301 12 14.8301Z"
                fill="white"
            />
        </Svg>
    );
}
