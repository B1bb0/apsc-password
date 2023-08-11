const passwordVisibilityButton = document.querySelector(".password-visibility")
const passwordInput = document.querySelector('input[type="password"]')

passwordVisibilityButton.addEventListener("click", () => {
    const newIconText = passwordVisibilityButton.textContent === "visibility_off" ? "visibility" : "visibility_off"

    passwordVisibilityButton.textContent = newIconText

    const newType = passwordInput.getAttribute("type") === "password" ? "text" : "password"

    passwordInput.setAttribute("type", newType)
})