import DateTimePicker, {
    DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Text, TouchableOpacity } from "react-native";
import CustomSvgIcon from "../ui/CustomSvgIcon";
import { inputStyles } from "./styles";

interface DateInputProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
}

const DateInput: React.FC<DateInputProps> = ({
    value,
    onChangeText,
    placeholder = "DD/MM/YYYY",
}) => {
    const [show, setShow] = useState(false);
    const [dateObj, setDateObj] = useState<Date | undefined>(
        value ? new Date(value) : undefined
    );

    const handleChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        setShow(false);
        if (event.type === "set" && selectedDate) {
            setDateObj(selectedDate);
            onChangeText(selectedDate.toISOString());
        }
    };

    const displayValue = dateObj
        ? dateObj.toLocaleDateString("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
          })
        : value || "";

    return (
        <>
            <TouchableOpacity
                style={inputStyles.dateInput}
                onPress={() => setShow(true)}
            >
                <Text style={inputStyles.dateText}>
                    {displayValue || placeholder}
                </Text>
                <CustomSvgIcon name="date" size={16} color="#666" />
            </TouchableOpacity>
            {show && (
                <DateTimePicker
                    value={dateObj || new Date()}
                    mode="date"
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={handleChange}
                />
            )}
        </>
    );
};

export default DateInput;
