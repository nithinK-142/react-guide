interface MyComponentProps {
  message: string;
  enhancedProp: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ message, enhancedProp }) => {
  return (
    <div>
      <p>{message}</p>
      <p>Enhanced Prop: {enhancedProp}</p>
    </div>
  );
};

export default MyComponent;
