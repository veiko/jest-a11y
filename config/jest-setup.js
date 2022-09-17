require('@testing-library/jest-dom')
require('../src/extend-expect')

const { configure } = require('@testing-library/react')

configure({ throwSuggestions: true })
