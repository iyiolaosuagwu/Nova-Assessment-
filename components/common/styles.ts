import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({
    button: {
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
    },
    disabled: {
        opacity: 0.5,
    },
});

export const headerStyles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: "#fff",
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
        backgroundColor: "#EAECF0",
        justifyContent: "center",
        alignItems: "center",
    },
});

export const sectionHeaderStyles = StyleSheet.create({
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    actionButton: {
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#005EE8",
    },
    actionButtonText: {
        fontSize: 14,
        color: "#005EE8",
        marginLeft: 5,
    },
});

export const emptyStateStyles = StyleSheet.create({
    emptyContainer: {
        alignItems: "center",
        paddingVertical: 40,
    },
    emptyTitle: {
        fontSize: 18,
        color: "#666",
        marginTop: 15,
        marginBottom: 5,
    },
    emptySubtitle: {
        fontSize: 14,
        color: "#999",
    },
});

export const loadMoreButtonStyles = StyleSheet.create({
    loadMoreButton: {
        backgroundColor: "white",
        borderRadius: 12,
        paddingVertical: 15,
        alignItems: "center",
        marginTop: 20,
        borderWidth: 1,
        borderColor: "#005EE8",
        marginBottom: 70,
    },
    loadMoreText: {
        fontSize: 16,
        color: "#005EE8",
        fontWeight: "500",
    },
});
