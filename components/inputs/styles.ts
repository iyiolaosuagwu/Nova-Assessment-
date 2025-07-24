import { StyleSheet } from "react-native";

export const amountInputStyles = StyleSheet.create({
    amountRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    currencySymbol: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        marginRight: 10,
    },
    amountInput: {
        flex: 1,
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
    },
});

export const dateInputStyles = StyleSheet.create({
    dateInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: "#EAECF0",
    },
    dateText: {
        flex: 1,
        fontSize: 16,
        color: "#333",
    },
});

export const periodFilterStyles = StyleSheet.create({
    periodFilter: {
        flexDirection: "row",
        marginBottom: 30,
    },
    periodButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 12,
        marginRight: 10,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#EAECF0",
    },
    activePeriodButton: {
        backgroundColor: "#005EE8",
        borderWidth: 0,
    },
    periodText: {
        fontSize: 14,
        color: "#666",
    },
    activePeriodText: {
        color: "white",
    },
});
