import React, { Component } from 'react'

const mainConceptsExamples = (
    <fieldset>
        <legend>Main Concepts Examples</legend>
        <a target="_blank" href="./MainConcepts/01.HelloWorld.html">
            01. Hello World
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/02.IntroducingJSX.html">
            02. Introducing JSX
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/03.RenderingElements.html">
            03. Rendering Elements
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/04.ComponentsAndProps.html">
            04. Components and Props
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/05.StateAndLifecycleClock.html">
            05. State and Lifecycle - Clock
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/06.HandlingEventsToggle.html">
            06. Handling Events Toggle
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/07.ConditionalRendering.html">
            07. Conditional Rendering
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/08.ListAndKeysBlog.html">
            08. List and Keys - Blog
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/08.ListAndKeysNumbers.html">
            08. List and Keys - Numbers
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/09.FormsMultipleInputs.html">
            09. Forms Multiple Inputs
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/09.FormsSelect.html">
            09. Forms - Select
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/10.LiftingStateUp.html">
            10. Lifting State Up
        </a>
        <br />
        <a
            target="_blank"
            href="./MainConcepts/11.CompositionVsInheritance.html"
        >
            11. Composition vs Inheritance
        </a>
        <br />
        <a target="_blank" href="./MainConcepts/12.ThinkingInReact.html">
            12. Thinking in React
        </a>
        <br />
    </fieldset>
)

const reactRouterExamples = (
    <fieldset>
        <legend>React Router Examples</legend>
        <a target="_blank" href="./ReactRouter/Basics.html">
            Basics
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/URLParameters.html">
            URL Parameters
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/Redirects.html">
            Redirects
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/CustomLink.html">
            Custom Link
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/PreventingTransitions.html">
            Preventing Transitions
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/NoMatch.html">
            No Match
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/Recursive.html">
            Recursive
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/Sidebar.html">
            Sidebar
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/AnimatedTransitions.html">
            Animated Transitions
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/AmbiguousMatches.html">
            Ambiguous Matches
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/RouteConfig.html">
            Route Config
        </a>
        <br />
        <a target="_blank" href="./ReactRouter/ModalGallery.html">
            Modal Gallery
        </a>
        <br />
    </fieldset>
)

const samples = (
    <fieldset>
        <legend>Samples</legend>
        <a target="_blank" href="./Samples/LikeButton.html">
            Like button
        </a>
        <br />
        <a target="_blank" href="./Samples/TicTacToe.html">
            Tic Tac Toe game
        </a>
        <br />
        <a target="_blank" href="./Samples/FormRegistrationValidation.html">
            Form Registration Validation
        </a>
        <br />
        <a target="_blank" href="./Samples/SimpleFetch.html">
            Simple Fetch
        </a>
        <br />
        <a target="_blank" href="./Samples/SimpleAxios.html">
            Simple Axios
        </a>
        <br />
    </fieldset>
)

class SamplePageNav extends Component {
    render() {
        return (
            <div>
                <p>
                    The following examples are opened in a new window, view
                    source to check how it is implemented.
                </p>
                {mainConceptsExamples}
                {reactRouterExamples}
                {samples}
            </div>
        )
    }
}

export default SamplePageNav
