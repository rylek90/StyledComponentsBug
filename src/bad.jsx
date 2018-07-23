import styled from 'react-emotion'
import React, { PureComponent } from 'react'
import {
  injectIntl
} from 'react-intl'

@injectIntl
export default class Bad extends PureComponent {
  render () {
    return (<StyledBad></StyledBad>)
  }
}

export const StyledBad = styled.div`
  margin-top: 10px
  margin-bottom: 20px;
`
