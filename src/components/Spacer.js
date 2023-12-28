import React from 'react';
import { View } from 'react-native';

const Spacer = ({ height, width }) => {
    return <View style={{ height: height || 0, width: width || 0 }} />;
};

export default Spacer;