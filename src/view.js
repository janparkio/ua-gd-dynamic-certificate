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
    const form = document.getElementById("ws-form-2");
    const certificateBlock = document.querySelector(".ua-gd-certificate");
    const nameSpan = document.querySelector(".name-text");
    const courseTitle = document.querySelector(".course-title");

    if (form && certificateBlock && nameSpan && courseTitle) {
        const firstNameInput = document.getElementById("wsf-2-field-1");
        const lastNameInput = document.getElementById("wsf-2-field-2");

        if (firstNameInput && lastNameInput) {
            console.log("First Name Input:", firstNameInput);
            console.log("Last Name Input:", lastNameInput);
            console.log("Certificate Block:", certificateBlock);
            console.log("Course Title:", courseTitle);

            const updateCertificate = () => {
                const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
                nameSpan.textContent = fullName;
                console.log("Certificate updated to:", fullName);
            };

            firstNameInput.addEventListener("input", updateCertificate);
            lastNameInput.addEventListener("input", updateCertificate);
            console.log("Event listeners attached.");
        } else {
            console.error("One or more input elements not found!");
        }

        fetch("/wp-json/wp/v2/posts/" + postId + "?_fields=acf")  // Ensure postId is correctly determined
            .then(response => response.json())
            .then(data => {
                const courseName = data.acf.field_6633d7d0a91c4;
                if (courseName) {
                    courseTitle.textContent = courseName;
                } else {
                    courseTitle.textContent = "Made in Americana";
                }
            })
            .catch(error => console.error("Error fetching ACF field:", error));
    } else {
        console.error("Form, certificate block, or critical elements not found!");
    }
});