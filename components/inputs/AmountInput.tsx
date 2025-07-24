import React from "react";
import { Text, TextInput, View } from "react-native";
import { inputStyles } from "./styles";

interface AmountInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const AmountInput: React.FC<AmountInputProps> = ({
    value,
    onChangeText,
    placeholder = "0",
}) => (
    <View style={inputStyles.amountRow}>
        <Text style={inputStyles.currencySymbol}>₦</Text>
        <TextInput
            style={inputStyles.amountInput}
            value={value}
            onChangeText={onChangeText}
            keyboardType="numeric"
            placeholder={placeholder}
            placeholderTextColor="#999"
        />
    </View>
);

export default AmountInput;
