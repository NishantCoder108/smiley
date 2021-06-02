import "./styles.css";
import Smiley from "./smiley/Smiley";

const height = 520;
const width = 500;

const strokeWidth = 10;
const centerY = height / 2 - strokeWidth / 2;
const centerX = width / 2 - strokeWidth / 2;
const FaceContainer = (props) => {
  return (
    <>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX} , ${centerY})`}>{props.children}</g>
      </svg>
    </>
  );
};
export default function App() {
  return (
    <div className="App">
      <h1>Smiley Created by SVG method</h1>
      <div>
        <FaceContainer>
          <Smiley strokeWidth={strokeWidth} />
        </FaceContainer>
      </div>
    </div>
  );
}
