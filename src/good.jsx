import styled from 'react-emotion'
import React, { PureComponent } from 'react'
import {
  injectIntl
} from 'react-intl'

export default class Good extends PureComponent {
  render () {
    return (<StyledGood></StyledGood>)
  }
}

export const StyledGood = styled.div`
  margin-top: 10px
  margin-bottom: 20px;
`
