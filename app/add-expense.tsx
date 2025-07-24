import Button from "@/components/common/Button";
import DateInput from "@/components/inputs/DateInput";
import CustomSvgIcon from "@/components/ui/CustomSvgIcon";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Dimensions,
    Modal,
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateCategorySpending } from "../store/slices/categorySlice";
import { addExpense } from "../store/slices/expenseSlice";
import { addExpenseStyles } from "./styles";

const { height: screenHeight } = Dimensions.get("window");

export default function AddExpenseScreen() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const { categories } = useAppSelector((state) => state.categories);

    const [amount, setAmount] = useState("0");
    const [category, setCategory] = useState("");
    const [selectedCategoryIcon, setSelectedCategoryIcon] = useState("");
    const [selectedCategoryColor, setSelectedCategoryColor] = useState("");
    const [date, setDate] = useState("");
    const [note, setNote] = useState("");
    const [showCategoryModal, setShowCategoryModal] = useState(false);

    const handleAmountChange = (text: string) => {
        const numericText = text.replace(/[^0-9.]/g, "");
        setAmount(numericText);
    };

    const handleCategorySelect = (
        categoryName: string,
        icon: string,
        color: string
    ) => {
        setCategory(categoryName);
        setSelectedCategoryIcon(icon);
        setSelectedCategoryColor(color);
        setShowCategoryModal(false);
    };

    const handleCancel = () => {
        router.back();
    };

    const handleContinue = () => {
        if (!amount || amount === "0") {
            Alert.alert("Error", "Please enter an amount");
            return;
        }
        if (!category) {
            Alert.alert("Error", "Please select a category");
            return;
        }
        if (!date) {
            Alert.alert("Error", "Please select a date");
            return;
        }

        // Add expense to Redux store
        const newExpense = {
            amount: parseFloat(amount),
            category,
            categoryIcon: selectedCategoryIcon,
            categoryColor: selectedCategoryColor,
            description: note || "No description",
            date: date,
        };

        dispatch(addExpense(newExpense));
        dispatch(
            updateCategorySpending({
                categoryName: category,
                amount: parseFloat(amount),
                increment: true,
            })
        );

        Alert.alert("Success", "Expense added successfully!", [
            { text: "OK", onPress: () => router.back() },
        ]);
    };

    return (
        <SafeAreaView style={addExpenseStyles.container}>
            <ScrollView
                style={addExpenseStyles.content}
                showsVerticalScrollIndicator={false}
            >
                {/* Back Button */}
                <Pressable
                    onPress={handleCancel}
                    style={{
                        alignSelf: "flex-start",
                        marginBottom: 10,
                        paddingVertical: 10,
                        paddingRight: 10,
                    }}
                >
                    <IconSymbol
                        name={"chevron.left" as any}
                        size={18}
                        color="#000"
                    />
                </Pressable>
                {/* Header */}
                <View style={addExpenseStyles.header}>
                    <Text style={addExpenseStyles.title}>Add Expense</Text>
                </View>

                {/* Amount Input */}
                <View style={addExpenseStyles.amountCard}>
                    <Text style={addExpenseStyles.amountLabel}>How much?</Text>
                    <View style={addExpenseStyles.amountRow}>
                        <Text style={addExpenseStyles.currencySymbol}>₦</Text>
                        <TextInput
                            style={addExpenseStyles.amountInput}
                            value={amount}
                            onChangeText={handleAmountChange}
                            keyboardType="numeric"
                            placeholder="0"
                            placeholderTextColor="#999"
                        />
                    </View>
                </View>

                {/* Category Selection */}
                <View style={addExpenseStyles.section}>
                    <Text style={addExpenseStyles.sectionLabel}>Category</Text>
                    <TouchableOpacity
                        style={addExpenseStyles.dropdown}
                        onPress={() => setShowCategoryModal(true)}
                    >
                        <View style={addExpenseStyles.categoryDisplay}>
                            {selectedCategoryIcon ? (
                                <View
                                    style={[
                                        addExpenseStyles.selectedCategoryIcon,
                                        {
                                            backgroundColor:
                                                selectedCategoryColor,
                                        },
                                    ]}
                                >
                                    <CustomSvgIcon
                                        name={selectedCategoryIcon as any}
                                        size={16}
                                        color="white"
                                    />
                                </View>
                            ) : null}
                            <Text
                                style={[
                                    addExpenseStyles.dropdownText,
                                    !category && addExpenseStyles.placeholder,
                                ]}
                            >
                                {category || "Select a category"}
                            </Text>
                        </View>
                        <CustomSvgIcon
                            name="arrowDown"
                            size={16}
                            color="#666"
                        />
                    </TouchableOpacity>
                </View>

                {/* Date Selection */}
                <View style={addExpenseStyles.section}>
                    <Text style={addExpenseStyles.sectionLabel}>
                        Expense date
                    </Text>
                    <DateInput
                        value={date}
                        onChangeText={setDate}
                        placeholder="DD/MM/YYYY"
                    />
                </View>

                {/* File Upload */}
                <TouchableOpacity style={addExpenseStyles.uploadArea}>
                    <View style={addExpenseStyles.uploadIcon}>
                        <CustomSvgIcon name="camera" size={24} color="#666" />
                    </View>
                    <View>
                        <Text style={addExpenseStyles.uploadText}>
                            Click to upload or drag and drop
                        </Text>
                        <Text style={addExpenseStyles.uploadSubtext}>
                            SVG, PNG, JPG or GIF (max. 800x400px)
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Note */}
                <View style={addExpenseStyles.section}>
                    <Text style={addExpenseStyles.sectionLabel}>Note</Text>
                    <TextInput
                        style={addExpenseStyles.noteInput}
                        value={note}
                        onChangeText={setNote}
                        placeholder="Give a description"
                        placeholderTextColor="#999"
                        multiline
                        numberOfLines={4}
                        textAlignVertical="top"
                    />
                </View>

                {/* Action Buttons */}
                <View style={addExpenseStyles.buttonContainer}>
                    <Button
                        variant="secondary"
                        onPress={handleCancel}
                        style={addExpenseStyles.cancelButton}
                        textStyle={addExpenseStyles.cancelButtonText}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="primary"
                        onPress={handleContinue}
                        style={addExpenseStyles.continueButton}
                        textStyle={addExpenseStyles.continueButtonText}
                    >
                        Continue
                    </Button>
                </View>
            </ScrollView>

            {/* Category Selection Modal */}
            <Modal
                visible={showCategoryModal}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowCategoryModal(false)}
            >
                <View style={addExpenseStyles.modalOverlay}>
                    <View style={addExpenseStyles.modalContent}>
                        {/* Modal Header */}
                        <View style={addExpenseStyles.modalHeader}>
                            <View style={addExpenseStyles.modalHandle} />
                            <Text style={addExpenseStyles.modalTitle}>
                                Select a Category
                            </Text>
                        </View>

                        {/* Category List */}
                        <ScrollView
                            style={addExpenseStyles.categoryList}
                            showsVerticalScrollIndicator={false}
                        >
                            {categories.map((cat) => {
                                console.log(cat, "cat");
                                return (
                                    <TouchableOpacity
                                        key={cat.id}
                                        style={addExpenseStyles.categoryItem}
                                        onPress={() =>
                                            handleCategorySelect(
                                                cat.name,
                                                cat.icon,
                                                cat.color
                                            )
                                        }
                                    >
                                        <View
                                            style={
                                                addExpenseStyles.categoryItemContent
                                            }
                                        >
                                            <View
                                                style={[
                                                    addExpenseStyles.categoryIcon,
                                                    {
                                                        backgroundColor:
                                                            cat.color,
                                                    },
                                                ]}
                                            >
                                                <CustomSvgIcon
                                                    name={cat.icon as any}
                                                    size={20}
                                                    color="white"
                                                />
                                            </View>
                                            <Text
                                                style={
                                                    addExpenseStyles.categoryName
                                                }
                                            >
                                                {cat.name}
                                            </Text>
                                        </View>
                                        <IconSymbol
                                            name="chevron.right"
                                            size={16}
                                            color="#999"
                                        />
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
