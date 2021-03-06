import React, {Component, PropTypes} from 'react'
import RadioButton, {RadioButtonGroup} from 'material-ui/RadioButton'

export default class ProficiencyRating extends Component {

  static propTypes = {
    onChange: PropTypes.func,
    readOnly: PropTypes.bool,
    itemStyle: PropTypes.object,
    values: PropTypes.object,
    style: PropTypes.object,
    value: PropTypes.string
  }

  static defaultProps = {
    values: {
      1: 'Einige Wörter',
      2: 'Einige Sätze',
      3: 'Fähig, ein fließendes Gespräch über einfache Themen zu führen',
      4: 'Fähig, ein Gespräch über komplexe Themen zu führen',
      5: 'Deutsch-Profi'
    }
  }

  handleChange = (e) => {
    if (this.props.onChange) { this.props.onChange(e) }
  }

  render () {
    if (this.props.readOnly) {
      return <div style={this.props.itemStyle}>{this.props.values[this.props.value] || 'N/A'}</div>
    }

    const itemStyle = this.props.itemStyle || {margin: '4px 0'}

    return (
      <RadioButtonGroup style={this.props.style} name='shipSpeed' valueSelected={this.props.value} onChange={this.handleChange}>
        {Object.keys(this.props.values).map((key) =>
          <RadioButton key={key} style={itemStyle} value={key} label={this.props.values[key]} />
        )}
      </RadioButtonGroup>
    )
  }
}
