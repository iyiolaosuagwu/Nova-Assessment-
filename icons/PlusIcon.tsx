import React from "react";
import Svg, { Path } from "react-native-svg";

type PlusIconProps = React.ComponentProps<typeof Svg> & {
    fill?: string;
};

export default function PlusIcon({
    fill = "#101828",
    ...props
}: PlusIconProps) {
    return (
        <Svg width="54" height="54" viewBox="0 0 54 54" fill="none" {...props}>
            <Path
                d="M27 0.333332C12.3066 0.333332 0.333313 12.3067 0.333313 27C0.333313 41.6933 12.3066 53.6667 27 53.6667C41.6933 53.6667 53.6666 41.6933 53.6666 27C53.6666 12.3067 41.6933 0.333332 27 0.333332ZM37.6666 29H29V37.6667C29 38.76 28.0933 39.6667 27 39.6667C25.9066 39.6667 25 38.76 25 37.6667V29H16.3333C15.24 29 14.3333 28.0933 14.3333 27C14.3333 25.9067 15.24 25 16.3333 25H25V16.3333C25 15.24 25.9066 14.3333 27 14.3333C28.0933 14.3333 29 15.24 29 16.3333V25H37.6666C38.76 25 39.6666 25.9067 39.6666 27C39.6666 28.0933 38.76 29 37.6666 29Z"
                fill={fill}
            />
        </Svg>
    );
}
