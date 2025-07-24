import { Dimensions, StyleSheet } from "react-native";

const { height: screenHeight } = Dimensions.get("window");
const { width: screenWidth } = Dimensions.get("window");

export const addExpenseStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    header: {
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
    },
    amountCard: {
        backgroundColor: "#101828",
        borderRadius: 15,
        padding: 20,
        marginBottom: 30,
    },
    amountLabel: {
        color: "white",
        fontSize: 16,
        marginBottom: 15,
    },
    section: {
        marginBottom: 25,
    },
    sectionLabel: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 10,
    },
    dropdown: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: "#EAECF0",
    },
    categoryDisplay: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    selectedCategoryIcon: {
        width: 40,
        height: 40,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    dropdownText: {
        fontSize: 16,
        color: "#333",
    },
    placeholder: {
        color: "#999",
    },
    uploadArea: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 30,
        marginBottom: 25,
        borderWidth: 1,
        borderColor: "#EAECF0",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
    },
    uploadIcon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: "#F2F4F7",
        justifyContent: "center",
        alignItems: "center",
    },
    uploadText: {
        fontSize: 16,
        color: "#005EE8",
        marginBottom: 5,
    },
    uploadSubtext: {
        fontSize: 14,
        color: "#999",
    },
    noteInput: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: "#EAECF0",
        height: 100,
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 15,
        marginTop: 30,
        marginBottom: 40,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#EAECF0",
    },
    cancelButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#101828",
    },
    continueButton: {
        flex: 1,
        backgroundColor: "#005EE8",
        borderRadius: 10,
        padding: 15,
        alignItems: "center",
    },
    continueButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "white",
    },
    // Modal Styles
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: "white",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        maxHeight: screenHeight * 0.8,
        paddingBottom: 20,
    },
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
        textAlign: "right",
    },
    modalHeader: {
        alignItems: "center",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    modalHandle: {
        width: 40,
        height: 4,
        backgroundColor: "#EAECF0",
        borderRadius: 2,
        marginBottom: 15,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    categoryList: {
        paddingHorizontal: 20,
    },
    categoryItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#f8f9fa",
        borderRadius: 12,
        padding: 16,
        marginVertical: 6,
    },
    categoryItemContent: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    categoryIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    categoryName: {
        fontSize: 16,
        fontWeight: "500",
        color: "#333",
    },
});

export const analyticsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
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
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    reportHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    reportTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    yearSelector: {
        flexDirection: "row",
        alignItems: "center",
    },
    yearText: {
        fontSize: 16,
        color: "#666",
        marginRight: 5,
    },
    periodFilter: {
        flexDirection: "row",
        marginBottom: 30,
    },
    periodButton: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: "#f0f0f0",
    },
    activePeriodButton: {
        backgroundColor: "#005EE8",
    },
    periodText: {
        fontSize: 14,
        color: "#666",
    },
    activePeriodText: {
        color: "white",
    },
    chartSection: {
        alignItems: "center",
        marginBottom: 30,
    },
    chartContainer: {
        marginBottom: 20,
    },
    centerLabel: {
        justifyContent: "center",
        alignItems: "center",
    },
    centerLabelTitle: {
        fontSize: 14,
        color: "#666",
        marginBottom: 5,
    },
    centerLabelAmount: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    noDataContainer: {
        alignItems: "center",
        paddingVertical: 40,
    },
    noDataText: {
        fontSize: 18,
        color: "#666",
        marginTop: 15,
        marginBottom: 5,
    },
    noDataSubtext: {
        fontSize: 14,
        color: "#999",
    },
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
    legendDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        marginRight: 8,
    },
    legendText: {
        fontSize: 12,
        color: "#666",
    },
    statsSection: {
        marginBottom: 30,
    },
    statsRow: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
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
    categoriesSection: {
        marginBottom: 30,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    addButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    addButtonText: {
        fontSize: 14,
        color: "#005EE8",
        marginLeft: 5,
    },
    categoryCards: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    categoryCard: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 15,
        alignItems: "center",
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
    transactionSection: {
        marginBottom: 30,
    },
    transactionItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
    },
    transactionIcon: {
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 15,
    },
    transactionDetails: {
        flex: 1,
    },
    transactionName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        marginBottom: 2,
    },
    transactionCategory: {
        fontSize: 12,
        color: "#666",
    },
    transactionAmount: {
        alignItems: "flex-end",
    },
    transactionAmountText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 2,
    },
    transactionDate: {
        fontSize: 12,
        color: "#666",
    },
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
    noTransactionsContainer: {
        alignItems: "center",
        paddingVertical: 40,
    },
    noTransactionsText: {
        fontSize: 16,
        color: "#666",
        marginTop: 15,
        marginBottom: 5,
    },
    noTransactionsSubtext: {
        fontSize: 14,
        color: "#999",
    },
    insightsSection: {
        marginBottom: 100,
    },
    insightCard: {
        backgroundColor: "white",
        borderRadius: 12,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    },
    insightHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    insightTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginLeft: 8,
    },
    insightText: {
        fontSize: 14,
        color: "#666",
        lineHeight: 20,
    },
    insightHighlight: {
        fontWeight: "bold",
        color: "#005EE8",
    },
});

export const homeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
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
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    greetingSection: {
        marginBottom: 20,
    },
    greeting: {
        fontSize: 16,
        color: "#666",
        marginBottom: 5,
    },
    userName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#333",
    },
    sliderWrapper: {
        marginHorizontal: -20,
        marginBottom: 10,
    },
    sliderContent: {
        paddingHorizontal: 20,
        gap: 10,
    },
    spendingCard: {
        backgroundColor: "#101828",
        borderRadius: 15,
        padding: 20,
        width: screenWidth - 50,
        marginRight: 0,
        alignItems: "center",
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
    pageIndicators: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 30,
    },
    indicator: {
        width: 16,
        height: 4,
        borderRadius: 4,
        backgroundColor: "#EAECF0",
        marginHorizontal: 4,
    },
    activeIndicator: {
        backgroundColor: "#101828",
        width: 16,
    },
    quickLinksSection: {
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 15,
    },
    quickLinksRow: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    quickLinkButton: {
        borderWidth: 1,
        borderColor: "#EAECF0",
        width: "46%",
        borderRadius: 12,
        padding: 10,
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
    transactionsSection: {
        marginBottom: 100,
    },
    transactionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    viewAllText: {
        color: "#005EE8",
        fontSize: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#005EE8",
        paddingBottom: 2,
    },
    transactionItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
    },
    transactionIcon: {
        width: 40,
        height: 40,
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
    transactionAmount: {
        alignItems: "flex-end",
        gap: 6,
    },
    sliderContainer: {
        marginBottom: 15,
    },
    amountText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 2,
    },
    dateText: {
        fontSize: 12,
        color: "#666",
    },
});
