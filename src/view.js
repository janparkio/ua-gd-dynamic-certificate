/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/**
 * This script is meant to run on the front-end for a specific block that includes dynamic interaction based on form input and ACF data.
 * It is triggered when the DOM content is fully loaded, ensuring all elements are accessible.
 */
document.addEventListener("DOMContentLoaded", function () {
    const observer = new MutationObserver(function (mutations, obs) {
        const form = document.getElementById("ws-form-2");
        const firstNameInput = document.getElementById("wsf-2-field-1");
        const lastNameInput = document.getElementById("wsf-2-field-2");
        const nameSpan = document.querySelector(".name-text");
        const courseTitleElement = document.getElementById("course-title-hidden"); // Get the hidden p element for course title
        const courseTitleDisplay = document.querySelector(".course-title"); // Element to display the course title
        const certificateBlock = document.querySelector(".ua-gd-certificate");

        if (form && firstNameInput && lastNameInput && nameSpan && courseTitleElement && certificateBlock && courseTitleDisplay) {
            console.log("All elements found. Adding event listeners and updating course title.");
            
            firstNameInput.addEventListener("input", () => updateCertificate(firstNameInput, lastNameInput, nameSpan, courseTitleElement, courseTitleDisplay));
            lastNameInput.addEventListener("input", () => updateCertificate(firstNameInput, lastNameInput, nameSpan, courseTitleElement, courseTitleDisplay));

            // Update the course title from the hidden element on initial load
            courseTitleDisplay.textContent = courseTitleElement.textContent;
            
            obs.disconnect(); // Stop observing once everything is set up
        } else {
            console.log("Waiting for elements...");
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});

function updateCertificate(firstNameInput, lastNameInput, nameSpan, courseTitleElement, courseTitleDisplay) {
    const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
    nameSpan.textContent = fullName; // Update the name displayed in the certificate
    console.log("Certificate updated to:", fullName);
}
