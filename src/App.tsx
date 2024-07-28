import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import { useEffect } from "react";

interface RowProps extends ListChildComponentProps {
  index: number;
  style: React.CSSProperties;
}

const Row: React.FC<RowProps> = ({ index, style }) => {
  useEffect(() => {
    console.log("mounting", index);
    return () => console.log("unmounting", index);
  }, [index]);

  return (
    <div
      className={
        index % 2
          ? "border p-2 text-center"
          : "border p-2 text-center bg-stone-800"
      }
      style={style}
    >
      Row {index}
    </div>
  );
};

function App() {
  return (
    <main className="bg-[#212121] h-[40rem] w-[20rem] mx-auto rounded-md">
      <AutoSizer>
        {({ height, width }) => (
          <List height={height} itemCount={1000} itemSize={35} width={width}>
            {Row}
          </List>
        )}
      </AutoSizer>
    </main>
  );
}

export default App;
