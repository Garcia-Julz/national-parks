// Build an application that gets data about national parks from your json-server API and
//  displays the list of national parks on the DOM. Each national park should be formatted
//   in HTML like below:


// I must build an application that will display the JSON results on the DOM

// national parks should be displayed in the same html style that is shown below


const parkDisplay = () => {
    // This variable is = to this string of html
    const parkResults = `
    <article>
        <h3>Park Name</h3>
        <p>State the park in located in</p>
    </article>
    `
    // resultsContainer is = to the location where the id parkResults is
    const resultsContainer = document.querySelector("#park-results")
    resultsContainer.innerHTML = parkResults
    // console.log("parkResults", parkResults)
}

