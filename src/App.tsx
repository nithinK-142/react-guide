import Carousel from "./components/Carousel";

const slides = [
  {
    src: "https://picsum.photos/seed/slide1/600/400",
    alt: "Slide 1",
  },
  {
    src: "https://picsum.photos/seed/slide2/600/400",
    alt: "Slide 2",
  },
  {
    src: "https://picsum.photos/seed/slide3/600/400",
    alt: "Slide 3",
  },
];

function App() {
  return (
    <main className="app flex-center">
      <Carousel data={slides} />
    </main>
  );
}

export default App;
