import { describe, it, expect } from 'vitest'
import {
  getSocialLinkByIcon,
  projects,
  featuredProjects,
  projectCategories,
  loadProject,
  loadProjectBody,
} from '../src/data/content'

describe('content utilities', () => {
  it('returns social link by icon', () => {
    const link = getSocialLinkByIcon('github')
    expect(link).toBeTruthy()
    // The GitHub entry exists in src/content/settings/main.json
    expect(link?.platform).toBe('GitHub')
    expect(link?.url).toBe('https://github.com/Olayiwola72')
    expect(link?.icon).toBe('github')
  })

  it('returns undefined for unknown icon', () => {
    const link = getSocialLinkByIcon('nonexistent')
    expect(link).toBeUndefined()
  })

  it('projects are sorted by pubDate descending', () => {
    // Based on masonry of src/content/projects/main.json
    expect(projects.length).toBeGreaterThanOrEqual(1)
    // First project's slug should be raft-consensus-visualizer as per data order
    expect(projects[0].slug).toBe('raft-consensus-visualizer')
  })

  it('featuredProjects are filtered and ordered by order', () => {
    expect(featuredProjects.length).toBeGreaterThanOrEqual(1)
    expect(featuredProjects[0].slug).toBe('raft-consensus-visualizer')
  })

  it('projectCategories contains All and unique categories', () => {
    expect(projectCategories[0]).toBe('All')
    // Should include the two known categories
    expect(projectCategories).toContain('Distributed Systems')
    expect(projectCategories).toContain('Backend Systems')
  })

  it('loadProject loads raft-consensus-visualizer with body', async () => {
    const proj = await loadProject('raft-consensus-visualizer')
    expect(proj.slug).toBe('raft-consensus-visualizer')
    expect(proj.title).toBe('Raft Consensus Visualizer')
    expect(typeof proj.body).toBe('string')
    expect(proj.body).toContain('Overview')
    expect(proj.body).toContain('Raft can feel abstract')
  })

  it('loadProject unknown slug rejects', async () => {
    await expect(loadProject('nonexistent')).rejects.toThrow()
  })

  it('loadProjectBody loads raft-consensus-visualizer body contains sections', async () => {
    const body = await loadProjectBody('raft-consensus-visualizer')
    expect(typeof body).toBe('string')
    expect(body).toContain('Overview')
    expect(body).toContain('Raft can feel abstract')
  })
})
