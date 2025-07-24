import React from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import CustomSvgIcon from "../ui/CustomSvgIcon";

interface HeaderProps {
    brandName: string;
    avatarIcon?: any;
    avatarColor?: string;
}

const Header: React.FC<HeaderProps> = ({
    brandName,
    avatarIcon = "person.fill",
    avatarColor = "#999",
}) => (
    <View
        style={[
            styles.header,
            {
                paddingTop: Platform.OS === "android" ? 50 : 0,
            },
        ]}
    >
        {/* <Text style={styles.brandName}>{brandName}</Text> */}
        <Image
            source={require("@/assets/images/logo.png")}
            style={styles.logo}
        />
        <View style={styles.avatar}>
            <CustomSvgIcon name="user" size={24} color={avatarColor} />
        </View>
    </View>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "#fff",
        marginBottom: 20,
    },
    brandName: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        fontStyle: "italic",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#D0D5DD",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        width: 127,
        height: 30,
        resizeMode: "contain",
    },
});

export default Header;
