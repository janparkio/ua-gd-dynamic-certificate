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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('ws-form-2');
    const certificateBlock = document.querySelector(".ua-gd-certificate");

    if (form && certificateBlock) {
        const firstNameInput = document.getElementById('wsf-2-field-1');
        const lastNameInput = document.getElementById('wsf-2-field-2');

        console.log("First Name Input:", firstNameInput);
        console.log("Last Name Input:", lastNameInput);
        console.log("Certificate Block:", certificateBlock);

        if (firstNameInput && lastNameInput) {
            const updateCertificate = () => {
                const fullName = `${firstNameInput.value} ${lastNameInput.value}`;
                certificateBlock.textContent = `Certificado a ${fullName}`;
                console.log("Certificate updated to:", fullName); // Debugging: Log when update occurs
            };

            firstNameInput.addEventListener('input', updateCertificate); // Real-time update
            lastNameInput.addEventListener('input', updateCertificate); // Real-time update
            console.log("Event listeners attached."); // Debugging: Confirm listeners are attached
        } else {
            console.error('One or more input elements not found!');
        }
    } else {
        console.error('Form or certificate block not found!');
    }
});