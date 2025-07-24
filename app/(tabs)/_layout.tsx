import TabBarBackground from "@/components/ui/TabBarBackground";
import AnalyticsIcon from "@/icons/AnalyticsIcon";
import HomeIcon from "@/icons/HomeIcon";
import PlusIcon from "@/icons/PlusIcon";
import { Tabs, useRouter } from "expo-router";
import React from "react";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";

export default function TabLayout() {
    const router = useRouter();

    const handleAddExpense = () => {
        router.push("/add-expense");
    };

    const android = Platform.OS === "android";

    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#005EE8", // Blue color to match expense tracker
                    tabBarInactiveTintColor: "#999",
                    headerShown: false,
                    tabBarBackground: TabBarBackground,
                    tabBarStyle: Platform.select({
                        ios: {
                            // Use a transparent background on iOS to show the blur effect
                            position: "absolute",
                        },
                        default: {
                            backgroundColor: "white",
                            borderTopWidth: 1,
                            borderTopColor: "#eee",
                            paddingBottom: 5,
                            height: 60,
                        },
                    }),
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        tabBarIcon: ({ color, focused }) => (
                            <HomeIcon active={focused} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="analytics"
                    options={{
                        title: "Analytics",
                        tabBarIcon: ({ color, focused }) => (
                            <AnalyticsIcon active={focused} />
                        ),
                    }}
                />
            </Tabs>

            {/* Floating Action Button */}
            <TouchableOpacity
                style={[
                    styles.fab,
                    {
                        bottom: !android ? 55 : 30,
                    },
                ]}
                onPress={handleAddExpense}
            >
                <PlusIcon />
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    fab: {
        position: "absolute",
        bottom: 55,
        left: "50%",
        marginLeft: -28,
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
    },
});
