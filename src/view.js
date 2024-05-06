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
        const headingTitle = document.getElementById("heading-title"); // Get the hidden title for dynamic update
        const headingTextTitle = document.querySelector(".heading-text-title"); // Element to display the heading title
        const certificateBlock = document.querySelector(".ua-gd-certificate");

        if (form && firstNameInput && lastNameInput && nameSpan && headingTitle && headingTextTitle && certificateBlock) {
            console.log("All elements found. Adding event listeners and updating dynamic content.");
            
            firstNameInput.addEventListener("input", () => updateCertificate(firstNameInput, lastNameInput, nameSpan, headingTitle, headingTextTitle));
            lastNameInput.addEventListener("input", () => updateCertificate(firstNameInput, lastNameInput, nameSpan, headingTitle, headingTextTitle));

            // Update the heading title from the hidden element on initial load
            headingTextTitle.textContent = headingTitle.textContent;
            
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

function updateCertificate(firstNameInput, lastNameInput, nameSpan, headingTitle, headingTextTitle) {
    const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
    nameSpan.textContent = fullName; // Update the name displayed in the certificate
    headingTextTitle.textContent = headingTitle.textContent; // Update the course title dynamically
    console.log("Certificate updated to:", fullName);
}
