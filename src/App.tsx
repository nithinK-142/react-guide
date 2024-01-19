import MyComponent from "./components/MyComponent";
import withEnhancement from "./components/withEnhancement";

// Using the HOC to create an enhanced component
const EnhancedComponent = withEnhancement(MyComponent);

// App component using the enhanced component
const App: React.FC = () => {
  return (
    <div>
      <h1>Higher Order Component Example</h1>
      <EnhancedComponent message="Hello World" enhancedProp="" />
    </div>
  );
};

export default App;
