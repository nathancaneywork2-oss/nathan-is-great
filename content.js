// Run the date colouring function whenever the user changes something.
const courseList = [
    {course: 'ADHD', yearsValid: 3},
    {course: 'Adverse Childhood experiences', yearsValid: 3},
    {course: 'Autism', yearsValid: 1},
    {course: 'Learning disabilities', yearsValid: 1},
    {course: 'Basic Life Support Adults', yearsValid: 1},
    {course: 'Basic Life Support Paediatrics', yearsValid: 1},
    {course: 'Bullying and Harrassment', yearsValid: 3},
    {course: 'ILS Adults (Practical)', yearsValid: 1},
    {course: 'ILS Paediatrics (Practical)', yearsValid: 1},
    {course: 'Care Certificate', yearsValid: 100},
    {course: 'Child sexual exploitation', yearsValid: 3},
    {course: 'Communication & Record Keeping', yearsValid: 3},
    {course: 'Complaints', yearsValid: 3},
    {course: 'Conflicts', yearsValid: 1},
    {course: 'COSHH', yearsValid: 3},
    {course: 'County Lines and knife crime', yearsValid: 3},
    {course: 'Dementia ', yearsValid: 1},
    {course: 'Diabetes', yearsValid: 1},
    {course: 'Diet & Nutrition', yearsValid: 3},
    {course: 'Dignity, privacy and respect', yearsValid: 1},
    {course: 'Duty of candour', yearsValid: 3},
    {course: 'Epilepsy', yearsValid: 3},
    {course: 'Equality and diversity', yearsValid: 1},
    {course: 'Fire Safety', yearsValid: 3},
    {course: 'First aid adults', yearsValid: 3},
    {course: 'First aid Paediatrics', yearsValid: 3},
    {course: 'Food hygiene', yearsValid: 3},
    {course: 'GDPR', yearsValid: 3},
    {course: 'Health and safety', yearsValid: 3},
    {course: 'IG & Data Security', yearsValid: 3},
    {course: 'Infection control', yearsValid: 1},
    {course: 'Ligature Awareness ', yearsValid: 3},
    {course: 'Lone Working', yearsValid: 3},
    {course: 'Managing People ', yearsValid: 3},
    {course: 'Mental Capacity Act', yearsValid: 1},
    {course: 'Deprivation of Liberty Safeguards', yearsValid: 1},
    {course: 'Medication Online', yearsValid: 3},
    {course: 'Medication Advanced', yearsValid: 3},
    {course: 'Medication (practical)', yearsValid: 3},
    {course: 'Mental health', yearsValid: 3},
    {course: 'Moving and Handling (Practical)', yearsValid: 3},
    {course: 'Oral Health', yearsValid: 3},
    {course: 'End of life', yearsValid: 3},
    {course: 'Person centered care', yearsValid: 3},
    {course: 'PEG ', yearsValid: 3},
    {course: 'Pressure area care', yearsValid: 3},
    {course: 'Positive Behaviour Support', yearsValid: 3},
    {course: 'PMVA (Practical)', yearsValid: 1},
    {course: 'Pressure area care', yearsValid: 1},
    {course: 'Preventing Radicalization', yearsValid: 3},
    {course: 'Safeguarding Adults Level 2', yearsValid: 3},
    {course: 'Safeguarding Children Level 2', yearsValid: 3},
    {course: 'Safeguarding  Adults Level 3', yearsValid: 3},
    {course: 'Safeguarding Children Level 3', yearsValid: 3},
    {course: 'Substance Misuse', yearsValid: 3},
    {course: 'Verification of Death', yearsValid: 3},
    {course: 'Whistle Blowing', yearsValid: 3},
]

const officeCourseList = [
    {course: 'Autism', yearsValid: 3},
    {course: 'Learning disabilities', yearsValid: 3},
    {course: 'Complaints', yearsValid: 3},
    {course: 'Dignity, privacy and respect', yearsValid: 1},
    {course: 'Display Screen Equipment', yearsValid: 1},
    {course: 'Equality and diversity', yearsValid: 1},
    {course: 'Fire Safety', yearsValid: 1},
    {course: 'First aid adults', yearsValid: 1},
    {course: 'Food hygiene', yearsValid: 3},
    {course: 'GDPR', yearsValid: 3},
    {course: 'Health and safety', yearsValid: 3},
    {course: 'IG & Data Security', yearsValid: 1},
    {course: 'Infection control', yearsValid: 1},
    {course: 'Mental health', yearsValid: 3},
    {course: 'Safeguarding  Adults Level 3', yearsValid: 3},
    {course: 'Safeguarding Children Level 3', yearsValid: 3},
    {course: 'Whistle Blowing', yearsValid: 3},
]

const flexebeeTrainingListBeforeCompliant = [
    {course: 'Autism', yearsValid: 1},
    {course: 'Conflicts', yearsValid: 1},
    {course: 'Dignity, privacy and respect', yearsValid: 1},
    {course: 'Equality and diversity', yearsValid: 1},
    {course: 'Fire Safety', yearsValid: 3},
    {course: 'Health and safety', yearsValid: 3},
    {course: 'Infection control', yearsValid: 1},
    {course: 'Learning disabilities', yearsValid: 1},
    {course: 'Mental Capacity Act', yearsValid: 1},
    {course: 'Deprivation of Liberty Safeguards', yearsValid: 1},
    {course: 'Safeguarding  Adults Level 3', yearsValid: 3},
    {course: 'Safeguarding Children Level 3', yearsValid: 3},
]

const practicalTrainingListBeforeCompliant = [
    {course: 'Basic Life Support Adults', yearsValid: 1},
    {course: 'Basic Life Support Paediatrics', yearsValid: 1},
    {course: 'PMVA (Practical)', yearsValid: 1},
]

//Support Workers mandatory within 6 month list
const swMandatoryWithin6MonthFlexebee = [
    {course: 'ADHD', yearsValid: 3},
    {course: 'Adverse Childhood experiences', yearsValid: 3},
    {course: 'Child sexual exploitation', yearsValid: 3},
    {course: 'Communication & Record Keeping', yearsValid: 3},
    {course: 'Complaints', yearsValid: 3},
    {course: 'COSHH', yearsValid: 3},
    {course: 'County Lines and knife crime', yearsValid: 3},
    {course: 'Duty of candour', yearsValid: 3},
    {course: 'Epilepsy', yearsValid: 3},
    {course: 'Food hygiene', yearsValid: 3},
    {course: 'GDPR', yearsValid: 3},
    {course: 'IG & Data Security', yearsValid: 3},
    {course: 'Lone Working', yearsValid: 3},
    {course: 'Medication Online', yearsValid: 3},
    {course: 'Mental health', yearsValid: 3},
    {course: 'Positive Behaviour Support', yearsValid: 3},
    {course: 'Preventing Radicalization', yearsValid: 3},
    {course: 'Safeguarding  Adults Level 3', yearsValid: 3},
    {course: 'Safeguarding Children Level 3', yearsValid: 3},
    {course: 'Substance Misuse', yearsValid: 3},
    {course: 'Whistle Blowing', yearsValid: 3},
]

const swMandatoryWithin6MonthPractical = [
    {course: 'Moving and Handling (Practical)', yearsValid: 3},
]


document.addEventListener("click", (e) => {
  setTimeout(() => {
    dateFormat()
    addMandatoryTrainingButton()
    checkAndAddTrainingCopyButtons()
    checkAndAddTrainingMessageButtons()
  }, 100)
})

document.addEventListener("change", () => {
  setTimeout(() => {
    dateFormat()
  }, 100)
})

document.addEventListener("input", () => {
  setTimeout(() => {
    dateFormat()
  }, 100)
})

// Run all my lovely functions when the page first loads, but them it 8.5 seconds to load.
setTimeout(() => {
    addSchedule2ReportButton()
    addCheckRecButton()
    addDownloadS2StuffButton()
    dateFormat()
    addMandatoryTrainingButton()
    checkAndAddTrainingCopyButtons()
    checkAndAddTrainingMessageButtons()
    addCheckDBSButton()

    //Head office staff have different expiry dates for some courses so we check for that. 
    const branchText = Array.from(document.querySelectorAll('SPAN')).find((span) => span.textContent == 'Branch')
    let branch = null
    if (branchText) {
        branch = branchText.closest('.control-group').querySelector('.selectize-input').querySelector('DIV')
    }

    // When the user enters a training start date, the expiry date should be automatically added to the date next due box.
    document.addEventListener('input', (e)=> {
        if(e.target.id == 'Field-355'){
            let expiryYears = 1
            const inputCourseTitle = document.querySelector('#Field-355')?.closest('.FormPart')?.parentElement.parentElement.parentElement.querySelector('.item')?.textContent
            let knownCourse
            if (branch && branch.textContent == 'Head Office ') {
                knownCourse = officeCourseList.find(element => element.course == inputCourseTitle)
            } else{
                knownCourse = courseList.find(element => element.course == inputCourseTitle)
            }
            if (knownCourse) {
                expiryYears = knownCourse.yearsValid
            }


            const trainingDateInput = e.target
            const trainingExpireInput = document.querySelector('#Field-315')

        //If the user has entered a complete date
            if(trainingDateInput.value.length == 10){
                //Get the last character of the date and add 1 to it 
                let expiryDateYear = parseInt(trainingDateInput.value.substring(6, 10)) + expiryYears
                let expiryDate = trainingDateInput.value.slice(0, 6) + expiryDateYear

                //This becomes the expiry date
                trainingExpireInput.value = expiryDate

                // Trigger an input event to simulate user typing
                trainingExpireInput.dispatchEvent(new Event('input', { bubbles: true }))
                trainingExpireInput.dispatchEvent(new Event('change', { bubbles: true }))
            }
        }

        // When the user enters a badge received date, the expiry date should be automatically added to the expiry date input.
        else if(e.target.id == 'Field-259'){
        const badgeDateInput = e.target
        const badgeExpireInput = document.querySelector('#Field-260')
        
        //If the user has entered a complete date
        if(badgeDateInput.value.length == 10){
            //Get the last character of the date and add 1 to it 
            let expiryDateYear = parseInt(badgeDateInput.value.substring(6, 10)) + 3
            let expiryDate = badgeDateInput.value.slice(0, 6) + expiryDateYear

            //This becomes the expiry date
            badgeExpireInput.value = expiryDate

            // Trigger an input event to simulate user typing
            badgeExpireInput.dispatchEvent(new Event('input', { bubbles: true }))
            badgeExpireInput.dispatchEvent(new Event('change', { bubbles: true }))
        }
        }
    })

    //When the user clicks add in the contact log section, the default communication option should be WhatsApp
    let allElements = Array.from(document.querySelectorAll('div'))
    const contactLogText = allElements.find((element) => element.textContent == 'Contact Log')
    if (contactLogText) {
        const addButton = contactLogText.closest('.FormHeader').querySelector('.AddSubform')

        addButton.addEventListener('click', (e) => {
            setTimeout(() => {
                const spans = Array.from(document.querySelectorAll('span'))
                const typeOfContactText = spans.find((element) => element.textContent == 'Type of Contact')
                if (typeOfContactText) {
                    const contactInput = typeOfContactText.closest('.control-group').querySelectorAll('input')[1] 
                    contactInput.click()
                    setTimeout(() => {
                        const option = Array.from(document.querySelectorAll('span')).find((element) => element.textContent == 'Type of Contact').closest('.control-group').querySelector('.selectize-dropdown-content').querySelectorAll('div')[4]
                        option.click()

                        setTimeout(()=> {
                            const textBox = Array.from(document.querySelectorAll('span')).find((element) => element.textContent == 'Notes/details of contact').closest('.control-group').querySelector('textarea')
                            textBox.focus()  
                        }, 10)
                        
                    }, 20)
                }
            }, 200)  
        })
    }

    //Change the first section into a two column view
    const sectionDivs = document.querySelectorAll('.section-field.FormPart')
    function changeToCompactLayout(section){
        const sectionDivs = section.querySelectorAll(':scope > div')
        sectionDivs.forEach((divElement)=>{
            divElement.classList.add('FormField2x')
        })
    }

    //Change the Id and proof of address sections into a two column view
    const divsArray = Array.from(document.querySelectorAll('div'))
    const idSectionSection = divsArray.find( (divElement) => divElement.innerText == 'Identification Documentation')
    if (idSectionSection) {
        const identificationDocumentationSection = idSectionSection.closest('.FormFieldNonMandatory')
        identificationDocumentationSection.classList.add('FormField2x')
        const poaDocumentationSection = divsArray.find( (divElement) => divElement.innerText == 'Proof of address Documentation').closest('.FormFieldNonMandatory')
        poaDocumentationSection.classList.add('FormField2x')
    }

}, 8500)

function dateFormat() {
  const dateCells = document.querySelectorAll(".SummaryTableCellInner")

  function isValidDate(dateString) {
    // Check if the date format is DD/MM/YYYY
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!regex.test(dateString)) return false;

    const [_, day, month, year] = dateString.match(regex);
    const date = new Date(`${year}-${month}-${day}`);

    // Check if the date is valid
    return (
      date &&
      date.getDate() == day &&
      date.getMonth() + 1 == month &&
      date.getFullYear() == year
    );
  }

  function expiresInDays(dateString) {
    // Parse the input date string (format: DD/MM/YYYY)
    const [day, month, year] = dateString.split("/").map(Number);
    const inputDate = new Date(year, month - 1, day);

    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for accurate comparison

    // Calculate the difference in days
    const diffTime = (inputDate - today) * -1;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);

    return diffDays * -1;
  }

  for (let i = 0; i < dateCells.length; i++) {
    let container = null;
    if (dateCells[i].parentElement.parentElement.parentElement.parentElement.parentElement != undefined) {
      container = dateCells[i].parentElement.parentElement.parentElement.parentElement.parentElement
    }

    const containerHeading = container.querySelector(".FormHeaderTitleBar .FormHeaderLabel")
    if (containerHeading.innerText != undefined) {
      if (
        containerHeading.innerText == "Training" ||
        containerHeading.innerText == "Drivers Documentation" ||
        containerHeading.innerText == "DBS" ||
        containerHeading.innerText == "Right to Work Documentation" ||
        containerHeading.innerText == "Identification Documentation"
      ) {
        if (isValidDate(dateCells[i].innerText)) {
          const testDate = dateCells[i].innerText;

          if (expiresInDays(testDate) > 30) {
            // Make green if it expires in more than 30 days
            if (i % 2 == 0) {
              // Colour the odd and even rows slightly different
              dateCells[i].parentElement.parentElement.style.backgroundColor =
                "rgb(146, 208, 80, 0.8)";
            } else {
              dateCells[i].parentElement.parentElement.style.backgroundColor =
                "rgb(146, 208, 80, 1)";
            }
          } else if (
            expiresInDays(testDate) <= 30 &&
            expiresInDays(testDate) > 0
          ) {
            // Make it yellow if it expires in less than 30 days, but more than 0.
            if (i % 2 == 0) {
              dateCells[i].parentElement.parentElement.style.backgroundColor =
                "rgb(255, 192, 0, 0.8)";
            } else {
              dateCells[i].parentElement.parentElement.style.backgroundColor =
                "rgb(255, 192, 0)";
            }
          } else {
            // Make it red if it's expired
            if (i % 2 == 0) {
              dateCells[i].parentElement.parentElement.style.backgroundColor =
                "rgb(255, 0, 0, 0.8)";
            } else {
              dateCells[i].parentElement.parentElement.style.backgroundColor =
                "rgb(255, 0, 0)";
            }
          }
        }
      }
    }
  }
}




function addMandatoryTrainingButton(){
    //Find the training section
    const FormHeaderLabelDivs = Array.from(document.querySelectorAll('.FormHeaderLabel'))
    if (FormHeaderLabelDivs.length > 0) {
        const trainingHeading = FormHeaderLabelDivs.find((element) => element.innerText == 'Training')
        if (trainingHeading) {
            
            //Find the training add button and then add another button next to it for adding multiple dropDownCourseOptions if it doesn't already exist. 
            const addTrainingButton = trainingHeading.closest('.FormHeader').querySelector('.AddSubform')

            if(!document.querySelector('.addMultipleCourses')){
                addTrainingButton.insertAdjacentHTML('afterend', `<button class="SmallButton AddSubform addMultipleCourses"><i class="fa fa-plus AddButtonIcon"></i>Add mandatory</button>`)     
            
                document.addEventListener('click', (e)=>{
                    //Bring up the new menu when the Add multiple button is clicked
                    if (e.target.classList.contains('addMultipleCourses')) {
                        document.body.insertAdjacentHTML('beforeend', `
                            <style>
                                :root{
                                    --size: 400px;
                                    --track-color: #eee;
                                    --fill-color: #3498db;
                                }

                                @property --progress {
                                    syntax: '<number>'; /* or <percentage> */
                                    inherits: false;
                                    initial-value: 0;
                                }

                                .training__background{
                                    z-index: 9999999;
                                    width: 100%;
                                    height: 100vh;
                                    background: rgba(0, 0, 0, 0.2);
                                    position: fixed;
                                    top: 0;
                                    left: 0;
                                }

                                .training__page {
                                    width: 700px;   
                                    height: 575px;
                                    overflow-y: scroll;
                                    scrollbar-width: none;
                                    margin: 130px auto;
                                    background: #fff;
                                    padding: 15px;
                                    border-radius: 5px;
                                    box-sizing: border-box;
                                    font-family: 'Calibri';
                                    color: #000;
                                    transition: all 1s;
                                }

                                .training__page.loading {
                                    position: relative;
                                    width: var(--size);
                                    height: var(--size);
                                    border-radius: 50%;
                                    background: conic-gradient(
                                        var(--fill-color) calc(var(--progress) * 1%),
                                        var(--track-color) 0
                                    );
                                    filter: drop-shadow(0 0 8px var(--fill-color));
                                    
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;

                                    transition: --progress 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                                }

                                .training__page.loading .inner {
                                    position: absolute;
                                    width: calc(var(--size) - 20px);
                                    height: calc(var(--size) - 20px);
                                    background: white;
                                    border-radius: 50%;
                                    transition: all 1s;
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    font-weight: bold;
                                    font-family: sans-serif;
                                    color: #333;
                                }

                                .training__inputsContainer{
                                    display: grid;
                                    grid-template-columns: 1fr 1fr 1fr 1fr;
                                    margin-top: 0px;
                                }

                                .training__inputDiv{
                                    margin-right: 25px;
                                }

                                .training__inputDiv input{
                                    width: 100%;
                                }
                                
                                .training__fileButton{
                                    background-color: rgba(255, 255, 255, 1) !important; 
                                    padding: 0 !important;
                                }

                                .training__selectsContainer{
                                    display: grid;
                                    grid-template-columns: 1fr 1fr 1fr;
                                    margin-top: 20px;
                                    margin-bottom: 20px;
                                    padding: 0px;
                                }

                                .training__selectDiv{
                                    display: flex;
                                    flex-direction: row;
                                    align-items: center;
                                    margin: 5px 5px; 
                                }

                                .training__selectDiv label{
                                    margin-bottom: 0; 
                                }

                                .goButton{
                                    width: 100%;
                                    padding:15px;
                                    border-radius: 0px;
                                    border: 1px solid black;
                                    background: rgba(255, 255, 255, 1);
                                    transition: all 0.25s ease;
                                }

                                .goButton:hover{
                                    background: rgba(93, 136, 216, 1);
                                    border: 1px solid rgba(93, 136, 216, 1);
                                    color: white;
                                }

                                .training__templateButtonContainer{
                                    height: 50px;
                                    display: flex;
                                    flex-direction: row;
                                    justify-content: space-between;
                                    align-items: center;
                                    margin-top: 20px;
                                }

                                .training__templateButton{
                                    height: 100%;
                                    width: 100px;
                                    border-radius: 0px;
                                    border: 1px solid black;
                                    background: rgba(255, 255, 255, 1);
                                    transition: all 0.25s ease;
                                    cursor: pointer;
                                }
                                
                                .training__templateButton:hover{
                                    background: rgba(93, 136, 216, 1);
                                    border: 1px solid rgba(93, 136, 216, 1);
                                    color: white;
                                }
                        
                            </style>

                            <div class="training__background">
                                <div class="training__page">
                                    <div class="training__inputsContainer">
                                        <div class="training__inputDiv">
                                            <span>Completion date </span>
                                            <input type="text" class="input-small completionDate" style="width: 100%;">                                
                                        </div>
                                        <div class="training__inputDiv">
                                            <span>Provider </span>
                                            <input type="text" class="input-small provider" style="width: 100%;">                                
                                        </div>
                                        <div class="training__inputDiv">
                                            <div>File upload </div>
                                            <input class="training__fileButton" type="file" name="files[]">
                                        </div>
                                    </div>

                                    <div class="training__templateButtonContainer">
                                        <button class="training__templateButton care-force">Care Force</button>
                                        <button class="training__templateButton catpj">CATPJ</button>
                                        <button class="training__templateButton HASG">H&SG</button>
                                        <button class="training__templateButton rg-reed">RG Reed</button>
                                        <button class="training__templateButton train-healthcare">Train Healthcare</button>
                                    </div>

                                    <div class="training__selectsContainer">
                                    
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="Autism" checked />
                                            <label for="Autism">Autism</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="bls" checked />
                                            <label for="bls">Basic Life Support Adults</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="pls" checked />
                                            <label for="pls">Basic Life Support Paediatrics</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="comm" checked />
                                            <label for="comm">Communication & Record Keeping</label>
                                        </div> 
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="Complaints" checked />
                                            <label for="Complaints">Complaints</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="Conflicts" checked />
                                            <label for="Conflicts">Conflicts</label>
                                        </div>                                   
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="COSHH" checked />
                                            <label for="COSHH">COSHH</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="dols" checked />
                                            <label for="dols">Deprivation of Liberty Safeguards</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="dpr" checked />
                                            <label for="dpr">Dignity, privacy and respect</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="dysphagia" checked />
                                            <label for="dysphagia">Dysphagia</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="Epilepsy" checked />
                                            <label for="Epilepsy">Epilepsy</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="ead" checked />
                                            <label for="ead">Equality and diversity</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="fire" checked />
                                            <label for="fire">Fire Safety</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="first-aid-adults" checked />
                                            <label for="first-aid-adults">First aid adults</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="first-aid-paediatrics" checked />
                                            <label for="first-aid-paediatrics">First aid Paediatrics</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="food" checked />
                                            <label for="food">Food hygiene</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="GDPR" checked />
                                            <label for="GDPR">GDPR</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="HASG" checked />
                                            <label for="HASG">Health and safety</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="Infection" checked />
                                            <label for="Infection">Infection control</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="IG" checked />
                                            <label for="IG">IG & Data Security</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="ld" checked />
                                            <label for="ld">Learning disabilities</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="lone" checked />
                                            <label for="lone">Lone Working</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="mca" checked />
                                            <label for="mca">Mental Capacity Act</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="mh" checked />
                                            <label for="mh">Mental health</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="mah" checked />
                                            <label for="mah">Moving and Handling (Practical)</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="prevent" checked />
                                            <label for="prevent">Preventing Radicalization</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="RIDDOR" checked />
                                            <label for="RIDDOR">RIDDOR</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="apl3" checked />
                                            <label for="apl3">Safeguarding  Adults Level 3</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="cpl3" checked />
                                            <label for="cpl3">Safeguarding Children Level 3</label>
                                        </div>
                                        <div class="training__selectDiv">
                                            <input type="checkbox" class="multi-training-checkbox" id="whistle" checked />
                                            <label for="whistle">Whistle Blowing</label>
                                        </div>
                                    </div>
                                    <button class="goButton">Lets go!!</button>
                                </div>
                            </div>
                            
                        `)
                    }

                    //Close the add mulitple courses menu when clicking outside of it.
                    else if(e.target.classList.contains('training__background')){
                        document.querySelector('.training__background').remove()
                        trainingCheckBoxArray = []
                        clearInterval(courseInterval)
                    }
                })

                //New add mulitple training menu click functionality
                document.addEventListener('click', (e)=>{
                    //Start adding multiple training when the lets go button is pressed
                    if (e.target.classList.contains('goButton')) {
                        const completionDateInput = document.querySelector('.completionDate').value
                        const expiryDateInput = document.querySelector('.completionDate').value
                        const providerInput = document.querySelector('.provider').value
                        
                        const checkboxes = document.querySelectorAll('.multi-training-checkbox')
                        checkboxes.forEach((checkbox)=>{
                            if (checkbox.checked) {
                                const courseName = checkbox.closest('.training__selectDiv').querySelector('label').textContent
                                trainingCheckBoxArray.push(courseName)
                            }
                        })

                        addMultipleTraining(completionDateInput, expiryDateInput, providerInput)
                        const trainingPage = document.querySelector('.training__page')
                        trainingPage.classList.add('loading')
                        trainingPage.innerHTML = `
                            <div class="inner">
                                <span>Remember Nathan is great</span>
                            </div>    
                        `
                    }

                    //Health and Safety Group button
                    else if(e.target.classList.contains('HASG')){
                        document.querySelector('.provider').value = 'The Health & Safety Group'
                        document.querySelector('#Autism').checked = true
                        document.querySelector('#bls').checked = true
                        document.querySelector('#pls').checked = true
                        document.querySelector('#Complaints').checked = true
                        document.querySelector('#comm').checked = false
                        document.querySelector('#Conflicts').checked = true
                        document.querySelector('#COSHH').checked = true
                        document.querySelector('#dols').checked = true
                        document.querySelector('#dpr').checked = true
                        document.querySelector('#dysphagia').checked = false
                        document.querySelector('#Epilepsy').checked = false
                        document.querySelector('#ead').checked = true
                        document.querySelector('#fire').checked = true
                        document.querySelector('#first-aid-adults').checked = true
                        document.querySelector('#first-aid-paediatrics').checked = true
                        document.querySelector('#food').checked = false
                        document.querySelector('#GDPR').checked = false
                        document.querySelector('#HASG').checked = true
                        document.querySelector('#Infection').checked = true
                        document.querySelector('#IG').checked = true
                        document.querySelector('#ld').checked = true
                        document.querySelector('#lone').checked = true
                        document.querySelector('#mca').checked = true
                        document.querySelector('#mh').checked = true
                        document.querySelector('#mah').checked = true
                        document.querySelector('#prevent').checked = true
                        document.querySelector('#RIDDOR').checked = true
                        document.querySelector('#apl3').checked = false
                        document.querySelector('#cpl3').checked = false
                        document.querySelector('#whistle').checked = true
                    }
                        
                    //Care Force button
                    else if(e.target.classList.contains('care-force')){
                        document.querySelector('.provider').value = 'Care Force'
                        document.querySelector('#Autism').checked = true
                        document.querySelector('#bls').checked = true
                        document.querySelector('#pls').checked = true
                        document.querySelector('#Complaints').checked = true
                        document.querySelector('#comm').checked = false
                        document.querySelector('#Conflicts').checked = true
                        document.querySelector('#COSHH').checked = true
                        document.querySelector('#dols').checked = true
                        document.querySelector('#dpr').checked = true
                        document.querySelector('#dysphagia').checked = true
                        document.querySelector('#Epilepsy').checked = true
                        document.querySelector('#ead').checked = true
                        document.querySelector('#fire').checked = true
                        document.querySelector('#first-aid-adults').checked = true
                        document.querySelector('#first-aid-paediatrics').checked = true
                        document.querySelector('#food').checked = true
                        document.querySelector('#GDPR').checked = true
                        document.querySelector('#HASG').checked = true
                        document.querySelector('#Infection').checked = true
                        document.querySelector('#IG').checked = true
                        document.querySelector('#ld').checked = true
                        document.querySelector('#lone').checked = true
                        document.querySelector('#mca').checked = true
                        document.querySelector('#mh').checked = true
                        document.querySelector('#mah').checked = true
                        document.querySelector('#prevent').checked = true
                        document.querySelector('#RIDDOR').checked = true
                        document.querySelector('#apl3').checked = true
                        document.querySelector('#cpl3').checked = true
                        document.querySelector('#whistle').checked = true
                    }

                    //CATPJ button
                    else if(e.target.classList.contains('catpj')){
                        document.querySelector('.provider').value = 'CATPJ Health Care'
                        document.querySelector('#Autism').checked = false
                        document.querySelector('#bls').checked = true
                        document.querySelector('#pls').checked = true
                        document.querySelector('#Complaints').checked = true
                        document.querySelector('#comm').checked = true
                        document.querySelector('#Conflicts').checked = true
                        document.querySelector('#COSHH').checked = true
                        document.querySelector('#dols').checked = true
                        document.querySelector('#dpr').checked = true
                        document.querySelector('#dysphagia').checked = false
                        document.querySelector('#Epilepsy').checked = false
                        document.querySelector('#ead').checked = true
                        document.querySelector('#fire').checked = true
                        document.querySelector('#first-aid-adults').checked = true
                        document.querySelector('#first-aid-paediatrics').checked = true
                        document.querySelector('#food').checked = true
                        document.querySelector('#GDPR').checked = true
                        document.querySelector('#HASG').checked = true
                        document.querySelector('#Infection').checked = true
                        document.querySelector('#IG').checked = true
                        document.querySelector('#ld').checked = true
                        document.querySelector('#lone').checked = true
                        document.querySelector('#mca').checked = true
                        document.querySelector('#mh').checked = true
                        document.querySelector('#mah').checked = true
                        document.querySelector('#prevent').checked = true
                        document.querySelector('#RIDDOR').checked = true
                        document.querySelector('#apl3').checked = true
                        document.querySelector('#cpl3').checked = true
                        document.querySelector('#whistle').checked = false
                    }

                    //RG Reed button
                    else if(e.target.classList.contains('rg-reed')){
                        document.querySelector('.provider').value = 'RG Reed'
                        document.querySelector('#Autism').checked = true
                        document.querySelector('#bls').checked = true
                        document.querySelector('#pls').checked = true
                        document.querySelector('#Complaints').checked = true
                        document.querySelector('#comm').checked = false
                        document.querySelector('#Conflicts').checked = true
                        document.querySelector('#COSHH').checked = true
                        document.querySelector('#dols').checked = true
                        document.querySelector('#dpr').checked = false
                        document.querySelector('#dysphagia').checked = false
                        document.querySelector('#Epilepsy').checked = true
                        document.querySelector('#ead').checked = true
                        document.querySelector('#fire').checked = true
                        document.querySelector('#first-aid-adults').checked = true
                        document.querySelector('#first-aid-paediatrics').checked = true
                        document.querySelector('#food').checked = true
                        document.querySelector('#GDPR').checked = true
                        document.querySelector('#HASG').checked = true
                        document.querySelector('#Infection').checked = true
                        document.querySelector('#IG').checked = true
                        document.querySelector('#ld').checked = true
                        document.querySelector('#lone').checked = true
                        document.querySelector('#mca').checked = true
                        document.querySelector('#mh').checked = true
                        document.querySelector('#mah').checked = true
                        document.querySelector('#prevent').checked = true
                        document.querySelector('#RIDDOR').checked = true
                        document.querySelector('#apl3').checked = true
                        document.querySelector('#cpl3').checked = true
                        document.querySelector('#whistle').checked = true
                    }

                    //Train Healthcare button
                    else if(e.target.classList.contains('train-healthcare')){
                        document.querySelector('.provider').value = 'Train Healthcare'
                        document.querySelector('#Autism').checked = true
                        document.querySelector('#bls').checked = true
                        document.querySelector('#pls').checked = true
                        document.querySelector('#Complaints').checked = true
                        document.querySelector('#comm').checked = false
                        document.querySelector('#Conflicts').checked = true
                        document.querySelector('#COSHH').checked = true
                        document.querySelector('#dols').checked = true
                        document.querySelector('#dpr').checked = false
                        document.querySelector('#dysphagia').checked = false
                        document.querySelector('#Epilepsy').checked = true
                        document.querySelector('#ead').checked = true
                        document.querySelector('#fire').checked = true
                        document.querySelector('#first-aid-adults').checked = true
                        document.querySelector('#first-aid-paediatrics').checked = true
                        document.querySelector('#food').checked = true
                        document.querySelector('#GDPR').checked = true
                        document.querySelector('#HASG').checked = true
                        document.querySelector('#Infection').checked = true
                        document.querySelector('#IG').checked = true
                        document.querySelector('#ld').checked = true
                        document.querySelector('#lone').checked = true
                        document.querySelector('#mca').checked = true
                        document.querySelector('#mh').checked = true
                        document.querySelector('#mah').checked = true
                        document.querySelector('#prevent').checked = true
                        document.querySelector('#RIDDOR').checked = true
                        document.querySelector('#apl3').checked = true
                        document.querySelector('#cpl3').checked = true
                        document.querySelector('#whistle').checked = true
                    }

                })

                // Create a DataTransfer to "copy" the file
                const dt = new DataTransfer()

                // Listen for a file selection
                document.addEventListener('change', (e) => {
                    if (e.target.classList.contains('training__fileButton')) {
                        const files = e.target.files 
                        if (!files.length) return
                        const file = files[0]; // First file
                        dt.items.add(file)
                    }
                })

                let courseInterval = null
                const rowCourseNames = []
                let trainingCheckBoxArray = []
                function addMultipleTraining(completionDate, expiryDate, provider) {  
                    let trainingHistorySection = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart') 

                    //Make an array of all the rows already in the training table
                    const trainingTable = trainingHeading.closest('.FormHeader')
                    let trainingTableRows = []
                    
                    if (trainingTable) {
                        const trainingTableSection = trainingTable.querySelector('.SummaryTable')
                        if (trainingTableSection) {
                            trainingTableRows = Array.from(trainingTableSection.querySelectorAll('.SubformSummaryItem'))
                            trainingTableRows.forEach((row)=>{
                                rowCourseNames.push(row.querySelectorAll('.SummaryTableCell')[1].querySelector('.SummaryTableCellInner').textContent)
                            })      
                        }
                    }

                    //Loop through the trainingCheckBoxArray array with an interval
                    let i = 0
                    courseInterval = setInterval(()=>{
                        if (rowCourseNames.length > 0) {
                            trainingTableRows = Array.from(trainingHeading.closest('.FormHeader').querySelector('.SummaryTable').querySelectorAll('.SubformSummaryItem')) // You must requery this or it might not find it, this gave me a headache.     
                        }
                        
                        //For each of the items in the array, check if it is equal to any of the rows in the training table. if it is, then click on the row.
                        if (rowCourseNames.includes(trainingCheckBoxArray[i])) {
                            const courseElement = trainingTableRows.find(element => element.textContent.includes(trainingCheckBoxArray[i])).querySelectorAll('.SummaryTableCell')[1].querySelector('.SummaryTableCellInner')
                            courseElement.click()

                                //Give the training history section time to expand and then click the add button
                                setTimeout(()=>{
                                    trainingHistorySection = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart') 
                                    const addTrainingHistoryButton = trainingHistorySection.querySelector('.AddSubform')
                                    addTrainingHistoryButton.click()
                                    setTimeout(()=>{
                                        //Insert the values
                                        const completionDateInput = document.querySelector('#Field-355')
                                        completionDateInput.value = completionDate
                                        completionDateInput.dispatchEvent(new Event('input', { bubbles: true }))
                                        completionDateInput.dispatchEvent(new Event('change', { bubbles: true }))

                                        // const expiryDateInput = document.querySelector('#Field-315')
                                        // expiryDateInput.value = expiryDate
                                        // expiryDateInput.dispatchEvent(new Event('input', { bubbles: true }))
                                        // expiryDateInput.dispatchEvent(new Event('change', { bubbles: true }))
                                        
                                        const poviderInput = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart').querySelectorAll('.text-field')[3]
                                        poviderInput.value = provider
                                        poviderInput.dispatchEvent(new Event('change', { bubbles: true }))
                            
                                        const documentUploadInput = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart').querySelector('.FileUploadControlsArea input')
                                        documentUploadInput.files = dt.files
                                        documentUploadInput.dispatchEvent(new Event('change', { bubbles: true }))

                                        const courseFrequencyInput = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart').querySelector('.number-field input')
                                        courseFrequencyInput.value = 1
                                        courseFrequencyInput.dispatchEvent(new Event('change', { bubbles: true }))

                                        i++
                                        if (i >= trainingCheckBoxArray.length) {
                                            clearInterval(courseInterval)
                                            document.querySelector('.training__background').remove()
                                            trainingCheckBoxArray = []
                                        }
                                    }, 200)
                                }, 500)

                        } else{
                            //If the table doesn't contain the course, add it to the table
                            const addButton = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training').closest('.FormHeader').querySelector('.AddSubform')
                            addButton.click() 

                            setTimeout(() => {
                                const courseSelectDropDown =  Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart').querySelector('.selectize-input')
                                courseSelectDropDown.click()
                                
                                setTimeout(() => {
                                    const trainingHistorySection = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart')
                                    const dropDownCourseOptions = trainingHistorySection.querySelectorAll('.selectize-dropdown-content div')
                                    
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
                                                    completionDateInput.value = completionDate
                                                    completionDateInput.dispatchEvent(new Event('input', { bubbles: true }))
                                                    completionDateInput.dispatchEvent(new Event('change', { bubbles: true }))

                                                    // const expiryDateInput = document.querySelector('#Field-315')
                                                    // expiryDateInput.value = expiryDate
                                                    // expiryDateInput.dispatchEvent(new Event('input', { bubbles: true }))
                                                    // expiryDateInput.dispatchEvent(new Event('change', { bubbles: true }))
                                                    
                                                    const poviderInput = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart').querySelectorAll('.text-field')[3]
                                                    poviderInput.value = provider
                                                    poviderInput.dispatchEvent(new Event('change', { bubbles: true }))
                                        
                                                    const documentUploadInput = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart').querySelector('.FileUploadControlsArea input')
                                                    documentUploadInput.files = dt.files
                                                    documentUploadInput.dispatchEvent(new Event('change', { bubbles: true }))

                                                    const courseFrequencyInput = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart').querySelector('.number-field input')
                                                    courseFrequencyInput.value = 1
                                                    courseFrequencyInput.dispatchEvent(new Event('change', { bubbles: true }))

                                                    i++
                                                    if (i >= trainingCheckBoxArray.length) {
                                                        clearInterval(courseInterval)
                                                        document.querySelector('.training__background').remove()
                                                        trainingCheckBoxArray = []
                                                    }
                                                }, 200)
                                            }, 500)
                                        }
                                    })
                                }, 200)
                            }, 100)
                        }

                        //Update the circle loading animation every time the loop progreses  
                        const percentage = i / trainingCheckBoxArray.length * 100
                        const loadingCircle = document.querySelector('.training__page.loading')
                        loadingCircle.style.setProperty('--progress', percentage);

                        if (i >= trainingCheckBoxArray.length) {
                            clearInterval(courseInterval)
                            document.querySelector('.training__background').remove()
                            trainingCheckBoxArray = []
                        }
                    }, 2000)
                }

            }

            //Add a Flexebee button in the training proivder section
            const trainingHistorySection = Array.from(document.querySelectorAll('.FormHeaderLabel')).find((element) => element.innerText == 'Training history').closest('.FormPart') 

            if (!document.querySelector('.flexebee')) {
                
                const providerDiv = Array.from(trainingHistorySection.querySelectorAll('SPAN')).find(element => element.innerText == 'Provider').closest('.control-group').querySelector('.controls')
                providerDiv.insertAdjacentHTML('afterbegin', `<button class="flexebee">Flexebee</button>`)
                providerDiv.style.display = 'flex' 

                document.addEventListener('click', (e)=>{
                //Change the provider input to 'Flexebee' when the Flexebee button is clicked
                    if (e.target.classList.contains('flexebee')) {
                        const providerInput = providerDiv.querySelector('input')
                        providerInput.value = 'Flexebee'
                        providerInput.dispatchEvent(new Event('change', { bubbles: true }))
                        providerInput.focus()
                    }
                })
            }
            
        }
    }
}

function checkAndAddTrainingCopyButtons(){
    //Add the copy training buttons and the event listener if they doesn't exist.
    if (!document.querySelector('.rowCopy')) {
        addTrainingCopyButtons()    
        
    } else{
        //Also Add the copy training buttons and the event listener if they are all invisible.
        let numberOfButtonsInView = 0
        const oldButtons = document.querySelectorAll('.rowCopy')
        oldButtons.forEach((element)=>{
            if (element.getBoundingClientRect().width > 0) {
                numberOfButtonsInView++
            }
        })
        
        if (numberOfButtonsInView == 0) {
            //Remove the invisible ones before adding the new ones
            oldButtons.forEach(element => element.remove())
            addTrainingCopyButtons()   
        }
    }
    
    function addTrainingCopyButtons(){
        //Select all the traing headings
        const headerRows = document.querySelectorAll('.resultsGroupHeader td')
        headerRows.forEach((row)=>{
            row.insertAdjacentHTML('beforeend', `
                <style>
                    .rowCopy{
                        float: right; 
                        background: rgba(255,255,255, 1);
                        height: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.25s;
                        border: none;
                    }
    
                    .rowCopy:hover{
                        background: rgba(82, 139, 231, 0.5);
                        color: rgb(255,255,255, 1);
                    }
                </style>
            
                <button class="rowCopy"><i class="fa-solid fa-copy rowCopy-icon"></i></button>
            `)
        })
    
        document.addEventListener('click', (e)=>{
            if (e.target.classList.contains('rowCopy') || e.target.classList.contains('rowCopy-icon')) {
                const headingRow = e.target.closest('.resultsGroupHeader')
                let string = ''
    
                let currentRow = headingRow.nextElementSibling
    
                while (currentRow && currentRow.classList.contains('resultsTableRow')) {
                    const cells = currentRow.querySelectorAll('.resultsTableCell')
                    const courseTitle = cells[7]?.textContent.trim() || ''
                    const courseDate = cells[8]?.textContent.trim() || ''
                    let tabs = ''
                    let tabAdder = 5
                    let tabReducer = Math.round(courseTitle.length / 8.2)
    
                    for (let i = 0; i < (tabAdder - tabReducer); i++) {
                        tabs = tabs + '\t'
                    }
                    string += `${courseTitle}${tabs}${courseDate} \n`
                    currentRow = currentRow.nextElementSibling
    
                }
    
                navigator.clipboard.writeText(string)
            }
        })
    }
}


function checkAndAddTrainingMessageButtons(){
    //Add the Message training buttons and the event listener if they doesn't exist.
    if (!document.querySelector('.rowMessage')) {
        addTrainingMessageButtons()    
        
    } else{
        //Also Add the Message training buttons and the event listener if they are all invisible.
        let numberOfButtonsInView = 0
        const oldButtons = document.querySelectorAll('.rowMessage')
        oldButtons.forEach((element)=>{
            if (element.getBoundingClientRect().width > 0) {
                numberOfButtonsInView++
            }
        })
        
        if (numberOfButtonsInView == 0) {
            //Remove the invisible ones before adding the new ones
            oldButtons.forEach(element => element.remove())
            addTrainingMessageButtons()   
        } 
    }
    
    function addTrainingMessageButtons(){
        //Select all the traing headings
        const headerRows = document.querySelectorAll('.resultsGroupHeader td')
        headerRows.forEach((row)=>{
            row.insertAdjacentHTML('beforeend', `
                <style>
                    .rowMessage{
                        float: right; 
                        background: rgba(255,255,255, 1);
                        height: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all 0.25s;
                        border: none;
                    }
    
                    .rowMessage:hover{
                        background: rgba(82, 139, 231, 0.5);
                        color: rgb(255,255,255, 1);
                    }
                </style>

                <button class="rowMessage"><i class="fa-solid fa-message rowMessage-icon"></i></button>
            `)
        })

        function isDateStringNotMoreThan30DaysInTheFuture(dateString) {
            //Split the "22/03/2026" string
            const dateArray = dateString.split('/').map(Number)
            const [day, month, year] = dateArray

            //Create a Date object (Note: Months are 0-indexed in JS, so subtract 1)
            const convertedCourseDate = new Date(year, month - 1, day)

            const now = new Date()
            const futureThreshold = new Date()
            futureThreshold.setDate(now.getDate() + 30)

            //Compare
            return convertedCourseDate <= futureThreshold
        }

        const time = getTimeOfDay()

    
        document.addEventListener('click', (e)=>{
            if (e.target.classList.contains('rowMessage') || e.target.classList.contains('rowMessage-icon')) {
                const headingRow = e.target.closest('.resultsGroupHeader')
                let flexebeeString =  '\nFlexebee:\n'
                let classroomString = '\nClassroom:\n'
                let elearningString = '\nExternal eLearning:\n'
                let staffName = ''
                const practicalCourses = ['Basic Life Support Adults', 'Basic Life Support Paediatrics', 'PMVA (Practical)', 'ILS Adults (Practical)', 'ILS Paediatrics (Practical)']
                const elearningsObject = [{name: 'Tourettes (Not mandatory for all)', url: 'https://www.tourettes-action.org.uk/155-elearning.html'}, {name: 'Eating Disorders (Not mandatory for all)', url: 'https://portal.e-lfh.org.uk/Component/Details/696272'}, {name: 'Domestic Abuse (Not mandatory for all)', url: 'https://courses.idas.org.uk/courses/domestic-abuse-essential-training/'}]
    
                let currentRow = headingRow.nextElementSibling
    
                while (currentRow && currentRow.classList.contains('resultsTableRow')) {
                    const cells = currentRow.querySelectorAll('.resultsTableCell')
                    const name = cells[1]?.textContent.trim() || ''
                    if (name !== '" "') {
                        staffName = name.split(' ')[0]
                    }
                    const courseTitle = cells[7]?.textContent.trim() || ''
                    const courseDate = cells[8]?.textContent.trim() || ''
                    let tabs = ''
                    let tabAdder = 5
                    let tabReducer = Math.round(courseTitle.length / 8.2)
    
                    for (let i = 0; i < (tabAdder - tabReducer); i++) {
                        tabs = tabs + '\t'
                    }
                    if (practicalCourses.includes(courseTitle)) {
                        classroomString += `\t• ${courseTitle}${tabs}${courseDate} \n`
                        
                    } else if (elearningsObject.some((elearning) => elearning.name.includes(courseTitle))) {
                        const elearning = elearningsObject.find((elearningCourse)=> elearningCourse.name.includes(courseTitle))
                        elearningString += `\t• ${courseTitle}${tabs}${courseDate} - ${elearning.url} \n`
                    } else{
                        if (isDateStringNotMoreThan30DaysInTheFuture(courseDate)) {
                            //There is no point of reminding people about Flexebee courses that are more
                            //than 30 days in the future as the website won't let you enrol them. 
                            flexebeeString += `\t• ${courseTitle}${tabs}${courseDate} \n`
                        }
                    }
                    currentRow = currentRow.nextElementSibling
    
                }
                
                flexebeeString = flexebeeString.length > 12 ? flexebeeString : ''
                classroomString = classroomString.length > 13 ? classroomString : ''
                elearningString = elearningString.length > 21 ? elearningString : ''

                let finalText = `Good ${time} ${staffName},\n\nI hope you are well, it's just a reminder about the upcoming training expiring:\n${flexebeeString}${classroomString}${elearningString}\n`

                if (flexebeeString.length > 11) {
                    finalText += 'You can complete Flexebee courses here: https://portal.flexebee.co.uk/. '
                } else{
                    flexebeeString = ''
                }

                if (classroomString.length > 12) {
                    finalText += 'Classroom courses will need to be booked by you, I have listed some approved providers below, please send the certificates here before the expiry dates.\n\n• RG Reed - rgreedtraining.co.uk\n• KAOM (PMVA only) - kaom.co.uk \n• Health and Safety Group (please also tick child life support when booking) - healthandsafetygroup.com \n• Care Force - careforcetrainings.co.uk \n\n'
                } else{
                    classroomString = ''
                }

                if (!finalText.includes('PMVA (Practical)')) {
                    // The 'g' flag stands for 'global' (replace all)
                    finalText = finalText.replace(/• KAOM \(PMVA only\) - kaom\.co\.uk \n/g, '');
                }
                
                finalText += 'Please let me know if you have any issues. \n'

                if (flexebeeString.length < 12 && classroomString.length < 13 && elearningString.length < 21) {
                    finalText = ''
                }
                navigator.clipboard.writeText(finalText.replaceAll('(Not mandatory for all)', '\t\t\t'))
            } 
            
        })
    }
}

//This just changes the default drop down in the staff list to 1000 per page
function changeDefaultRecordsPerPage() {
    setTimeout(() => {
        const showing = document.querySelectorAll('SELECT.ReportResultsPagesToShowInput')[11]
        const showingECS = document.querySelectorAll('SELECT.ReportResultsPagesToShowInput')[52]
        if (showing && showingECS) {
            showing.value = "1000" 
            showing.dispatchEvent(new Event('change'))
            showingECS.value = "1000" 
            showingECS.dispatchEvent(new Event('change'))
        }
    }, 8500)
}
changeDefaultRecordsPerPage()

//Change the drop down to 1000 again if the Vantage logo is clicked
document.addEventListener('click', (e)=>{
    if (e.target.nodeName == 'IMG' && e.target.src == 'https://www.vantage-modules.co.uk/ECS/Content/Images/vantage-logo.svg') {
        changeDefaultRecordsPerPage()
    }
})

let resolveDownloadPromise;

//Add the download s2 button if it doesn't exists
function addDownloadS2StuffButton(){
    const staffComplianceText = Array.from(document.querySelectorAll('DIV')).find((div) => div.textContent == 'Staff Compliance')
    if (staffComplianceText && !document.querySelector('.downloadS2Stuff')) {
        const accordion = document.querySelector('.accordion')
        accordion.insertAdjacentHTML('beforeend', `
        <div class="accordion-group downloadS2Stuff tw:group">
            <a class="accordion-toggle downloadS2Stuff" data-toggle="collapse" href="#">
                <span class="accordion-label">
                    <i class="fa fa-file-arrow-down fa-fw" downloadS2Stuff></i>
                    <span class="downloadS2Stuff" id="downloadS2StuffText">Download S2 Evidence</span>
                </span>
            </a>
            <div class="downloadS2Stuff loading"></div>
        </div>
        <div class="hiddenExplosion"></div>

        <style>
            .hiddenExplosion{
                position: relative;
                margin-left: 100px;
                z-index: 99999;
            }
                
            .accordion-group.downloadS2Stuff {
              position: relative;
              overflow: hidden;
            }
            
            .downloadS2Stuff.loading {
              position: absolute;
              inset: 0;
              background: rgba(255, 255, 255, 0.6);
              transform: translateX(-100%);
              transition: all 1s;
            }

            .emoji {
                position: absolute;
                font-size: 24px;
                pointer-events: none;
                animation: explode 900ms ease-out forwards;
                z-index: 99999;
            }

            @keyframes explode {
                0% {
                    transform: translate(0, 0) scale(1);
                    opacity: 1;
                }
                100% {
                    transform: translate(var(--x), var(--y)) scale(0.3);
                    opacity: 0;
                }
            }
        </style>
        `)
        
        document.addEventListener('click', (e)=>{
            if(e.target.classList.contains('downloadS2Stuff')){
                downloadS2Stuff()
            }
        }) 
    }
}

async function downloadS2Stuff(){
    const loadingBar = document.querySelector('.downloadS2Stuff.loading')
    const hiddenExplosion = document.querySelector('.hiddenExplosion')  

    //Send the name and surname to background.js so it can make a folder for them
    const spansArray = Array.from(document.querySelectorAll('SPAN'))
    firstName = spansArray.find(e => e.textContent.trim() === 'First Name').closest('.form-control-group').querySelector('.text-field').value
    surname = spansArray.find(e => e.textContent.trim() === 'Surname').closest('.form-control-group').querySelector('.text-field').value

    await chrome.runtime.sendMessage({
        type: "SET_STAFF_NAME",
        name: `${firstName} ${surname}`
    });
    
    //Expand the CV section
    let recruitmentSectionDiv = Array.from(document.querySelectorAll('DIV')).find((div) => div.textContent == 'Recruitment Documentation').closest('.FormFieldNonMandatory') 
    const cvButton = Array.from(recruitmentSectionDiv.querySelectorAll('DIV')).find((div) => div.textContent == 'CV')
    cvButton.click()
    await waitABit(300)
    
    let downloadS2StuffText = document.querySelector('#downloadS2StuffText')
    downloadS2StuffText.innerText = 'OK bare with...'
    
    //Click the CV download button
    const cvDownloadButton = Array.from(recruitmentSectionDiv.querySelectorAll('SPAN')).find((span) => span.textContent == 'Documentation upload').closest('.control-group').querySelector('.DownloadAttachmentButton')
    cvDownloadButton.click()
    await waitForDownload()
    loadingBar.style.transform = "translateX(-90%)"
    
    //Expand the Reference 1 section
    recruitmentSectionDiv = Array.from(document.querySelectorAll('DIV')).find((div) => div.textContent == 'Recruitment Documentation').closest('.FormFieldNonMandatory') 
    const ref1Button = Array.from(recruitmentSectionDiv.querySelectorAll('DIV')).find((div) => div.textContent == 'Reference 1')
    ref1Button.click()
    await waitABit(300)
    
    //Click the Reference 1 download button
    const ref1DownloadButton = Array.from(recruitmentSectionDiv.querySelectorAll('SPAN')).find((span) => span.textContent == 'Documentation upload').closest('.control-group').querySelector('.DownloadAttachmentButton')
    ref1DownloadButton.click()
    await waitForDownload()
    loadingBar.style.transform = "translateX(-80%)"
    
    //Expand the Reference 2 section
    recruitmentSectionDiv = Array.from(document.querySelectorAll('DIV')).find((div) => div.textContent == 'Recruitment Documentation').closest('.FormFieldNonMandatory') 
    const ref2Button = Array.from(recruitmentSectionDiv.querySelectorAll('DIV')).find((div) => div.textContent == 'Reference 2')
    ref2Button.click()
    await waitABit(300)
    
    //Click the Reference 2 download button
    const ref2DownloadButton = Array.from(recruitmentSectionDiv.querySelectorAll('SPAN')).find((span) => span.textContent == 'Documentation upload').closest('.control-group').querySelector('.DownloadAttachmentButton')
    ref2DownloadButton.click()
    await waitForDownload()
    loadingBar.style.transform = "translateX(-70%)"
    
    //Expand the Reference 3 section
    recruitmentSectionDiv = Array.from(document.querySelectorAll('DIV')).find((div) => div.textContent == 'Recruitment Documentation').closest('.FormFieldNonMandatory') 
    const ref3Button = Array.from(recruitmentSectionDiv.querySelectorAll('DIV')).find((div) => div.textContent == 'Reference 3')
    ref3Button ? ref3Button.click() : displayMessage(1, 'No reference 3')
    await waitABit(300)
    
    //Click the Reference 3 download button
    const ref3DownloadButton = Array.from(recruitmentSectionDiv.querySelectorAll('SPAN')).find((span) => span.textContent == 'Documentation upload').closest('.control-group').querySelector('.DownloadAttachmentButton')
    if (ref3DownloadButton) {
        ref3DownloadButton.click()
        await waitForDownload()
        
    } else{
        displayMessage(1, 'No reference 3')
    }
    loadingBar.style.transform = "translateX(-60%)"
    
    //Expand the proof of ID section
    let proofOfIdSection = Array.from(document.querySelectorAll('DIV')).find((div) => div.textContent == 'Identification Documentation').closest('.FormFieldNonMandatory') 
    const proofOfIdButton = proofOfIdSection.querySelector('.SubformSummaryItem .DeleteSubformButtonCell').nextElementSibling
    proofOfIdButton.click()
    await waitABit(300)
    
    //Click the first proof of ID download button
    const poID1SectionContainer = Array.from(proofOfIdSection.querySelectorAll('SPAN')).find((span) => span.textContent == 'Document 1').closest('.control-group')
    const poID1SectionContainerArray = Array.from(poID1SectionContainer.querySelectorAll('.thumbnail'))

    if (poID1SectionContainerArray.length > 0) {
        var poid1Dates = []
        poID1SectionContainerArray.forEach((poid1Container) => {
            const poid1DateText = poid1Container.querySelector('.FileUploadListItemTimestamp').innerText.replaceAll('Uploaded on ', '')
            const poid1DownloadButton = poid1Container.closest('.FileUploadListItem').querySelector('.DownloadAttachmentButton')
    
            poid1Dates.push({
                date: poid1DateText,
                poid1DownloadButton: poid1DownloadButton
            })
        })
    
        // Helper: convert "dd/mm/yyyy" → Date
        function parseDate(dateStr) {
            var parts = dateStr.split('/');
            return new Date(parts[2], parts[1] - 1, parts[0]); 
        }
    
        // Find most recent proof of ID 1 date
        var mostRecentPoid1 = poid1Dates.reduce((latest, current) => {
            return parseDate(current.date) > parseDate(latest.date) ? current : latest;
        });
    
        mostRecentPoid1.poid1DownloadButton.click()
        await waitForDownload()
    } else{
        displayMessage(1, 'No Proof of ID 1')
    }
    loadingBar.style.transform = "translateX(-50%)"
    
    //Click the second proof of ID download button
    const poID2SectionContainer = Array.from(proofOfIdSection.querySelectorAll('SPAN')).find((span) => span.textContent == 'Document 2').closest('.control-group')
    const poID2SectionContainerArray = Array.from(poID2SectionContainer.querySelectorAll('.thumbnail'))

    if (poID2SectionContainerArray.length > 0) {
        var poid2Dates = []
        poID2SectionContainerArray.forEach((poid2Container) => {
            const poid2DateText = poid2Container.querySelector('.FileUploadListItemTimestamp').innerText.replaceAll('Uploaded on ', '')
            const poid2DownloadButton = poid2Container.closest('.FileUploadListItem').querySelector('.DownloadAttachmentButton')
    
            poid2Dates.push({
                date: poid2DateText,
                poid2DownloadButton: poid2DownloadButton
            })
        })
    
        // Helper: convert "dd/mm/yyyy" → Date
        function parseDate(dateStr) {
            var parts = dateStr.split('/');
            return new Date(parts[2], parts[2] - 2, parts[0]); 
        }
    
        // Find most recent proof of ID 2 date
        var mostRecentPoid2 = poid2Dates.reduce((latest, current) => {
            return parseDate(current.date) > parseDate(latest.date) ? current : latest;
        });
    
        mostRecentPoid2.poid2DownloadButton.click()
        await waitForDownload()
    } else{
        displayMessage(2, 'No Proof of ID 2')
    }
    loadingBar.style.transform = "translateX(-40%)"
    
    //Expand the right to work section
    let rtwSection = Array.from(document.querySelectorAll('DIV')).find((div) => div.textContent == 'Right to Work Documentation').closest('.FormFieldNonMandatory') 
    const rtwButton = rtwSection.querySelector('.SubformSummaryItem .DeleteSubformButtonCell').nextElementSibling
    rtwButton.click()
    await waitABit(300)
    
    //Find the photo with the most recent date and click it's download button
    rtwSection = Array.from(document.querySelectorAll('DIV')).find((div) => div.textContent == 'Right to Work Documentation').closest('.FormFieldNonMandatory') 
    const photoContainer = Array.from(rtwSection.querySelectorAll('SPAN')).find((span) => span.textContent == 'Photograph').closest('.form-control-group')
    const photoContainerArray = Array.from(photoContainer.querySelectorAll('.thumbnail'))
    if (photoContainerArray.length > 0) {
        var photoDates = []
        photoContainerArray.forEach((photoContainer) => {
            const photoDateText = photoContainer.querySelector('.FileUploadListItemTimestamp').innerText.replaceAll('Uploaded on ', '')
            const photoDownloadButton = photoContainer.closest('.FileUploadListItem').querySelector('.DownloadAttachmentButton')
    
            photoDates.push({
                date: photoDateText,
                photoDownloadButton: photoDownloadButton
            })
        })
    
        // Helper: convert "dd/mm/yyyy" → Date
        function parseDate(dateStr) {
            var parts = dateStr.split('/');
            return new Date(parts[2], parts[1] - 1, parts[0]); 
        }
    
        // Find most recent photo date
        var mostRecentPhoto = photoDates.reduce((latest, current) => {
            return parseDate(current.date) > parseDate(latest.date) ? current : latest;
        });
    
        mostRecentPhoto.photoDownloadButton.click()
        await waitForDownload()
    } else{
        displayMessage(1, 'No photo')
    }
    loadingBar.style.transform = "translateX(-30%)"
    
    //Expand the DBS section
    let dbsSection = Array.from(document.querySelectorAll('DIV')).find((div) => div.textContent == 'DBS').closest('.FormFieldNonMandatory') 
    const dbsRows = Array.from(dbsSection.querySelectorAll('.SubformSummaryItem'))
    //Click on the most recent DBS row
    if (dbsRows.length > 0) {
        const mosteRecentDateRow = dbsRows.map((row)=>{
            const mosteRecentDateRow = dbsRows.map((row)=>{
                const rowDate = row.querySelector('.DeleteSubformButtonCell')?.nextElementSibling.querySelector('.SummaryTableCellInner')
                const [day, month, year] = rowDate.textContent.split("/").map(Number)
                return { original: rowDate, date: new Date(year, month - 1, day) }
            })
            .sort((a, b) => b.date - a.date)[0].original

            mosteRecentDateRow?.click()
        })
    } else{
        displayMessage(1, 'No DBS')
    }
    await waitABit(300)
    
    //Find the DBS with the most recent date and click it's download button
    dbsSection = Array.from(document.querySelectorAll('DIV')).find((div) => div.textContent == 'DBS').closest('.FormFieldNonMandatory') 
    const dbsContainer = Array.from(dbsSection.querySelectorAll('SPAN')).find((span) => span.textContent == 'DBS certificate').closest('.form-control-group')
    const dbsContainerArray = Array.from(dbsContainer.querySelectorAll('.thumbnail'))
    if (dbsContainerArray.length > 0) {
        var dbsDates = []
        dbsContainerArray.forEach((dbsContainer) => {
            const dbsDateText = dbsContainer.querySelector('.FileUploadListItemTimestamp').innerText.replaceAll('Uploaded on ', '')
            const dbsDownloadButton = dbsContainer.closest('.FileUploadListItem').querySelector('.DownloadAttachmentButton')
    
            dbsDates.push({
                date: dbsDateText,
                dbsDownloadButton: dbsDownloadButton
            })
        })
    
        // Helper: convert "dd/mm/yyyy" → Date
        function parseDate(dateStr) {
            var parts = dateStr.split('/');
            return new Date(parts[2], parts[1] - 1, parts[0]); 
        }
    
        // Find most recent dbs date
        var mostRecentdbs = dbsDates.reduce((latest, current) => {
            return parseDate(current.date) > parseDate(latest.date) ? current : latest;
        });
    
        mostRecentdbs.dbsDownloadButton.click()
        await waitForDownload()
    } else{
        displayMessage(1, 'No DBS')
    }
    loadingBar.style.transform = "translateX(-20%)"
    
    //Click overseas police check download button if it exists
    const opcDownloadButton = Array.from(dbsSection.querySelectorAll('SPAN')).find((span) => span.textContent == 'Overseas police check (only if applicable)').closest('.control-group').querySelector('.DownloadAttachmentButton')
    if (opcDownloadButton) {
        opcDownloadButton.click()
        await waitForDownload()
    } else{
        displayMessage(1, 'No overseas police check')
    }
    loadingBar.style.transform = "translateX(-10%)"

    //Expand the care certificate section if it exists
    let trainingSection = Array.from(Array.from(document.querySelectorAll('DIV')).find((div) => div.innerText == 'Training').closest('.FormHeader').querySelectorAll('DIV'))
    const careCertificate = trainingSection.find((div) => div.innerText == 'Care Certificate')
    careCertificate ? careCertificate.click() : displayMessage(1, 'No care certificate')
    downloadS2StuffText.innerText = 'Nearly there'
    await waitABit(300)

    //Expand the care cert training history section if it exists
    let trainingHistorySectionRows = Array.from(document.querySelectorAll('DIV')).find((div) => div.innerText == 'Training history').closest('.FormHeader').querySelector('.SummaryTable').querySelectorAll('.SubformSummaryItem')
    trainingHistorySectionRows.length
    if (trainingHistorySectionRows.length > 0) {
        const careCertButton = trainingHistorySectionRows[0].querySelector('.DeleteSubformButtonCell').nextElementSibling.querySelector('.SummaryTableCellInner')
        careCertButton.click()
    } else{
        displayMessage(1, 'No care certificate')
    }
    await waitABit(300)

    //Click the download care cert button
    loadingBar.style.transform = "translateX(-0%)"
    let trainingHistorySection = Array.from(document.querySelectorAll('DIV')).find((div) => div.innerText == 'Training history').closest('.FormFieldVisible')
    careCertDownloadButton = trainingHistorySection.querySelector('.DownloadAttachmentButton')
    if (careCertDownloadButton) {
        careCertDownloadButton.click()
        await waitForDownload()
    } else{
        displayMessage(1, 'No care certificate')
    }
    
    //Set the dowloads folder back to a default value
    await chrome.runtime.sendMessage({
        type: "SET_STAFF_NAME",
        name: `Vantage Download`
    });

    //End the loading animation
    explodeEmojis(hiddenExplosion)
    downloadS2StuffText.innerText = 'Download S2 Evidence'
    loadingBar.style.transform = "translateX(-100%)"
    displayMessage(0, 'Remember Nathan is great')
}


//This is just used between clicking on things to give sections time to expand
function waitABit(time) {
    return new Promise(resolve => setTimeout(resolve, time))
}


function explodeEmojis(target, count = 20) {
    const emojis = ['😀', '😄', '😁', '😎', '🤩', '😆'];
    const rect = target.getBoundingClientRect();

    for (let i = 0; i < count; i++) {
        const emoji = document.createElement('span');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

        const angle = Math.random() * Math.PI * 2;
        const distance = 60 + Math.random() * 80;

        emoji.style.setProperty('--x', `${Math.cos(angle) * distance}px`);
        emoji.style.setProperty('--y', `${Math.sin(angle) * distance}px`);

        emoji.style.left = `${rect.width / 2}px`;
        emoji.style.top = `${rect.height / 2}px`;

        target.appendChild(emoji);

        emoji.addEventListener('animationend', () => {
            emoji.remove();
        });
    }
}



//Helper function for displaying error or success messages on the page
function displayMessage(type, text){
    //Type 0 is a success message, anything else is an error message

    const messageElement = `
        <style>
            .imGreat{
                transform: translateY(15px) scale(0.9);
                animation: fadePopInOut 2.5s ease-out forwards;
            }	

            @keyframes fadePopInOut {
                0% {
                    opacity: 0;
                    transform: translateY(15px) scale(0.9);
                }
                15% {
                    opacity: 1;
                    transform: translateY(0px) scale(1);
                }
                85% {
                    opacity: 1;
                    transform: translateY(0px) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateY(15px) scale(0.9);
                }
            }
        </style>

        <div id="toast-container" class="toast-bottom-right imGreat">
            <div class="toast ${type == 0 ? 'toast-success' : 'toast-error'}" style="">
                <div class="toast-message">${text}</div>
            </div>
        </div>
    `
    document.body.insertAdjacentHTML('beforeend', messageElement)
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "DOWNLOAD_DONE") {
    console.log(`%c Success! Download ID ${message.id} has finished.`, "color: green; font-weight: bold;")
    if (resolveDownloadPromise) {
      resolveDownloadPromise(); // This "wakes up" the await below
    }
  }
})

// 2. The "Pause" function
function waitForDownload() {
  return new Promise((resolve) => {
    resolveDownloadPromise = resolve; 
  });
}

function addCheckDBSButton() {
    //1. Create the check DBS button if it does not exist
    const idLabel = Array.from(document.querySelectorAll('SPAN')).find((span)=> span.innerText == 'ID').parentElement
    checkDBSButtonExists = document.querySelector('.checkDBSButton') ? true : false

    if (!checkDBSButtonExists) {
        // Create the button via JS and use inline styles + mouse events
        const checkBtn = document.createElement('button')
        checkBtn.className = 'checkDBSButton'
        checkBtn.textContent = 'Check DBS'
        checkBtn.style.marginRight = '20px'
        checkBtn.style.transition = 'all 0.25s'
        checkBtn.style.backgroundColor = 'rgba(0,0,0,0)'
        checkBtn.style.border = '1px solid black'
        checkBtn.style.cursor = 'pointer'

        checkBtn.addEventListener('mouseenter', () => {
            checkBtn.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })
        checkBtn.addEventListener('mouseleave', () => {
            checkBtn.style.backgroundColor = 'rgba(0,0,0,0)'
        })

        // Insert at the start of the container
        idLabel.prepend(checkBtn)
    }

    //1. When the check DBS button is clicked, scrape the DBS fields 
    document.addEventListener('click', (e)=>{
        if (e.target.classList.contains('checkDBSButton')) {
            //Click the most recent DBS row
            const dbsDocumentationContainer = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'DBS').closest('.FormHeader')
            const dbsRows = Array.from(dbsDocumentationContainer.querySelectorAll('.SubformSummaryItem'))
            if (dbsRows.length > 0) {
                const mosteRecentDateRow = dbsRows.map((row)=>{
                    const mosteRecentDateRow = dbsRows.map((row)=>{
                        const rowDate = row.querySelector('.DeleteSubformButtonCell')?.nextElementSibling.querySelector('.SummaryTableCellInner')
                        const [day, month, year] = rowDate.textContent.split("/").map(Number)
                        return { original: rowDate, date: new Date(year, month - 1, day) }
                    })
                    .sort((a, b) => b.date - a.date)[0].original

                    mosteRecentDateRow?.click()
                })
            }

            //If the DBS 3 month date isn't in the future, add 3 months to it
            const threeMonthUSInput = document.querySelector("input[name='Field-1836']")
            const threeMonthDateString = threeMonthUSInput.value

            if (threeMonthDateString != '') {
                // 1. Parse the string (DD/MM/YYYY)
                const [day, month, year] = threeMonthDateString.split('/').map(Number)
                const inputDate = new Date(year, month - 1, day) // Months are 0-indexed in JS

                // 2. Get "Today"
                const today = new Date()

                // 3. If NOT after today, add 3 months
                if (inputDate <= today) {
                    // .setMonth() automatically handles the year increment if month > 11
                    inputDate.setMonth(inputDate.getMonth() + 3)

                    //Format back to DD/MM/YYYY and change the input
                    const formattedDate = [
                        String(inputDate.getDate()).padStart(2, '0'),
                        String(inputDate.getMonth() + 1).padStart(2, '0'),
                        inputDate.getFullYear()
                    ].join('/')

                    threeMonthUSInput.value = formattedDate
                    threeMonthUSInput.dispatchEvent(new Event('input', { bubbles: true }))
                    threeMonthUSInput.dispatchEvent(new Event('change', { bubbles: true }))
                }
            }


            //Get fields
            let [userName, userSurname] = document.querySelectorAll('.dropdown-toggle')[1]?.innerText.split('.')
            userName = userName.charAt(0).toUpperCase() + userName.slice(1)
            userSurname = userSurname.charAt(0).toUpperCase() + userSurname.slice(1)

            let surname = Array.from(document.querySelectorAll('SPAN')).find((span)=> span.innerText == 'Surname').parentElement.parentElement.querySelector('.text-field').value
            let DOB = Array.from(document.querySelectorAll('SPAN')).find((span)=> span.innerText == 'Date of birth').parentElement.parentElement.querySelector('.input-small').value.split('/')
            let dbsNumber = Array.from(document.querySelectorAll('SPAN')).find((span)=> span.innerText == 'DBS Number').parentElement.parentElement.querySelector('.text-field').value

            chrome.runtime.sendMessage({ action: "START_DBS", payload: {surname: surname, DOB: DOB, dbsNumber: dbsNumber, userName: userName, userSurname: userSurname} })
        }
    })
}

function addCheckRecButton() {
    //Create the check recruitment button if it does not exist
    const idLabel = Array.from(document.querySelectorAll('SPAN')).find((span)=> span.innerText == 'First Name').parentElement
    checkRecButtonExists = document.querySelector('.checkRecButton') ? true : false
    
    if (!checkRecButtonExists) {
        const checkRecBtn = document.createElement('button')
        checkRecBtn.className = 'checkRecButton'
        checkRecBtn.textContent = 'Copy Outstanding List'
        checkRecBtn.style.marginRight = '20px'
        checkRecBtn.style.transition = 'all 0.25s'
        checkRecBtn.style.backgroundColor = 'rgba(0,0,0,0)'
        checkRecBtn.style.border = '1px solid black'
        checkRecBtn.style.cursor = 'pointer'

        checkRecBtn.addEventListener('mouseenter', () => {
            checkRecBtn.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })
        checkRecBtn.addEventListener('mouseleave', () => {
            checkRecBtn.style.backgroundColor = 'rgba(0,0,0,0)'
        })

        idLabel.prepend(checkRecBtn)
    }

    document.addEventListener('click', async (e)=>{
        if (e.target.classList.contains('checkRecButton')) {
            document.body.insertAdjacentHTML('beforeend', `
                <style>
                    .rec__background{
                        z-index: 9999999;
                        width: 100%;
                        height: 100vh;
                        background: rgba(0, 0, 0, 0.2);
                        position: fixed;
                        top: 0;
                        left: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        perspective: 1000px;
                    }
                    
                    .rec__circle {
                        width: 300px;   
                        height: 300px;
                        background:#e2b29f;
                        border-radius: 100%;
                        display: -webkit-box;
                        display: -moz-box;
                        display: -ms-flexbox;
                        flex-direction: column;
                        -moz-box-align: center;
                        -ms-box-align: center;
                        -webkit-box-align: center;
                        box-align: center;
                        -moz-box-pack: center;
                        -ms-box-pack: center;
                        -webkit-box-pack: center;
                        box-pack: center;
                        -moz-transform: translate3d(0, 0, 0);
                        -ms-transform: translate3d(0, 0, 0);
                        -webkit-transform: translate3d(0, 0, 0);
                        transform: translate3d(0, 0, 0);
                        transition: all .5s;
                    }

                    .clearfix {
                      zoom: 1;
                    }
                    .clearfix:before, .clearfix:after {
                      display: block;
                      height: 0;
                      overflow: hidden;
                    }
                    .clearfix:after {
                      clear: both;
                    }
                    
                    .rabbit {
                      width: 5em;
                      height: 3em;
                      background: #ffffff;
                      border-radius: 70% 90% 60% 50%;
                      position: relative;
                      box-shadow: -0.2em 1em 0 -0.75em #b78e81;
                      -moz-transform: rotate(0deg) translate(-2em, 0);
                      -ms-transform: rotate(0deg) translate(-2em, 0);
                      -webkit-transform: rotate(0deg) translate(-2em, 0);
                      transform: rotate(0deg) translate(-2em, 0);
                      animation: hop 1s infinite linear;
                      z-index: 1;
                    }
                    .no-flexbox .rabbit {
                      margin: 10em auto 0;
                    }
                    .rabbit:before {
                      content: "";
                      position: absolute;
                      width: 1em;
                      height: 1em;
                      background: white;
                      border-radius: 100%;
                      top: 0.5em;
                      left: -0.3em;
                      box-shadow: 4em 0.4em 0 -0.35em #3f3334, 0.5em 1em 0 white, 4em 1em 0 -0.3em white, 4em 1em 0 -0.3em white, 4em 1em 0 -0.4em white;
                      animation: kick 1s infinite linear;
                    }
                    .rabbit:after {
                      content: "";
                      position: absolute;
                      width: .75em;
                      height: 2em;
                      background: white;
                      border-radius: 50% 100% 0 0;
                      -moz-transform: rotate(-30deg);
                      -ms-transform: rotate(-30deg);
                      -webkit-transform: rotate(-30deg);
                      transform: rotate(-30deg);
                      right: 1em;
                      top: -1em;
                      border-top: 1px solid #f7f5f4;
                      border-left: 1px solid #f7f5f4;
                      box-shadow: -0.5em 0em 0 -0.1em white;
                    }
                    
                    .clouds {
                      background: white;
                      width: 2em;
                      height: 2em;
                      border-radius: 100% 100% 0 0;
                      position: relative;
                      top: -5em;
                      filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
                      opacity: 0;
                      -moz-transform: translate(0, 0);
                      -ms-transform: translate(0, 0);
                      -webkit-transform: translate(0, 0);
                      transform: translate(0, 0);
                      animation: cloudy 1s infinite linear forwards;
                      box-shadow: 5em 2em 0 -0.3em white, -2em 2em 0 0 white;
                    }
                    .clouds:before, .clouds:after {
                      content: '';
                      position: absolute;
                      box-shadow: 5em 2em 0 -0.3em white, -2em 2em 0 white;
                    }
                    .clouds:before {
                      width: 1.25em;
                      height: 1.25em;
                      border-radius: 100% 100% 0 100%;
                      background: white;
                      left: -30%;
                      bottom: 0;
                    }
                    .clouds:after {
                      width: 1.5em;
                      height: 1.5em;
                      border-radius: 100% 100% 100% 0;
                      background: white;
                      right: -30%;
                      bottom: 0;
                    }
                    
                    @keyframes hop {
                      20% {
                        -moz-transform: rotate(-10deg) translate(1em, -2em);
                        -ms-transform: rotate(-10deg) translate(1em, -2em);
                        -webkit-transform: rotate(-10deg) translate(1em, -2em);
                        transform: rotate(-10deg) translate(1em, -2em);
                        box-shadow: -0.2em 3em 0 -1em #b78e81;
                      }
                      40% {
                        -moz-transform: rotate(10deg) translate(3em, -4em);
                        -ms-transform: rotate(10deg) translate(3em, -4em);
                        -webkit-transform: rotate(10deg) translate(3em, -4em);
                        transform: rotate(10deg) translate(3em, -4em);
                        box-shadow: -0.2em 3.25em 0 -1.1em #b78e81;
                      }
                      60%,75% {
                        -moz-transform: rotate(0) translate(4em, 0);
                        -ms-transform: rotate(0) translate(4em, 0);
                        -webkit-transform: rotate(0) translate(4em, 0);
                        transform: rotate(0) translate(4em, 0);
                        box-shadow: -0.2em 1em 0 -0.75em #b78e81;
                      }
                    }
                    @keyframes kick {
                      20%,50% {
                        box-shadow: 4em 0.4em 0 -0.35em #3f3334, 0.5em 1.5em 0 white, 4em 1.75em 0 -0.3em white, 4em 1.75em 0 -0.3em white, 4em 1.9em 0 -0.4em white;
                      }
                      40% {
                        box-shadow: 4em 0.4em 0 -0.35em #3f3334, 0.5em 2em 0 white, 4em 1.75em 0 -0.3em white, 4.2em 1.75em 0 -0.2em white, 4.4em 1.9em 0 -0.2em white;
                      }
                    }
                    @keyframes cloudy {
                      40% {
                        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=75);
                        opacity: 0.75;
                        -moz-transform: translate(-3em, 0);
                        -ms-transform: translate(-3em, 0);
                        -webkit-transform: translate(-3em, 0);
                        transform: translate(-3em, 0);
                      }
                      55% {
                        filter: progid:DXImageTransform.Microsoft.Alpha(Opacity=0);
                        opacity: 0;
                        -moz-transform: translate(-4em, 0);
                        -ms-transform: translate(-4em, 0);
                        -webkit-transform: translate(-4em, 0);
                        transform: translate(-4em, 0);
                      }
                      90% {
                        -moz-transform: translate(0, 0);
                        -ms-transform: translate(0, 0);
                        -webkit-transform: translate(0, 0);
                        transform: translate(0, 0);
                      }
                    }


                </style>
                
                <div class="rec__background">
                    <div class="rec__circle">
                        <div class="rabbit"></div>
                        <div class="clouds"></div>
                    </div>
                </div>
            `)
            
            const firstName = Array.from(document.querySelectorAll('span')).find(e => e.textContent.trim() === 'First Name').closest('.form-control-group').querySelector('.text-field').value
            const nationalityContainer = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Nationality').closest('.control-group')
            let nationality = null
            if (nationalityContainer) {
                nationality = nationalityContainer.querySelector('.item').textContent
            } else{
                displayMessage(2, 'Nationality not filled in')
                nationality = 'Unset'
            }
            let expectationsDocExists = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Expectations Document').closest('.form-control-group').querySelector('.thumbnails').querySelectorAll('.FileUploadListItem').length > 0
            
            let proofOfNi = '•&nbsp;&nbsp;&nbsp;&nbsp;National Insurance number- this can be a letter with your NI on it or a P60/P45'
            let photo = '•&nbsp;&nbsp;&nbsp;&nbsp;Photo for ID badge on a white background, no filters.'
            let rtwDocs = '•&nbsp;&nbsp;&nbsp;&nbsp;Right to work documents'
            let podId = '•&nbsp;&nbsp;&nbsp;&nbsp;X 2 proof of ID'
            let overseasPoliceCheck = '•&nbsp;&nbsp;&nbsp;&nbsp;Overseas police check - Please complete <a href="https://www.gov.uk/government/publications/criminal-records-checks-for-overseas-applicants">here</a>.'
            let dbs = '•&nbsp;&nbsp;&nbsp;&nbsp;DBS on Update Service – Must be enhanced, child and adult.'
            let poa = '•&nbsp;&nbsp;&nbsp;&nbsp;X 2 posted proof of addresses - These are the ones that get posted to you- bank statement, Council tax bill, Utility bill, within the last 3 months -Cannot accept online statements.'
            let docuSigns = expectationsDocExists ? null : '•&nbsp;&nbsp;&nbsp;&nbsp;DocuSigns  - You should receive a separate email with this link.'
            let imms = '•&nbsp;&nbsp;&nbsp;&nbsp;Proof of immunisations (if possible) – If you don’t have these, please just complete the DocuSign Health Declaration.'
            let diploma = '•&nbsp;&nbsp;&nbsp;&nbsp;Nurse Diploma'
            let entryStatementCertificate = '•&nbsp;&nbsp;&nbsp;&nbsp;Nurse Entry statement certificate'
            let liabilityInsurance = '•&nbsp;&nbsp;&nbsp;&nbsp;Nurses liability insurance'
            let pinCheck = '•&nbsp;&nbsp;&nbsp;&nbsp;NMC Pin - We will use this to do pin check.'

            //Right to work section
            const rtwContainer = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Right to Work Documentation').closest('.FormHeader').querySelectorAll('.SubformSummaryItem')
            if (rtwContainer.length > 0) {
                //Expand the right to work section if it exists
                const rightToWorkButton = rtwContainer[rtwContainer.length - 1].querySelector('.SummaryTableCell') //Click on the last one if there's more than one
                rightToWorkButton.click()
                await waitABit(300)

                //Check the NI and photo files are there
                const numberOfNiFiles = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'National insurance number evidence').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length
                proofOfNi = numberOfNiFiles > 0 ? null : proofOfNi
                const numberOfPhotoFiles = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Photograph').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length
                photo = numberOfPhotoFiles > 0 ? null : photo

                //If they are British there should be a passport file or a right to work file, we don't check expiry dates 
                //If not, there needs to be a RTW file and the expiry date can't be in the past
                const numberOfRTWFiles = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Right to work check (only if applicable)').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length
                if (['British', 'English', 'Irish', 'Scottish', 'Northern Irish'].includes(nationality.trim())) {
                    const numberOfPassportFiles = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Passport').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length
                    //const passportExiryDate = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Right to Work Documentation').closest('.FormHeader').parentElement.querySelectorAll('SPAN')).find(e => e.textContent.trim() === 'Passport Expiry').closest('.form-control-group').querySelector('input').value
                    rtwDocs = numberOfPassportFiles > 0 || numberOfRTWFiles > 0  ? null : '•&nbsp;&nbsp;&nbsp;&nbsp;Right to work documents - British passport or birth certificate.'
                } else{
                    const rtwExiryDate = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Right to Work Documentation').closest('.FormHeader').parentElement.querySelectorAll('SPAN')).find(e => e.textContent.trim() === 'Right to work check Expiry').closest('.form-control-group').querySelector('input').value
                    rtwDocs = numberOfRTWFiles > 0 && isRTWStringDateValid(rtwExiryDate) ? null : '•&nbsp;&nbsp;&nbsp;&nbsp;Right to work documents - <a href="https://www.gov.uk/prove-right-to-work/get-a-share-code-online">Share code</a>'
                }
            } 

            //Proof of ID section
            const poidContainer = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Identification Documentation').closest('.FormHeader').querySelectorAll('.SubformSummaryItem')
            if (poidContainer.length > 0) {
                //Expand the Proof of ID section if it exists, click on the last one if there's more than one.
                const poIdButton = poidContainer[poidContainer.length - 1].querySelector('.SummaryTableCell')
                poIdButton.click()
                await waitABit(300)

                //For both ID documents, the file needs to be there and the expiry date must be in the future
                const poid1FileExists = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Identification Documentation').closest('.FormHeader').parentElement.querySelectorAll('*')).find(e => e.textContent.trim() === 'Document 1').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                const poid2FileExists = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Identification Documentation').closest('.FormHeader').parentElement.querySelectorAll('*')).find(e => e.textContent.trim() === 'Document 2').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                
                const poId1Expiry = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Identification Documentation').closest('.FormHeader').parentElement.querySelectorAll('*')).filter(e => e.textContent.trim() === 'Document 1 Expiry')[1].querySelector('input').value
                const poId2Expiry = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Identification Documentation').closest('.FormHeader').parentElement.querySelectorAll('*')).filter(e => e.textContent.trim() === 'Document 2 Expiry')[1].querySelector('input').value
                
                let poID1OK = poid1FileExists && isRTWStringDateValid(poId1Expiry)
                let poID2OK = poid2FileExists && isRTWStringDateValid(poId2Expiry)

                if (poID1OK && poID2OK) {
                    podId = null
                } else if (poID1OK || poID2OK) {
                    podId = `•&nbsp;&nbsp;&nbsp;&nbsp;X1 Proof of ID`
                } else{
                    podId = `•&nbsp;&nbsp;&nbsp;&nbsp;X2 Proof of ID`
                }
            } 

            //DBS section
            const dbsContainer = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'DBS').closest('.FormHeader').querySelectorAll('.SubformSummaryItem')
            if (dbsContainer.length > 0) {
                //Expand the Proof of ID section if it exists, click on the last one if there's more than one.
                const dbsButton = dbsContainer[dbsContainer.length - 1].querySelector('.SummaryTableCell')
                dbsButton.click()
                await waitABit(300)

                //Check if there is an overseas police check file
                const overseasPoliceCheckExists = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Overseas police check (only if applicable)').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                overseasPoliceCheck =  overseasPoliceCheckExists ? null : overseasPoliceCheck


                //Check the DBS file exists and is in date
                const dbsExists = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'DBS certificate').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                const dbsExiryDate = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'DBS').closest('.FormHeader').parentElement.querySelectorAll('SPAN')).find(e => e.textContent.trim() === 'Annual Expiry date').closest('.form-control-group').querySelector('input').value
                dbs = dbsExists && isStringDateinTheFuture(dbsExiryDate) ? null : dbs
            }
            
            //If they are British, they don't need an overseas police check, we can check this even if the dbsContainer hasn't been filled in
            if (['British', 'English', 'Irish', 'Scottish', 'Northern Irish'].includes(nationality.trim())) {
                overseasPoliceCheck = null
            }

            //Proof address section
            const poaContainer = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Proof of address Documentation').closest('.FormHeader').querySelectorAll('.SubformSummaryItem')
            if (poaContainer.length > 0) {
                
                //Expand the Proof of address section if it exists, click on the last one if there's more than one.
                const poaButton = poaContainer[poaContainer.length - 1].querySelector('.SummaryTableCell')
                poaButton.click()
                
                await waitABit(300)

                //Just check the files exist, don't worry about dates
                const poa1FileExists = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Proof of address Documentation').closest('.FormHeader').parentElement.querySelectorAll('*')).find(e => e.textContent.trim() === 'Document 1').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                const poa2FileExists = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Proof of address Documentation').closest('.FormHeader').parentElement.querySelectorAll('*')).find(e => e.textContent.trim() === 'Document 2').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                if (poa1FileExists && poa2FileExists) {
                    poa = null
                } else if (poa1FileExists || poa2FileExists) {
                    poa = `•&nbsp;&nbsp;&nbsp;&nbsp;X 1 posted proof of address - Bank statement, Council tax bill, Utility bill, within the last 3 months (Cannot accept online statements).`
                } else{
                    poa = `•&nbsp;&nbsp;&nbsp;&nbsp;X 2 posted proof of addresses - Bank statement, Council tax bill, Utility bill, within the last 3 months (Cannot accept online statements)`
                }
                
            } 

            //Health Information section
            const healthContainer = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Health Information').closest('.FormHeader').querySelectorAll('.SubformSummaryItem')
            if (healthContainer.length > 0) {
                //Expand the Health Information section if it exists, click on the last one if there's more than one.
                const healthButton = healthContainer[healthContainer.length - 1].querySelector('.SummaryTableCell')
                healthButton.click()
                await waitABit(300)

                const immsFileExists = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Health Information').closest('.FormHeader').parentElement.querySelectorAll('*')).find(e => e.textContent.trim() === 'Immunisation history').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                imms = immsFileExists ? null : imms
            }

            //Health Declarations section
            const healthDecContainer = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Health Declarations').closest('.FormHeader').querySelectorAll('.SubformSummaryItem')
            if (healthDecContainer.length > 0) {
                //Expand the Proof of address section if it exists, click on the last one if there's more than one.
                const healthDecButton = healthDecContainer[healthDecContainer.length - 1].querySelector('.SummaryTableCell')
                healthDecButton.click()
                await waitABit(300)

                const immsDecExiryDate = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Health Declarations').closest('.FormHeader').parentElement.querySelectorAll('SPAN')).find(e => e.textContent.trim() === 'Date Uploaded').closest('.form-control-group').querySelector('input').value
                const immsDecExists = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Health Declarations').closest('.FormHeader').parentElement.querySelectorAll('*')).find(e => e.textContent.trim() === 'Health Declaration').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                imms = immsDecExists && isStringDateLessThanAYearOld(immsDecExiryDate)  ? null : imms
            }

            //Training
            let training = ''
            const trainingRows = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Training').closest('.FormHeader').querySelectorAll(".SummaryTableCellInner"))
            
            function addTraining(trainingObject){
                let coursesOutstanding = false
                
                //Loop through the practicalTrainingListBeforeCompliant var and see if each course exists in the training table.
                trainingObject.forEach((item, index) => {
                    
                    const foundCourse = trainingRows.find((element)=> element.textContent == item.course)
                
                    //If the course does not exist, add it to the outstanding training string.
                    if (!foundCourse) {
                        if (!training.includes(item.course)) {
                            training += `</br>•&nbsp;&nbsp;&nbsp;&nbsp;${item.course}`
                            coursesOutstanding = true
                        }
                    } else{
                        //If the course exists, check it has an expiry date that's in the future, if it isn't, add it to the outstanding training string.
                        const foundCourseDate = foundCourse.parentElement.parentElement.querySelectorAll('.SummaryTableCellInner')[2].textContent
                        if (!isStringDateinTheFuture(foundCourseDate)) {
                            training += `</br>•&nbsp;&nbsp;&nbsp;&nbsp;${item.course}`
                            coursesOutstanding = true                         
                        }
                    }

                    //If it's the last one in the list, add return, looks nicer. 
                    if (index == trainingObject.length - 1) {
                        training += '</br>'
                    } 
                })

                return coursesOutstanding
            }


            //Nurse documents
            const role = Array.from(document.querySelectorAll('SPAN')).find((span)=> span.textContent == 'Role').parentElement.parentElement.querySelector('.item').textContent
            if (['RMN', 'RGN'].includes(role)) {
                //Nurses need ILS instead of BLS, find and replace these in in the practicalTrainingListBeforeCompliant array.
                const blsKey = practicalTrainingListBeforeCompliant.find((object) => object.course == 'Basic Life Support Adults')
                const plsKey = practicalTrainingListBeforeCompliant.find((object) => object.course == 'Basic Life Support Paediatrics')
                blsKey.course = 'ILS Adults (Practical)'
                plsKey.course = 'ILS Paediatrics (Practical)'

                //Find the nurses section and expand it
                const nurseContainer = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Nurses Documentation').closest('.FormHeader').querySelectorAll('.SubformSummaryItem')
                if (nurseContainer.length > 0) {
                    const nurseButton = nurseContainer[nurseContainer.length - 1].querySelector('.SummaryTableCell')
                    nurseButton.click()
                    await waitABit(300)

                    const diplomaFileExists = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Nurses Documentation').closest('.FormHeader').parentElement.querySelectorAll('*')).find(e => e.textContent.trim() === 'Nurse diploma').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                    diploma = diplomaFileExists ? null : diploma
                    
                    const entryFileExists = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Nurses Documentation').closest('.FormHeader').parentElement.querySelectorAll('*')).find(e => e.textContent.trim() === 'Entry statement certificate').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                    entryStatementCertificate = entryFileExists ? null : entryStatementCertificate
                    
                    const pinCheckFileExists = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Nurses Documentation').closest('.FormHeader').parentElement.querySelectorAll('*')).find(e => e.textContent.trim() === 'Pin check').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                    pinCheck = pinCheckFileExists ? null : pinCheck

                    const liabilityContainer = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Nurses Documentation').closest('.FormHeader').parentElement.querySelectorAll('*')).find((element) => element.textContent == 'Liability Insurance').parentElement.parentElement.querySelectorAll('.SubformSummaryItem')
                    if (liabilityContainer.length > 0) {
                        const liabilityButton = liabilityContainer[liabilityContainer.length - 1].querySelector('.SummaryTableCell')
                        liabilityButton.click()
                        await waitABit(300)

                        const liabilityFileExists = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Liability Insurance').closest('.FormHeader').parentElement.querySelectorAll('*')).find(e => e.textContent.trim() === 'Documentation upload').closest('.form-control-group').querySelectorAll('.FileUploadListItemTimestamp').length > 0
                        const liabilityExpiry = Array.from(Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Liability Insurance').closest('.FormHeader').parentElement.querySelectorAll('*')).filter(e => e.textContent.trim() === 'Expiry date')[1].querySelector('input').value
                        liabilityInsurance = liabilityFileExists && isStringDateinTheFuture(liabilityExpiry)  ? null : liabilityInsurance
                    }
                }
            }

            //Training
            const status = Array.from(document.querySelectorAll('*')).find(e => e.textContent.trim() === 'Status').parentElement.querySelector('.item').textContent
            
            //If they are onboarding the training list is smaller than if they are registered
            if (status != 'Onboarding') {
                practicalTrainingListBeforeCompliant.push(...swMandatoryWithin6MonthPractical)
                flexebeeTrainingListBeforeCompliant.push(...swMandatoryWithin6MonthFlexebee)
            }
            
            
            //Add the training headings, but then remove them if there are no outstanding courses
            training += `</br><b>Classroom Training</b>`
            if (!addTraining(practicalTrainingListBeforeCompliant)) {
                training = training.replaceAll('</br><b>Classroom Training</b>', '')
            }
            
            training += `</br><a href="https://portal.flexebee.co.uk/"><b>Flexebee Training</b></a>`
            if (!addTraining(flexebeeTrainingListBeforeCompliant)) {
                training = training.replaceAll('</br></br><a href="https://portal.flexebee.co.uk/"><b>Flexebee Training</b></a>', '')
            }

            //Copy text with HTML tags when pasting into Outlook, remove them when pasting into WhatsApp
            const text = `Good ${getTimeOfDay()} ${firstName},</br></br>We are really pleased that you have decided to work with us and look forward to welcoming you to our team!</br></br>Before your start date, we need to complete several checks to ensure compliance with the legislation and guidance in place to keep the people we support safe. This process is essential for maintaining our commitment to safety and quality in our services.</br></br>To begin this process, please can you provide us with the following:</br></br><b>Documents</b></br>${proofOfNi ? proofOfNi + '</br>' : ''}${photo ? photo + '</br>' : ''}${podId ? podId + '</br>' : ''}${rtwDocs ? rtwDocs + '</br>' : ''}${overseasPoliceCheck ? overseasPoliceCheck + '</br>' : ''}${dbs ? dbs + '</br>' : ''}${poa ? poa + '</br>' : ''}${docuSigns ? docuSigns + '</br>' : ''}${imms ? imms + '</br>' : ''}${['RGN', 'RMN'].includes(role) ? `${diploma ? diploma + '</br>' : ''}${entryStatementCertificate ? entryStatementCertificate + '</br>' : ''}${liabilityInsurance ? liabilityInsurance + '</br>' : ''}${pinCheck ? pinCheck + '</br>' : ''}` : ''}${training}`
            const htmlBlob = new Blob([text], { type: 'text/html' })
            const textBlob = new Blob([convertHTMLToText(text)], { type: 'text/plain' })
            
            const data = [
              new ClipboardItem({
                'text/html': htmlBlob,
                'text/plain': textBlob
              })
            ]
            
            navigator.clipboard.write(data)
            // const background = document.querySelector('.rec__background')
            // if (background) {
            //     background.remove()
            // }

            const rec__circle = document.querySelector('.rec__circle')
            rec__circle.style.display = 'block'
            rec__circle.style.width = '700px'
            rec__circle.style.height = '600px'
            rec__circle.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
            rec__circle.style.borderRadius = '10px'
            rec__circle.style.padding = '20px'
            rec__circle.style.overflowY = 'scroll'
            rec__circle.style.scrollbarWidth = 'none'
            rec__circle.innerHTML = `${text}`

            window.scrollTo(0, 0)
            displayMessage(0, 'List Coppied')
        } else if (e.target.classList.contains('rec__background')) {
            const background = document.querySelector('.rec__background')
            if (background) {
                background.remove()
            }
        }
    })
}

//Helpers
function getTimeOfDay() {
    const hour = new Date().getHours()

    if (hour >= 5 && hour < 12) {
        return 'morning'
    } else if (hour >= 12 && hour < 18) {
        return 'afternoon'
    } else {
        return 'evening'
    }
}

function isStringDateinTheFuture(date){
    if (date == '' || date == undefined) {
        return false
    }
    
    const[day, month, year] = date.split('/').map(Number)
    date = new Date(year, month - 1, day)
    today = new Date()
    return date > today
}

function isRTWStringDateValid(date){
    //For right to work, if the date is empty we assume it never expires
    if (date == '' || date == undefined) {
        return true
    }
    
    const[day, month, year] = date.split('/').map(Number)
    date = new Date(year, month - 1, day)
    today = new Date()
    return date > today
}

function isStringDateLessThanAYearOld(date){
    if (date == '' || date == undefined) {
        return false
    }
    
    const[day, month, year] = date.split('/').map(Number)
    date = new Date(year, month - 1, day)
    aYearAgo = new Date()
    aYearAgo.setFullYear(aYearAgo.getFullYear() - 1)

    return date > aYearAgo
}

function convertHTMLToText(text){
    return text.replaceAll('</br>', '\n')
        .replaceAll('&nbsp;&nbsp;&nbsp;&nbsp;', '\t')
        .replaceAll('<b>', '')
        .replaceAll('</b>', '')
        .replaceAll('<a href="https://portal.flexebee.co.uk/">Flexebee Training</a>', 'Flexebee Training - https://portal.flexebee.co.uk')
        .replaceAll('<a href="https://www.gov.uk/government/publications/criminal-records-checks-for-overseas-applicants">here</a>', 'here https://www.gov.uk/government/publications/criminal-records-checks-for-overseas-applicants')
        .replaceAll('<a href="https://www.gov.uk/prove-right-to-work/get-a-share-code-online">Share code</a>', 'Please generate a share code here https://www.gov.uk/prove-right-to-work/get-a-share-code-online')
}

function loadXlsxLibrary() {
    return new Promise((resolve, reject) => {
        if (window.XLSX) {
            resolve(window.XLSX)
            return
        }

        const script = document.createElement('script')
        script.src = 'https://cdn.jsdelivr.net/npm/xlsx@0.18.3/dist/xlsx.full.min.js'
        script.onload = () => resolve(window.XLSX)
        script.onerror = () => reject(new Error('Failed to load XLSX library'))
        document.head.appendChild(script)
    })
}

function exportResultsTableToXlsx() {
    const table = document.querySelector('.resultsTable')

    if (!table) {
        console.warn('No results table found to export')
        return
    }

    if (!window.XLSX) {
        console.error('XLSX library is not loaded. Check manifest.json and file path.')
        return
    }

    try {
        const XLSX = window.XLSX
        
        const thinBorder = { style: 'thin', color: { rgb: 'CCCCCC' } };
        const cellBorders = { top: thinBorder, bottom: thinBorder, left: thinBorder, right: thinBorder };

        // Base styles
        const headerStyle = {
            font: { name: 'Arial', sz: 12, bold: true },
            fill: { patternType: 'solid', fgColor: { rgb: 'EFEFEF' } }, // Added patternType
            alignment: { vertical: 'center', horizontal: 'center', wrapText: true },
            border: cellBorders
        };

        const defaultBodyStyle = {
            font: { name: 'Arial', sz: 11 },
            alignment: { vertical: 'center', horizontal: 'center', wrapText: true },
            border: cellBorders
        };

        const allRows = Array.from(table.querySelectorAll('tr')).filter(row => {
            return row.textContent && row.textContent.trim().length > 0;
        });

        // First, extract header text so we can identify the columns to format
        const headers = Array.from(allRows[0].querySelectorAll('th, td')).map(cell => 
            (cell.textContent || '').replace(/\s+/g, ' ').trim()
        );

        const colWidths = [];
        const today = new Date()

        const titleCase = (value) => {
            return value.toLowerCase().split(' ').map(word => {
                if (word === 'pmva') {
                    return 'PMVA'
                }
                if (word === 'Dbs') {
                    return 'DBS'
                }
                if (word === '(practical)') {
                    return '(Practical)'
                }
                return word.charAt(0).toUpperCase() + word.slice(1)
            }).join(' ')
        }

        const rows = allRows.map((row, rowIndex) => {
            return Array.from(row.querySelectorAll('th, td')).map((cell, colIndex) => {
                const rawText = (cell.textContent || '').replace(/\s+/g, ' ').trim();
                const text = rowIndex === 0 ? titleCase(rawText) : rawText;
                
                if (!colWidths[colIndex]) colWidths[colIndex] = 0;
                colWidths[colIndex] = Math.max(colWidths[colIndex], text.length);

                // Default style assignment
                let currentStyle = rowIndex === 0 ? { ...headerStyle } : { ...defaultBodyStyle };

                // Apply conditional formatting to any date cell in DD/MM/YYYY format
                if (rowIndex > 0) {
                    const headerName = (headers[colIndex] || '').trim();
                    const excludedHeaders = ['date of birth', 'dbs issue date'];

                    if (!excludedHeaders.includes(headerName.toLowerCase())) {
                        const dateParts = text.split('/');
                        if (dateParts.length === 3) {
                            const day = parseInt(dateParts[0], 10);
                            const month = parseInt(dateParts[1], 10) - 1; // JS months are 0-11
                            const year = parseInt(dateParts[2], 10);
                            const dueDate = new Date(year, month, day);

                            if (!isNaN(dueDate.getTime())) {
                                const diffTime = dueDate - today;
                                const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

                                currentStyle = {
                                    ...defaultBodyStyle,
                                    fill: { patternType: 'solid', fgColor: { rgb: 'FFFFFF' } }
                                };

                                if (diffDays < 0) {
                                    currentStyle.fill = { patternType: 'solid', fgColor: { rgb: 'FF0000' } };
                                } else if (diffDays <= 30) {
                                    currentStyle.fill = { patternType: 'solid', fgColor: { rgb: 'FFC000' } };
                                    currentStyle.font = { ...currentStyle.font, color: { rgb: '000000' } };
                                }
                            }
                        }
                    }
                }

                return { v: text, s: currentStyle };
            });
        });

        //Freeze pane the top row (Note: Standard SheetJS community build doesn't support freeze/styling properties)
        const worksheet = XLSX.utils.aoa_to_sheet(rows)
        worksheet['!freeze'] = { xSplit: 0, ySplit: 1 }

        // Set column widths
        worksheet['!cols'] = colWidths.map((_, colIndex) => {
            const headerText = headers[colIndex] || '';
            if (headerText.includes(' ') && headerText.length > 12) {
                return { wch: 15 };
            }
            return { wch: Math.max(colWidths[colIndex] + 3, 11) };
        });

        // Set row heights
        worksheet['!rows'] = allRows.map((_, rowIndex) => ({
            hpt: rowIndex === 0 ? 52 : 28
        }));

        const workbook = XLSX.utils.book_new()
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Schedule 2')

        const workbookBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array', cellStyles: true })
        const blob = new Blob([workbookBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' })

        const todayForFileName = new Date()
        const fileDate = `${todayForFileName.getDate().toString().padStart(2, '0')}.${(todayForFileName.getMonth() + 1).toString().padStart(2, '0')}.${todayForFileName.getFullYear()}`

        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = `Schedule 2 Report ${fileDate}.xlsx`
        document.body.appendChild(link)
        link.click()
        link.remove()
        URL.revokeObjectURL(link.href)
    } catch (error) {
        console.error('Failed to export Excel workbook', error)
    }
}

function addSchedule2ReportButton() {
    //Keep checking if we are on the S2 Report page and the Schedule 2 heading is on screen
    let s2Interval = setInterval(() => {
        let s2Heading = document.querySelector('.ReportTitlePreview')
        
        if (window.location.href == 'https://www.vantage-modules.co.uk/ECS/Secure/Reporting/Index?reportId=612' && s2Heading && s2Heading.textContent == 'Schedule 2') {            
            //If it is, clear the interval and add the new button
            clearInterval(s2Interval)

            //Change the results per page selector so now 10000 is an option
            const resultsPerPageSelector = document.querySelector('.ReportResultsPagesToShowInput')
            const resultOptions = resultsPerPageSelector.querySelectorAll('option')
            resultOptions[resultOptions.length - 1].innerText = 10000

            
            s2Heading.insertAdjacentHTML('beforeend', `
                <style>
                    .s2__formatButon {
                        background: transparent;
                        border: 1ps solid black;
                        color: #2f3542;
                        padding: 10px 16px;
                        font-size: 13px;
                        font-weight: 600;
                        cursor: pointer;
                        transition: .2s ease;
                        margin-left: 20px;
                        transform: translateY(-3px);
                    }
                    
                    .s2__formatButon:hover {
                        background: #f3f4f6;
                        color: #111827;
                    }
                    
                    .s2__formatButon:active {
                        background: #e5e7eb;
                    }
                </style>
            
                <button class="s2__formatButon">Format S2</button>
            `)

            document.addEventListener('click', (e)=>{
                if (e.target.classList.contains('s2__formatButon')) {
                    s2ReportClick()
                }
            })
            
        } else{
            console.log(`S2 Report button not added, window.location.href: ${window.location.href}`)
        }
    }, 1000)
        

    function s2ReportClick(){
        // First remove all the the pointless blue group rows 
        const resultsTableAnnoyingRows = document.querySelectorAll('.resultsTable .resultsGroupHeader')
        resultsTableAnnoyingRows.forEach((row)=>{
            row.remove()
        })

        // Then add new columns for the below courses
        const rowsToAdd = {
            'Safeguarding Children Level 3': '',
            'Child sexual exploitation': '',
            'PMVA (Practical)': '',
            'Substance Misuse': '',
            'Basic Life Support Adults': '',
            'Basic Life Support Paediatrics': '',
            'Medication Online': '',
            'Food hygiene': '',
            'Learning disabilities': '',
            'County Lines and knife crime': '',
            'Moving and Handling (Practical)': '',
            'Epilepsy': '',
        }
        const table = document.querySelector('.resultsTable thead')
        if (table) {
            const topRow = table.querySelector('.resultsTableRow')
            const topRowArray = Array.from(topRow)
            const courseHeading = topRowArray.find((th) => th.textContent == 'Course')
            for (let course in rowsToAdd) {
                topRow.insertAdjacentHTML('beforeend', `<th style="background-color:#FFFFFF; color: #000000" class="resultsTableHeader ">${course}</th>`)
            }
        }

        // Then scrape the date values for the new course columns
        const allRows = document.querySelectorAll('.resultsDataRow')
        let currentPerson = 0
        for (let i = 0; i < allRows.length; i++) {
            const cells = allRows[i].querySelectorAll('td')
            if (cells[3].textContent != ' " " ') {
                currentPerson++

                allRows[i].insertAdjacentHTML('beforeend', `
                    <td class="resultsTableCell CPL3${currentPerson}"></td>
                    <td class="resultsTableCell CSE${currentPerson}"></td>
                    <td class="resultsTableCell PMVA${currentPerson}"></td>
                    <td class="resultsTableCell SUB${currentPerson}"></td>
                    <td class="resultsTableCell BLSA${currentPerson}"></td>
                    <td class="resultsTableCell BLSP${currentPerson}"></td>
                    <td class="resultsTableCell MED${currentPerson}"></td>
                    <td class="resultsTableCell FOOD${currentPerson}"></td>
                    <td class="resultsTableCell LD${currentPerson}"></td>
                    <td class="resultsTableCell CL${currentPerson}"></td>
                    <td class="resultsTableCell MH${currentPerson}"></td>
                    <td class="resultsTableCell EPILEPSY${currentPerson}"></td>
                `)
                


            } else{
                if (cells[13].textContent == 'Safeguarding Children Level 3') {
                    document.querySelector(`.CPL3${currentPerson}`).textContent = cells[14].textContent
                }
                
                if (cells[13].textContent == 'Child sexual exploitation') {
                    document.querySelector(`.CSE${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'PMVA (Practical)') {
                    document.querySelector(`.PMVA${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'Substance Misuse') {
                    document.querySelector(`.SUB${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'Basic Life Support Adults') {
                    document.querySelector(`.BLSA${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'Basic Life Support Paediatrics') {
                    document.querySelector(`.BLSP${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'ILS Adults (Practical)') {
                    document.querySelector(`.BLSA${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'ILS Paediatrics (Practical)') {
                    document.querySelector(`.BLSP${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'Medication Online') {
                    document.querySelector(`.MED${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'Food hygiene') {
                    document.querySelector(`.FOOD${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'Learning disabilities') {
                    document.querySelector(`.LD${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'County Lines and knife crime') {
                    document.querySelector(`.CL${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'Moving and Handling (Practical)') {
                    document.querySelector(`.MH${currentPerson}`).textContent = cells[14].textContent
                }

                if (cells[13].textContent == 'Epilepsy') {
                    document.querySelector(`.EPILEPSY${currentPerson}`).textContent = cells[14].textContent
                }
                
                allRows[i].remove()
            }
        }

        //Remove the hidden rows
        const resultsTableHiddenRows = document.querySelectorAll('.resultsTableRow .resultsTableHidden')
        resultsTableHiddenRows.forEach((row)=>{
            row.remove()
        })

        // Remove the course and date next due cells from the top row
        const topRowRE = document.querySelectorAll('.resultsTableRow th')
        topRowRE[11].remove()
        topRowRE[12].remove()

        // Remove the course and date next due cells from everywhere else
        const rowsRE = document.querySelectorAll('.resultsTableRow')
        rowsRE.forEach((row) => {
            const cells = row.querySelectorAll('.resultsTableCell')
            
            // Check to ensure the cells actually exist before removing
            if (cells[11]) cells[11].remove()
            if (cells[12]) cells[12].remove()
        })


        // Replace the Vantage export to excel button with our one that looks the same
        document.querySelector('.ReportResultsExportToExcel').remove()
        document.querySelector('.ShowPivot').insertAdjacentHTML('afterend',`
            <span class="ReportResultsExportToExcel excelsior">
                <i class="fa fa-file-excel-o excelsior"></i>
                <a class="excelsior">Export to Excel</a>
            </span>
        `)

        document.addEventListener('click', (e) => {
            if (e.target.closest('.excelsior')) {
                exportResultsTableToXlsx()
            }
        })


        // Change the colour of the HTML cells based on the dates where needed
        const finishedTable = document.querySelector(".resultsTable")
        if (!finishedTable) return

        const headers = Array.from(finishedTable.querySelectorAll("thead th"))
        
        // 1. Find indexes of columns we want to ignore
        const ignoredIndexes = []
        headers.forEach((th, index) => {
            const headerText = th.textContent.trim().toLowerCase();
            if (headerText === "date of birth" || headerText === "dbs issue date") {
                ignoredIndexes.push(index)
            }
        });

        // Get current date details for threshold calculations
        const now = new Date()
        
        // Calculate the "one month from now" threshold
        const oneMonthFromNow = new Date()
        oneMonthFromNow.setMonth(now.getMonth() + 1)

        // 2. Helper function to parse "DD/MM/YYYY" format
        function parseDate(dateStr) {
            const parts = dateStr.trim().split("/")
            if (parts.length !== 3) return null
            
            const day = parseInt(parts[0], 10)
            const month = parseInt(parts[1], 10) - 1 // JS months are 0-11
            const year = parseInt(parts[2], 10)
            
            const parsedDate = new Date(year, month, day)
            // Ensure it parsed into a valid date object
            return isNaN(parsedDate.getTime()) ? null : parsedDate
        }

        // 3. Loop through data rows (excluding the header rows)
        const rows = finishedTable.querySelectorAll("tbody tr, tr.resultsDataRow")
        
        rows.forEach(row => {
            const cells = row.cells
            
            for (let i = 0; i < cells.length; i++) {
                // Skip the column if it's "Date of birth" or "DBS Issue Date"
                if (ignoredIndexes.includes(i)) continue

                const cellText = cells[i].textContent.trim()
                if (!cellText) continue

                // Try to parse the cell's text as a date
                const cellDate = parseDate(cellText)
                
                if (cellDate) {
                    if (cellDate < now) {
                        // Date is in the past (Red)
                        cells[i].style.backgroundColor = "#ff6060"
                    } else if (cellDate >= now && cellDate <= oneMonthFromNow) {
                        // Date is within the next month (Yellow)
                        cells[i].style.backgroundColor = "#ffd148"
                    }
                }
            }
        })

    }

}
