import React, { Component } from 'react'
import ErrorBoundaryChild from './ErrorBoundaryChild'
import ErrorBoundaryCLass from './ErrorBoundaryCLass'

class ErrorBoundaryParent extends Component {
    render() {
        return (
            <div>
                <ErrorBoundaryCLass>
                    <ErrorBoundaryChild heroName="Vishwas" />
                </ErrorBoundaryCLass>
                <ErrorBoundaryCLass>
                    <ErrorBoundaryChild heroName="Keerthi" />
                </ErrorBoundaryCLass>
                <ErrorBoundaryCLass>
                    <ErrorBoundaryChild heroName="Krishna" />
                </ErrorBoundaryCLass>

            </div>
        )
    }
}

export default ErrorBoundaryParent
