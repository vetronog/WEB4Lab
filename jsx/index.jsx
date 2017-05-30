let App = React.createClass ({
   render: function() {
      return (
         <div className="wraper">
            <div className="form">
                <Form/>
                <Canvas/>
            </div>
         </div>
      );
   }
});
let Form = React.createClass ({
    render: function() {
        return (
        <div>
            <form className="settings" id="settings-form">
                <div className="form-item">
                    <label>Choose the figure
                        <select id="current-shape">
                            <option value="circle">Circle</option>
                            <option value="triangle">Triangle</option>
                            <option value="rectangle">Rectangle</option>
                        </select>
                    </label>
                </div>
                <div className="form-item">
                    <label>HEX Fill Color
                        <input type="text" id="shape-fill-color" />
                    </label>
                    <label>HEX Border Color
                        <input type="text" id="shape-border-color" />
                    </label>
                </div>
                <div className="form-item">
                    <div className="circle-settings" id="circle-block">
                        <label>Radius
                            <input type="text" id="radius" />
                        </label>
                        <label>Set X Coordinate
                            <input type="text" id="circleX" />
                        </label>
                        <label>Set Y Coordinate
                            <input type="text" id="circleY" />
                        </label>
                    </div>
                    <div className="triangle-settings" id="triangle-block">
                        <div className="point">
                            <label>X1
                                <input type="text" id="triangleX1" />
                            </label>
                            <label>Y1
                                <input type="text" id="triangleY1" />
                            </label>
                        </div>
                        <div className="point">
                            <label>X2
                                <input type="text" id="triangleX2" />
                            </label>
                            <label>Y2
                                <input type="text" id="triangleY2" />
                            </label>
                        </div>
                        <div className="point">
                            <label>X3
                                <input type="text" id="triangleX3" />
                            </label>
                            <label>Y3
                                <input type="text" id="triangleY3" />
                            </label>
                        </div>
                    </div>
                    <div className="rectangle-settings" id="rectangle-block">
                        <div className="point">
                            <label>X1
                                <input type="text" id="rectangleX1" />
                            </label>
                            <label>Y1
                                <input type="text" id="rectangleY1" />
                            </label>
                        </div>
                        <div className="point">
                            <label>X2
                                <input type="text" id="rectangleX2" />
                            </label>
                            <label>Y2
                                <input type="text" id="rectangleY2" />
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )}
})
let Canvas = React.createClass ({
    render: function() {
        return (
        <div className="canvas">
            <canvas id="holst" height="400" width="400">
            
            </canvas>
        </div>
        )}
})
ReactDOM.render(<App/>, document.getElementById('wrapper'));