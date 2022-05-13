const sectionComponent = function () {
    return `
    <div class="container">
        <h1>Password recovery</h1>
        <div class="content-box">
            <p class="security-describe">Please, write the answer of your security question into the following input
                field and press Enter. Your
                security question is:
            </p>
            <p class="security-question">
                What was your first pet's name?
            </p>
            <input type="text" placeholder="Write your first pet's name here...">
        </div>
    </div>
    <button>?</button>
    `
}


const loadEvent = function () {
    const rootElement = document.getElementById("root")

    rootElement.insertAdjacentHTML("beforeend", sectionComponent());
}

window.addEventListener("load", loadEvent)