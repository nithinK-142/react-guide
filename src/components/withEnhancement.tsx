const withEnhancement = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  return (props: P) => {
    return <WrappedComponent {...props} enhancedProp="This is enhanced!" />;
  };
};

export default withEnhancement;
