import React, {Component} from 'react'
import ExampleSection from '../../ExampleSection'
import scope from '../../ExampleScope'

const examples = {
  'Lipsum': require('raw!../../examples/Lipsum.js.example')
}

export default class LipsumExamplePage extends Component {
  render() {
    return <div className="rev-Row rev-Row--collapsed">
      <ExampleSection title="Lipsum" examples={examples} depth={1} scope={scope} />
    </div>
  }
}
