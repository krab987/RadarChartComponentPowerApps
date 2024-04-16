import * as React from 'react';
import { Label } from '@fluentui/react';
import Plot from "react-plotly.js";
import {Data, Layout, Plots} from "plotly.js";
import "./styles.css"

export interface IHelloWorldProps {
  data?: any;
  layout?: any;
  config?: any;
}

export class HelloWorld extends React.Component<IHelloWorldProps> {
  public render(): React.ReactNode {
    return (
        <Plot data={this.props.data} layout={this.props.layout} config={this.props.config} className="main"/>
    )
  }
}
