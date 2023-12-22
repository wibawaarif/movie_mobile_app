import React, {useState} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from '../theme/theme';
import CustomIcon from './CustomIcon';

type InputHeaderProps = {
  searchFunction: (searchText: string) => void;
};

const InputHeader = (props: InputHeaderProps) => {
  const [searchText, setSearchText] = useState<string>('');
  return (
    <View style={styles.inputBox}>
      <TextInput
        value={searchText}
        onChangeText={e => setSearchText(e)}
        style={styles.inputText}
        placeholderTextColor={COLORS.WhiteRGBA32}
        placeholder="Search your Movies..."
      />
      <TouchableOpacity onPress={() => props.searchFunction(searchText)}>
        <CustomIcon
          color={COLORS.Orange}
          size={FONTSIZE.size_20}
          name="search"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    borderRadius: BORDERRADIUS.radius_25,
    paddingHorizontal: SPACING.space_24,
    paddingVertical: SPACING.space_8,
  },
  inputText: {
    width: '90%',
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.White,
    fontSize: FONTSIZE.size_14,
  },
});

export default InputHeader;
