import { Project } from "./class/Project"

function showModal(id) {
    const modal = document.getElementById(id)
    modal.showModal()
}

// This document object is provided by the browser, and its main purpose is to help us interact with the html file
const newProjectBtn = document.getElementById("new-project-btn")
if (newProjectBtn) {
    newProjectBtn.addEventListener("click", () => {showModal("new-project-modal")})
} else {
    console.warn("New projects button was not found")
}

const projectForm = document.getElementById("new-project-form")
if (projectForm) {
    projectForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const formData = new FormData(projectForm)
        const project = {

            name: formData.get("name"),
            description: formData.get("description"),
            role: formData.get("userRole"),
            status: formData.get("status"),
            finishDate: formData.get("finishDate")
        }

        const myProject = new Project(formData.get("name"))
    
}) 

} else {
    console.warn("New project form was not found. Check the ID!")
}
