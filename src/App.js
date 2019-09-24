import React from 'react';
import ImageIO from "./ImageIO";
import ImageNative from "./ImageNative";
import ImageNone from "./ImageNone";
import { images } from "./Constant";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      mode: "none",
    }
    this.isNativeSupport = 'loading' in HTMLImageElement.prototype;
  }


  handleRadioButton = (event) => {
    this.setState({
      mode: event.target.value
    })
  }


  render() {
    const { mode } = this.state;
    return (
      <div >
        <div>
          <div>Using Intersection Observer <input checked={mode === "intersectionObserver"} type="radio" name="age" value="intersectionObserver" onChange={this.handleRadioButton} /></div>
          <div>Using Chrome Native Support<input checked={mode === "nativeChromeSupport"} type="radio" name="age" value="nativeChromeSupport" onChange={this.handleRadioButton} /></div>
          <div>None<input checked={mode === "none"} type="radio" name="age" value="none" onChange={this.handleRadioButton} /></div>
        </div>
        {this.state.mode === "intersectionObserver" && images.map((src) => <ImageIO key={src} src={src} />)}
        {this.state.mode === "nativeChromeSupport" && (this.isNativeSupport ? images.map((src) => <ImageNative key={src} src={src} />) :
          <div>
            <h1 style={{ color: "red" }}>Lazy load support is disabled for you browser</h1>
            <p>To Enable it goto chrome://flags/</p>
          </div>)}

        {this.state.mode === "none" && images.map((src) => <ImageNone key={src} src={src} />)}
      </div >
    );
  }
}

export default App;
