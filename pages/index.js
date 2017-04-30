import * as React from 'react';
import stylesheet from '../node_modules/antd/dist/antd.css'

import { Button, Radio, Icon } from 'antd';

class ButtonSize extends React.Component {
  state = {
    size: 'default',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const size = this.state.size;
    return (
      <div>

        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

        <Radio.Group value={size} onChange={this.handleSizeChange}>
          <Radio.Button value="large">Large</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
        <br /><br />
        <Button type="primary" shape="circle" icon="download" size={size} />
        <Button type="primary" icon="download" size={size}>Download</Button>
        <Button type="primary" size={size}>Normal</Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            <Icon type="left" />Backward
          </Button>
          <Button type="primary">
            Forward<Icon type="right" />
          </Button>
        </Button.Group>
      </div>
    );
  }
}

export default class Home extends React.Component {
  render() {
    return <div>
      <h1>Hi!</h1>
      <ButtonSize />
    </div>;
  }
}
