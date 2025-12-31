//This array is where we store the info we want to change
const courseList = [
    {course: 'Adverse Childhood experiences', yearsValid: 4},
]

//First we find the training section and all the rows in the training table
const FormHeaderLabelDivs = Array.from(document.querySelectorAll('.FormHeaderLabel'))
if (FormHeaderLabelDivs.length > 0) {
    const trainingHeading = FormHeaderLabelDivs.find((element) => element.innerText == 'Training')

    //Then we start looping through courseList with an interval
    let i = 0
    const courseInterval = setInterval(async ()=>{
        let trainingTableRows = Array.from(trainingHeading.closest('.FormHeader').querySelector('.SummaryTable').querySelectorAll('.SubformSummaryItem')) //You must requery this or it might not find it, this gave me a headache.    

        //Then loop through the training table, 
        const foundRow = trainingTableRows.find((row, index) =>{
            const rowCourseTitle = row.querySelector('.SummaryTableCell .SummaryTableCellInner')
            return rowCourseTitle.innerText.includes(courseList[i].course)
        })

        //If a course matches the course in courseList, click on it.
        if (foundRow) {
            const rowCourseTitle = foundRow.querySelector('.SummaryTableCell .SummaryTableCellInner')
            console.log('Found and clicking: ',rowCourseTitle)
            rowCourseTitle.click()
            
            //Give the course section time to expand, then click on the most recent row in the training history section
            await waitABit()
            const trainingHistorySection = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart')
            const mostRecentCourseElement = trainingHistorySection.querySelector('.SummaryTable .SubformSummaryItem .DeleteSubformButtonCell')?.nextElementSibling
            console.log('Clicking: ', mostRecentCourseElement)
            mostRecentCourseElement?.click()
    
            //Get the completion date of the training, then amend the expiry date input based on yearsValid
            await waitABit()
            const courseCompletionDate = document.querySelector('#Field-355').value
            const newCourseExpiryDate = `${courseCompletionDate.substring(0, 6)}${(parseInt(courseCompletionDate.substring(6, 10)) + courseList[i].yearsValid)}`
            const courseExpiryInput = document.querySelector('#Field-315')
            courseExpiryInput.value = newCourseExpiryDate
            courseExpiryInput.dispatchEvent(new Event('input', { bubbles: true }))
            courseExpiryInput.dispatchEvent(new Event('change', { bubbles: true }))
            console.log(`The completion date is: ${courseCompletionDate}, so i've made the expiry date: ${newCourseExpiryDate}`)
    
            //Then move on to the next row
            i++
            if (i >= courseList.length) {
                console.log('Clearing interval')
                clearInterval(courseInterval)
            }
            
        } else{
            //If the course isn't in the training table, click the add button
            console.log('Could not find' + courseList[i].course)
            const addButton = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training').closest('.FormHeader').querySelector('.AddSubform')
            addButton.click() 

            //Give the section time to expand, then click on the course drop down
            await waitABit()
            const courseSelectDropDown =  Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart').querySelector('.selectize-input')
            courseSelectDropDown.click()

            //Then click on the option for the current course in courseList if it can be found.
            const trainingHistorySection = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart')
            const dropDownCourseOptions = Array.from(trainingHistorySection.querySelectorAll('.selectize-dropdown-content div'))
            dropDownCourseOptions.forEach((option)=>{
            
                if (option.textContent.includes(trainingCheckBoxArray[i])) {
                    console.log(`${option.textContent} equals ${trainingCheckBoxArray[i]}, clicking option now <----------------------------------------------------------------------------------------------------------->`)
                    option.click()

                    //Give the training history section time to expand and then click the add button
                    setTimeout(()=>{
                        const trainingHistorySection = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart') 
                        const addTrainingHistoryButton = trainingHistorySection.querySelector('.AddSubform')
                        addTrainingHistoryButton.click()
                        
                        setTimeout(()=>{
                            //Insert the values
                            const completionDateInput = document.querySelector('#Field-355')
                            completionDateInput.value = '01/01/2000'
                            completionDateInput.dispatchEvent(new Event('input', { bubbles: true }))
                            completionDateInput.dispatchEvent(new Event('change', { bubbles: true }))

                            const expiryDateInput = document.querySelector('#Field-315')
                            expiryDateInput.value = '01/01/2001'
                            expiryDateInput.dispatchEvent(new Event('input', { bubbles: true }))
                            expiryDateInput.dispatchEvent(new Event('change', { bubbles: true }))

                            const courseFrequencyInput = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart').querySelector('.number-field input')
                            courseFrequencyInput.value = courseList[i].yearsValid
                            courseFrequencyInput.dispatchEvent(new Event('change', { bubbles: true }))

                            //Then move on to the next row
                            i++
                            if (i >= courseList.length) {
                                console.log('Clearing interval')
                                clearInterval(courseInterval)
                            }
                        }, 200)
                    }, 500)
                }
            })

            
        }
        
    
    }, 2000)

}


function waitABit() {
    return new Promise(resolve => setTimeout(resolve, 600));
}

