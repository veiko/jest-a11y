require('ts-node/register')
require('@testing-library/jest-dom')

import 'extend-expect'

const { configure } = require('@testing-library/react')

configure({ throwSuggestions: true })
