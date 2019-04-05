import { createSelector } from 'reselect'

export const homeSlc = state => state.home

export const projectsSlc = createSelector(
  homeSlc,
  home => home.projects
)

export const loadingSlc = createSelector(
  homeSlc,
  home => home.loading
)

export const errorSlc = createSelector(
  homeSlc,
  home => home.loading
)

export const webProjectsSlc = createSelector(
  projectsSlc,
  projects => projects.filter(p => p.type === 'website')
)

export const otherProjectsSlc = createSelector(
  projectsSlc,
  projects => projects.filter(p => p.type === 'other')
)
