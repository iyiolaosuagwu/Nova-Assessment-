import { StyleSheet } from "react-native";

export const spendingCardStyles = StyleSheet.create({
    spendingCard: {
        backgroundColor: "#101828",
        borderRadius: 15,
        padding: 20,
        width: "100%",
        marginRight: 0,
    },
    cardTitle: {
        color: "white",
        fontSize: 16,
        marginBottom: 15,
    },
    amount: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 15,
    },
    comparisonRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    comparisonText: {
        color: "#999",
        fontSize: 14,
        marginLeft: 8,
    },
});

export const statCardStyles = StyleSheet.create({
    statCard: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 15,
        flex: 1,
        marginHorizontal: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    statTitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 8,
    },
    statAmount: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 4,
    },
    statSubtext: {
        fontSize: 12,
        color: "#999",
    },
});

export const categoryCardStyles = StyleSheet.create({
    categoryCard: {
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 40,
        paddingVertical: 30,
        alignItems: "center",
        flex: 1,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: "#EAECF0",
    },
    categoryIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },
    categoryName: {
        fontSize: 12,
        color: "#666",
        marginBottom: 5,
        textAlign: "center",
    },
    categoryAmount: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 2,
    },
    categoryPercentage: {
        fontSize: 10,
        color: "#999",
    },
});

export const transactionCardStyles = StyleSheet.create({
    transactionItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: "#EAECF0",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        marginBottom: 15,
        paddingHorizontal: 10,
    },
    transactionIcon: {
        width: 10,
        height: 10,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    transactionDetails: {
        flex: 1,
        gap: 6,
    },
    transactionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 2,
    },
    transactionCategory: {
        fontSize: 14,
        color: "#666",
    },
    transactionDate: {
        fontSize: 12,
        color: "#999",
    },
    transactionAmount: {
        alignItems: "flex-end",
        gap: 6,
    },
    transactionAmountText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 2,
    },
});

export const quickLinkButtonStyles = StyleSheet.create({
    quickLinkButton: {
        borderWidth: 1,
        borderColor: "#eee",
        width: "46%",
        borderRadius: 12,
        padding: 10,
        alignItems: "center",
    },
    quickLinkIcon: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: "#005EE8",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    quickLinkText: {
        fontSize: 14,
        color: "#005EE8",
    },
});

export const analyticsPieChartStyles = StyleSheet.create({
    legendContainer: {
        width: "100%",
    },
    legendRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    legendItem: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    legendText: {
        fontSize: 12,
        color: "#666",
    },
});
