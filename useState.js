import React, { useState } from react;
import { View, Text, Button } from react-native;

const MyComponent = () = {
  const [count, setCount] = useState(0);

  return (
    View
      TextCount {count}Text
      Button title=Increment onPress={() = setCount(count + 1)} 
    View
  );
};

export default MyComponent;
