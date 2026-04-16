// Wait a moment for the page to settle
window.addEventListener('load', () => {
    chrome.runtime.sendMessage({ action: "GET_DATA" }, (data) => {
        if (data) {

            //If the DBS website is on the organisation form, fill in the form inputs, click continue, then call the enterDBSDetails with Chrome storage. 
            const organisationInput = document.querySelector("input[name='organisationName']")
            if (organisationInput) {
                const forenameInput = document.querySelector("input[name='forename']")
                const surnameInput = document.querySelector("input[name='surname']")
                const continueButton = document.querySelector("input[name='_eventId_submit']")
                organisationInput.value = 'Elborough Care Services'
                forenameInput.value = data.userName
                surnameInput.value = data.userSurname
                // Persist data so we can fill the next page after navigation
                chrome.storage.local.set({ fillNextDBS: true, dbsData: data }, () => {
                    continueButton.click()
                })
            }
        }

        // If the current page didn't receive data via runtime message (because we navigated),
        // check storage for persisted DBS data and run the filler.
        if (!data) {
            chrome.storage.local.get(['fillNextDBS', 'dbsData', 'dbsComplete'], (res) => {

                //If we are on the enter cert number page run enterDBSDetails(), if we are on the finish page, add the stamp
                if (res && res.fillNextDBS && res.dbsData) {
                    enterDBSDetails(res.dbsData)
                    chrome.storage.local.remove(['fillNextDBS'])
                } else if(res && res.dbsComplete){
                    chrome.storage.local.remove(['dbsComplete', 'dbsData'])
                    addSeenAndVerifiedStamp(res.dbsData.userName, res.dbsData.userSurname)
                }

            })
        }

        //If it's on the status check page, fill in the DBS details and click continue
        function enterDBSDetails(data) {
            setTimeout(() => {
                const certificateNumberInput = document.querySelector("input[name='certificateNumber']")

                if (certificateNumberInput) {
                    const surnameInput = document.querySelector("input[name='surname']")
                    const dayOfBirthInput = document.querySelector("input[name='dayOfBirth']")
                    const monthOfBirthInput = document.querySelector("input[name='monthOfBirth']")
                    const yearOfBirthInput = document.querySelector("input[name='yearOfBirth']")
                    const continueButton = document.querySelector("#jsSubmit")

                    certificateNumberInput.value = data.dbsNumber
                    surnameInput.value = data.surname
                    dayOfBirthInput.value = data.DOB[0]
                    monthOfBirthInput.value = data.DOB[1]
                    yearOfBirthInput.value = data.DOB[2]
                    continueButton.click()

                    setTimeout(() => {
                        const declarationCheckbox = document.querySelector("input[name='hasAgreedTermsAndConditions']")
                        declarationCheckbox.click()
                        const declarationContinueButton = document.querySelector('.terms-and-conditions').querySelector("input[name='_eventId_submit']")

                        chrome.storage.local.set({ dbsComplete: true, dbsData: data }, () => {
                            declarationContinueButton.click()
                        })
    
                    }, 500)
                }

            }, 500)
        }
    })
})

function addSeenAndVerifiedStamp(userName, userSurname) {

    function formatDateTime() {
        const now = new Date();
        
        // Get hours and minutes
        let hours = now.getHours();
        const minutes = now.getMinutes();
        
        // Determine AM/PM
        const ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        
        // Format minutes to always be two digits
        const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
        
        // Get month, day, and year
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[now.getMonth()];
        const day = now.getDate();
        const year = now.getFullYear();
        
        // Combine into desired format
        const formattedDateTime = `${hours}:${formattedMinutes} ${ampm}, ${month} ${day}, ${year}`;
        
        return formattedDateTime;
    }

    const stamp = `
        <style>
            .stamp {
                margin-top: 20px !important;
                border: 2px solid rgb(65, 106, 28) !important;
                border-radius: 10px !important;
                display: inline-block !important;
                padding: 8px 10px !important;
                background-image: linear-gradient(to right, rgb(65, 106, 28, 0.08), rgb(65, 106, 28, 0.2)) !important;
            }

            .stamp__heading {
                color: rgb(65, 106, 28) !important;
                margin: 0 !important;
                margin-bottom: 5px !important;
                font-family: sans-serif !important;
                font-weight: 700 !important;
                font-style: italic !important;
                font-size: 30px !important;
                text-align: left !important;
                line-height: 40px !important;
            }

            .stamp__text {
                color: rgb(65, 106, 28) !important;
                font-size: 22px !important;
                margin: 0 !important;
                font-family: sans-serif !important;
                font-weight: 600 !important;
                font-style: italic !important;
                text-align: left !important;
            }

        </style>
        
        <div class="stamp">
        <h1 class="stamp__heading">APPROVED</h1>
        <p class="stamp__text">By ${userName} ${userSurname} at ${formatDateTime()}</p>
        </div>
    `

    document.querySelector('body').insertAdjacentHTML('beforeend', stamp)
}