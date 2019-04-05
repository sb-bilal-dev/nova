import React, { Component } from 'react'
import { connect } from 'react-redux'

import './style.css'
import Header from '../../components/Header'
import Projects from '../../components/Projects'

import * as homeActions from './actions'
import { PROJ_TYPES, HOME_GET_PROJECT_INTERVAL } from './constants'

import SelectInput from '../../components/SelectInput'
import { createStructuredSelector } from 'reselect'
import {
  loadingSlc,
  errorSlc,
  webProjectsSlc,
  otherProjectsSlc
} from './selectors'

class Home extends Component {
  fetchProjectInterval

  state = {
    projType: PROJ_TYPES[0].value
  }

  handleProjTypeChange = (event) => {
    this.setState({ projType: event.target.value })
  }

  componentDidMount () {
    this.props.fetchProjects()
    this.fetchProjectInterval = setInterval(this.props.fetchProjects, HOME_GET_PROJECT_INTERVAL, [true])
  }

  componentWillUnmount () {
    clearInterval(this.fetchProjectInterval)
  }

  showProjects = () => {
    const {
      webProjects,
      otherProjects
    } = this.props

    switch (this.state.projType) {
      case PROJ_TYPES[0].value:
        return webProjects
      case PROJ_TYPES[1].value:
        return otherProjects
      default:
        return []
    }
  }

  render () {
    const {
      loading,
      error,
      setComment
    } = this.props

    return (
      <div className="Home">
        <Header />
        <div className="Home__main">
          <div className="Home__main__buttons">
            <SelectInput
              value={this.state.projType}
              handleChange={this.handleProjTypeChange}
              options={PROJ_TYPES}
            />
          </div>
          <Projects
            projects={this.showProjects()}
            loading={loading}
            error={error}
            droppableId={this.state.projType}
            setComment={setComment}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  loading: loadingSlc,
  error: errorSlc,
  webProjects: webProjectsSlc,
  otherProjects: otherProjectsSlc
})

export default connect(
  mapStateToProps,
  homeActions
)(Home)
